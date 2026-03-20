import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Img } from "@/components/react/image";

export type Tab = {
  value: string;
  heading: string;
  description: string;
  /** Optional per-tab image (overrides the shared imageSrc when this tab is active) */
  image?: {
    src: string;
    alt?: string;
  };
};

export type Org = {
  name: string;
  logo: string;
};

type Props = {
  /** Small label above the heading (e.g. "EDUCATION") */
  badge?: string;
  /** Main heading text */
  heading?: string;
  /** Array of tab items */
  tabs: Tab[];
  /** Shared image shown on the right side (used when tabs don't have their own image) */
  imageSrc?: string;
  /** Shared image alt text */
  imageAlt?: string;
  /** CTA link text */
  ctaText?: string;
  /** CTA link href */
  ctaHref?: string;
  /** Contributing organisations shown as a scrolling logo strip */
  orgs?: Org[];
  /** Flip layout so image appears on the left and tabs on the right */
  reversed?: boolean;
};

export const TabbedSection = (props: Props) => {
  const {
    badge,
    heading,
    tabs,
    imageSrc,
    imageAlt = "",
    ctaText,
    ctaHref = "#",
    orgs = [],
    reversed = false,
  } = props;
  const defaultTab = tabs[0]?.value ?? "";
  const [activeTab, setActiveTab] = useState(defaultTab);

  const hasPerTabImages = tabs.some((tab) => tab.image);

  return (
    <Tabs
      defaultValue={defaultTab}
      value={activeTab}
      onValueChange={setActiveTab}
      className="grid grid-cols-1 items-center gap-y-12 rounded-2xl bg-primary-dark p-8 md:gap-x-12 md:px-16 md:py-12 lg:grid-cols-2 lg:gap-x-20 lg:px-20 lg:py-16"
    >
      <TabsList
        className={cn("grid grid-cols-1 items-start", reversed && "lg:order-2")}
      >
        {badge && (
          <span className="mb-3 inline-block text-xs font-bold tracking-widest text-accent uppercase">
            {badge}
          </span>
        )}
        {heading && (
          <h2 className="mb-5 text-2xl font-semibold text-primary-lightest-1 md:mb-6 md:text-3xl lg:text-4xl">
            {heading}
          </h2>
        )}

        {tabs.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="relative flex flex-col items-start justify-start text-left whitespace-normal"
          >
            <div
              className={cn(
                "absolute left-0 h-6 w-1 rounded-sm bg-accent transition-opacity duration-200",
                activeTab === tab.value ? "opacity-100" : "opacity-0",
              )}
            />
            <div className="flex w-full flex-col items-start justify-start text-left">
              <h3
                className={cn(
                  "text-xl font-bold",
                  activeTab === tab.value
                    ? "text-primary-lightest-1"
                    : "text-primary-lightest-1/50",
                )}
              >
                {tab.heading}
              </h3>
              <motion.div
                initial={false}
                animate={{
                  height: activeTab === tab.value ? "auto" : 0,
                  opacity: activeTab === tab.value ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="mt-2 text-primary-lighter">{tab.description}</p>
              </motion.div>
            </div>
          </TabsTrigger>
        ))}

        {ctaText && (
          <a
            href={ctaHref}
            className="mt-4 inline-flex items-center text-sm font-bold text-accent hover:text-accent/80 transition-colors"
          >
            {ctaText}
          </a>
        )}
      </TabsList>

      <div
        className={cn(
          "flex flex-col items-center justify-center gap-8",
          reversed && "lg:order-1",
        )}
      >
        <div className="flex w-full items-center justify-center overflow-hidden">
          {hasPerTabImages
            ? tabs.map((tab) => (
                <TabsContent
                  key={tab.value}
                  value={tab.value}
                  className="flex w-full items-center justify-end data-[state=active]:animate-tabs"
                >
                  {tab.image && (
                    <Img
                      src={tab.image.src}
                      alt={tab.image.alt ?? ""}
                      className="size-full object-cover"
                      sizes="(min-width: 1024px) 50vw, 100vw"
                    />
                  )}
                </TabsContent>
              ))
            : imageSrc && (
                <Img
                  src={imageSrc}
                  alt={imageAlt}
                  className="size-full object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
              )}
        </div>

        {orgs.length > 0 && (
          <div
            className="w-full overflow-hidden"
            style={
              {
                "--marquee-duration": `${Math.max(orgs.length * 3, 15)}s`,
              } as React.CSSProperties
            }
          >
            <p className="mb-2 text-center text-xs text-primary-lighter/60">
              Built with
            </p>
            <div className="relative flex items-center overflow-hidden">
              <div className="absolute top-0 bottom-0 left-0 z-10 w-8 bg-gradient-to-r from-primary-dark to-transparent" />
              <div className="absolute top-0 right-0 bottom-0 z-10 w-8 bg-gradient-to-l from-primary-dark to-transparent" />
              {[0, 1].map((copy) => (
                <div
                  key={copy}
                  className="flex shrink-0 animate-marquee items-center gap-8 pr-20"
                >
                  {orgs.map((org) => (
                    <img
                      key={org.name}
                      src={org.logo}
                      alt={org.name}
                      title={org.name}
                      className="h-6 w-auto max-w-[80px] shrink-0 object-contain brightness-0 invert opacity-60"
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </Tabs>
  );
};
