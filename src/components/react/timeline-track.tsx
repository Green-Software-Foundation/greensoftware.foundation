import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";

type TimelineSegment = { start: string | Date; end: string | Date };

type TimelineTrackProps = {
  /** Number of points in the timeline (dots). */
  count: number;
  /** Index up to which the track is filled (inclusive). */
  activeIndex: number;
  /** Optional time segments to derive progress automatically from current date. */
  segments?: TimelineSegment[];
  /** CSS class for the empty track background. */
  emptyClassName?: string;
  /** CSS class for the filled track. */
  filledClassName?: string;
  /** Height of the track in pixels. */
  height?: number;
};

export default function TimelineTrack({
  count,
  activeIndex,
  segments,
  emptyClassName = "bg-accent-lighter",
  filledClassName = "bg-primary",
  height = 12,
}: TimelineTrackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const [dotXs, setDotXs] = useState<number[]>([]);
  const [leftOffset, setLeftOffset] = useState<number>(0);
  const controls = useAnimation();

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const update = () => {
      setContainerWidth(node.clientWidth);

      const root = node.parentElement;
      if (root) {
        const containerRect = node.getBoundingClientRect();
        const dotNodes = Array.from(
          root.querySelectorAll<HTMLElement>("[data-timeline-dot]")
        );
        if (dotNodes.length > 0) {
          const xs = dotNodes.map((el) => {
            const r = el.getBoundingClientRect();
            return r.left + r.width / 2 - containerRect.left;
          });
          setDotXs(xs);
          setLeftOffset(xs[0] ?? 0);
        }
      }
    };

    const resizeObserver = new ResizeObserver(update);
    setContainerWidth(node.clientWidth);
    resizeObserver.observe(node);
    update();
    window.addEventListener("resize", update);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  const { targetWidth, baseLeft } = useMemo((): {
    targetWidth: number;
    baseLeft: number;
  } => {
    if (containerWidth === 0) return { targetWidth: 0, baseLeft: 0 };

    // Cap progress at activeIndex — the green line should stop at the pulsing dot
    if (dotXs.length >= count && count > 1) {
      const clampedIndex = Math.max(0, Math.min(activeIndex, count - 1));

      if (segments && segments.length > 0) {
        // Use time-based progress within the active segment for smooth animation,
        // but never exceed the activeIndex dot position
        const now = Date.now();
        let completedSegments = 0;
        let partial = 0;
        for (let i = 0; i < segments.length; i++) {
          const start = new Date(segments[i].start).getTime();
          const end = new Date(segments[i].end).getTime();
          if (Number.isNaN(start) || Number.isNaN(end) || end <= start) continue;
          if (now >= end) { completedSegments++; continue; }
          if (now <= start) break;
          partial = (now - start) / (end - start);
          break;
        }
        const normalized = (completedSegments + partial) / Math.max(1, segments.length - 1);
        const t = Math.max(0, Math.min(1, normalized));
        const intervals = Math.max(1, count - 1);
        const indexFloat = t * intervals;
        const i = Math.floor(indexFloat);
        const f = Math.min(1, Math.max(0, indexFloat - i));
        const maxX = dotXs[clampedIndex] - (dotXs[0] ?? 0);
        let dest: number;
        if (i >= intervals) {
          dest = dotXs[dotXs.length - 1] - (dotXs[0] ?? 0);
        } else {
          dest = dotXs[i] + f * (dotXs[i + 1] - dotXs[i]) - (dotXs[0] ?? 0);
        }
        return {
          targetWidth: Math.min(dest, maxX),
          baseLeft: dotXs[0] ?? 0,
        };
      }

      return {
        targetWidth: (dotXs[clampedIndex] ?? 0) - (dotXs[0] ?? 0),
        baseLeft: dotXs[0] ?? 0,
      };
    }

    if (count <= 1) return { targetWidth: 0, baseLeft: 0 };
    const clampedIndex = Math.max(0, Math.min(activeIndex, count - 1));
    const segmentWidth = containerWidth / (count - 1);
    return { targetWidth: clampedIndex * segmentWidth, baseLeft: 0 };
  }, [count, activeIndex, containerWidth, segments, dotXs]);

  useEffect(() => {
    controls.start({
      width: targetWidth as number,
      transition: { type: "spring", stiffness: 120, damping: 20 },
    });
  }, [targetWidth, controls]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-x-0 top-4 hidden -translate-y-1/2 md:block"
      aria-hidden
    >
      <div
        className={`${emptyClassName} w-full rounded-full`}
        style={{ height }}
      />
      <motion.div
        className={`${filledClassName} absolute top-1/2 -translate-y-1/2 rounded-full`}
        style={{ height, width: 0, left: baseLeft || leftOffset }}
        animate={controls}
      />
    </div>
  );
}
