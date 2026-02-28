import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export interface ArticleOrg {
  /** Organisation name (shown as fallback if no logo) */
  name: string;
  /** Organisation logo (if present, replaces text) */
  logoSrc?: string;
}

export interface Article {
  /** Article title */
  title: string;
  /** Short summary */
  description: string;
  /** One or more organisations */
  organizations?: ArticleOrg[];
  /** Number of additional member orgs not listed by name */
  additionalOrgCount?: number;
  /** Article thumbnail/hero image */
  imageSrc?: string;
  /** Link to the full article */
  href?: string;
  /** CTA text (defaults to "Read the story") */
  cta?: string;
}

interface Props {
  heading?: string;
  body?: string;
  articles: Article[];
}

export function ArticleCarousel({ heading, body, articles }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

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
        </div>
      )}

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {articles.map((article, index) => (
              <div
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]"
                key={index}
              >
                <div className="h-full rounded-xl border bg-white shadow-sm flex flex-col overflow-hidden">
                  {article.imageSrc && (
                    <div className="aspect-[16/9] overflow-hidden bg-gray-light">
                      <img
                        src={article.imageSrc}
                        alt={article.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex flex-col justify-between flex-grow p-6">
                    <div>
                      {article.organizations && article.organizations.length > 0 && (
                        <div className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                          {article.organizations.map((org, i) => (
                            <React.Fragment key={i}>
                              {org.logoSrc ? (
                                <img
                                  src={org.logoSrc}
                                  alt={org.name}
                                  className="h-4 max-w-[60px] w-auto object-contain"
                                />
                              ) : (
                                <span className="text-xs font-semibold text-primary">
                                  {org.name}
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                          {article.additionalOrgCount && article.additionalOrgCount > 0 && (
                            <span className="text-xs text-gray-darker">
                              +{article.additionalOrgCount} more members
                            </span>
                          )}
                        </div>
                      )}
                      <h3 className="mb-2 text-xl font-bold leading-tight">
                        {article.title}
                      </h3>
                      <p className="text-sm text-gray-darker mb-4">
                        {article.description}
                      </p>
                    </div>
                    <a
                      href={article.href || "#"}
                      className="inline-flex items-center text-sm font-bold text-primary hover:underline"
                    >
                      {article.cta || "Read the story →"}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4">
          <Button variant="outline" size="icon" onClick={scrollPrev}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={scrollNext}>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
