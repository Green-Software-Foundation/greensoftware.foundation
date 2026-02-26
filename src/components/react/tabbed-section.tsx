import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
};

export const TabbedSection = (props: Props) => {
  const { badge, heading, tabs, imageSrc, imageAlt = "", ctaText, ctaHref = "#" } = props;
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
      <TabsList className="grid grid-cols-1 items-center">
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

      <div className="flex items-center justify-center overflow-hidden">
        {hasPerTabImages ? (
          tabs.map((tab) => (
            <TabsContent
              key={tab.value}
              value={tab.value}
              className="flex items-center justify-end data-[state=active]:animate-tabs"
            >
              {tab.image && (
                <img src={tab.image.src} alt={tab.image.alt ?? ""} className="size-full object-cover" />
              )}
            </TabsContent>
          ))
        ) : (
          imageSrc && (
            <img src={imageSrc} alt={imageAlt} className="size-full object-cover" />
          )
        )}
      </div>
    </Tabs>
  );
};
