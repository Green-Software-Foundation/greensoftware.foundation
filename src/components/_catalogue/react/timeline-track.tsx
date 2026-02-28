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
  /** CSS color token/class for the empty track background. */
  emptyClassName?: string;
  /** CSS color token/class for the filled track. */
  filledClassName?: string;
  /** Height of the track in pixels. */
  height?: number;
};

/**
 * A presentational component that renders a continuous horizontal track behind children
 * and animates a filled portion to the provided active index.
 *
 * Usage:
 * - Place this component inside a relatively positioned container that spans the dots.
 * - Provide `count` and `activeIndex`.
 * - Provide an array of refs (or data attributes) for dot elements? To keep API simple,
 *   we measure evenly spaced columns from the container width.
 */
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

  // Keep size in sync with container resize
  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const update = () => {
      setContainerWidth(node.clientWidth);

      // Measure dot centers relative to the container for accurate alignment
      const root = node.parentElement; // relative wrapper
      if (root) {
        const containerRect = node.getBoundingClientRect();
        const dotNodes = Array.from(root.querySelectorAll<HTMLElement>("[data-timeline-dot]"));
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
    // initial measure
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

    // If time segments are provided, compute continuous progress based on now.
    if (segments && segments.length > 0) {
      const now = Date.now();
      const normalized = (() => {
        const totalSegments = segments.length;
        let completed = 0;
        let partial = 0;
        for (let i = 0; i < totalSegments; i++) {
          const start = new Date(segments[i].start).getTime();
          const end = new Date(segments[i].end).getTime();
          if (Number.isNaN(start) || Number.isNaN(end) || end <= start) {
            // Invalid segment – skip from progress calculation
            continue;
          }
          if (now >= end) {
            completed += 1;
            continue;
          }
          if (now <= start) {
            break;
          }
          partial = (now - start) / (end - start);
          break;
        }
        // Map progress to intervals between dots. With N milestones there are N-1 intervals.
        const value = (completed + partial) / Math.max(1, totalSegments - 1);
        return Math.max(0, Math.min(1, value));
      })();
      const t = normalized;
      if (dotXs.length >= count) {
        const intervals = Math.max(1, count - 1);
        const indexFloat = t * intervals;
        const i = Math.floor(indexFloat);
        const f = Math.min(1, Math.max(0, indexFloat - i));
        if (i >= intervals) {
          return {
            targetWidth: dotXs[dotXs.length - 1] - (dotXs[0] ?? 0),
            baseLeft: dotXs[0] ?? 0,
          };
        }
        const left = dotXs[i];
        const right = dotXs[i + 1];
        const dest = left + f * (right - left);
        return { targetWidth: dest - (dotXs[0] ?? 0), baseLeft: dotXs[0] ?? 0 };
      }
      return { targetWidth: t * containerWidth, baseLeft: 0 };
    }

    // Fallback to discrete index positioning.
    if (count <= 1) return { targetWidth: 0, baseLeft: 0 };
    const clampedIndex = Math.max(0, Math.min(activeIndex, count - 1));
    if (dotXs.length >= count) {
      return {
        targetWidth: (dotXs[clampedIndex] ?? 0) - (dotXs[0] ?? 0),
        baseLeft: dotXs[0] ?? 0,
      };
    }
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
      <div className={`${emptyClassName} w-full rounded-full`} style={{ height }} />
      <motion.div
        className={`${filledClassName} absolute top-1/2 -translate-y-1/2 rounded-full`}
        style={{ height, width: 0, left: baseLeft || leftOffset }}
        animate={controls}
      />
    </div>
  );
}
