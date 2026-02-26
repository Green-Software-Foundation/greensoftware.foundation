import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

type Props = {
  heading?: string;
  tabs: {
    value: string;
    heading: string;
    description: string;
    image: {
      src: string;
      alt?: string;
    };
  }[];
};

export const ArchitectureTabs = (props: Props) => {
  const { heading, tabs } = props;
  const [activeTab, setActiveTab] = useState("practitioners");

  return (
    <Tabs
      defaultValue="practitioners"
      value={activeTab}
      onValueChange={setActiveTab}
      className="grid grid-cols-1 items-center gap-y-12 rounded-2xl bg-primary-dark p-8 md:gap-x-12 md:px-16 md:py-12 lg:grid-cols-2 lg:gap-x-20 lg:px-20 lg:py-16"
    >
      <TabsList className="grid grid-cols-1 items-center">
        <h1 className="mb-5 text-2xl font-semibold text-primary-lightest-1 md:mb-6 md:text-3xl lg:text-4xl">
          {heading}
        </h1>

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
                  "text-xl font-bold text-primary-lightest-1",
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
      </TabsList>
      <div className="flex items-center justify-center overflow-hidden">
        {tabs.map((tab, index) => {
          return (
            <TabsContent
              key={index}
              value={tab.value}
              className="flex items-center justify-end data-[state=active]:animate-tabs"
            >
              {tab.image && <img src={tab.image.src} className="size-full object-cover" />}
            </TabsContent>
          );
        })}
      </div>
    </Tabs>
  );
};
