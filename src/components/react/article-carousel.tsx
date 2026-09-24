import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Img } from "@/components/react/image";

export interface Article {
  /** Article title */
  title: string;
  /** Short summary */
  description: string;
  /** Article thumbnail/hero image */
  imageSrc?: string;
  /** Link to the full article */
  href?: string;
  /** CTA text (defaults to "Read the story") */
  cta?: string;
  /** Secondary action under the read link — points at the project or assembly behind the article */
  secondaryCta?: { text: string; href: string };
}

interface Props {
  heading?: string;
  body?: string;
  articles: Article[];
  ctaText?: string;
  ctaHref?: string;
  /** Prominent button shown under the heading — the section's primary next step */
  primaryCtaText?: string;
  primaryCtaHref?: string;
  /** Cards visible at the widest breakpoint (3 by default, 4 for shorter cards) */
  slidesPerView?: 3 | 4;
}

/** Full class strings — Tailwind can't see dynamically built ones */
const slideWidthClasses: Record<number, string> = {
  3: "md:flex-[0_0_50%] lg:flex-[0_0_33.33%]",
  4: "md:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_25%]",
};

const imageSizes: Record<number, string> = {
  3: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  4: "(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
};

export function ArticleCarousel({
  heading,
  body,
  articles,
  ctaText,
  ctaHref,
  primaryCtaText,
  primaryCtaHref,
  slidesPerView = 3,
}: Props) {
  // Four across only fits if the cards themselves get shorter
  const compact = slidesPerView === 4;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    containScroll: false,
  });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      {(heading || body) && (
        <div className="mb-10 text-center md:mb-12">
          {heading && (
            <h2 className="text-2xl font-semibold md:text-3xl lg:text-4xl">
              {heading}
            </h2>
          )}
          {body && (
            <p className="mt-4 text-lg text-primary-dark max-w-3xl mx-auto">
              {body}
            </p>
          )}
          {primaryCtaText && primaryCtaHref && (
            <div className="mt-6">
              <a href={primaryCtaHref}>
                <Button variant="primary">{primaryCtaText}</Button>
              </a>
            </div>
          )}
        </div>
      )}

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {articles.map((article, index) => (
              <div
                className={`flex-[0_0_100%] min-w-0 pl-4 ${slideWidthClasses[slidesPerView]}`}
                key={index}
              >
                <div className="h-full rounded-xl border bg-white shadow-sm flex flex-col overflow-hidden">
                  {article.imageSrc && (
                    <div className="aspect-[16/9] overflow-hidden bg-gray-light">
                      <Img
                        src={article.imageSrc}
                        alt={article.title}
                        className="h-full w-full object-cover"
                        sizes={imageSizes[slidesPerView]}
                      />
                    </div>
                  )}
                  <div className={`flex flex-col justify-between flex-grow ${compact ? "p-5" : "p-6"}`}>
                    <div>
                      <h3 className={`mb-2 font-bold leading-tight ${compact ? "text-lg" : "text-xl"}`}>
                        {article.title}
                      </h3>
                      <p className={`text-sm text-gray-darker mb-4 ${compact ? "line-clamp-3" : ""}`}>
                        {article.description}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <a
                        href={article.href || "#"}
                        className="inline-flex items-center text-sm font-bold text-primary hover:underline"
                      >
                        {article.cta || "Read the story →"}
                      </a>
                      {article.secondaryCta && (
                        <a
                          href={article.secondaryCta.href}
                          className="inline-flex items-center text-sm text-gray-darker underline underline-offset-4 hover:text-primary"
                        >
                          {article.secondaryCta.text}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {ctaText && ctaHref && (
          <div className="mt-8 text-center">
            <a
              href={ctaHref}
              className="inline-flex items-center text-sm font-bold text-primary hover:underline"
            >
              {ctaText}
            </a>
          </div>
        )}

        <div className="mt-4 flex justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            aria-label="Previous articles"
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            aria-label="Next articles"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
