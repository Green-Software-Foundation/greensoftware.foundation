import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const stories = [
  {
    title: "Implementing SCI to Track Software Emissions",
    organization: "Accenture",
    description: "Accenture applied SCI to calculate and track carbon emissions for an internal reference application, establishing a practical baseline methodology that includes embodied emissions.",
    link: "https://greensoftware.foundation/articles/how-accenture-implemented-the-sci-specification-score-to-track-software-emissions",
    cta: "Read Case Study",
    thumbnail: "/assets/logos/accenture.svg" // Placeholder, will need to handle images
  },
  {
    title: "Baselining Software Carbon Emissions",
    organization: "UBS",
    description: "UBS demonstrates applying SCI to baseline carbon emissions for two enterprise applications in investment banking and asset management, identifying available data sources and calculation methodologies.",
    link: "https://greensoftware.foundation/articles/baselining-software-carbon-emissions-ubs-use-case",
    cta: "Read Case Study",
    thumbnail: "/assets/logos/ubs.svg"
  },
  {
    title: "Decarbonizing Software with SCI",
    organization: "CAST Software",
    description: "CAST integrated SCI with CAST Highlight to decarbonize an enterprise application, achieving an estimated 400 kg annual CO2 reduction and 5% improvement in execution duration.",
    link: "https://greensoftware.foundation/articles/decarbonizing-software-how-cast-applied-the-sci-metric",
    cta: "Read Case Study",
    thumbnail: "/assets/logos/cast.svg"
  },
  {
    title: "Calculating Carbon Footprint for Serverless Apps",
    organization: "NTT Data",
    description: "A practical guide to measuring carbon emissions of serverless applications using the SCI specification, with step-by-step methodology for event-driven architectures.",
    link: "https://greensoftware.foundation/articles/calculating-your-carbon-footprint-a-guide-to-measuring-serverless-app-emissions-o",
    cta: "Read Guide",
    thumbnail: "/assets/logos/nttdata.svg"
  },
  {
    title: "Carbon-Aware Computing at UBS",
    organization: "UBS & Microsoft",
    description: "UBS and Microsoft implemented the first enterprise-scale carbon-aware computing system, using SCI and the Carbon Aware SDK to reduce emissions in their core risk platform workloads.",
    link: "https://news.microsoft.com/de-ch/carbon-aware-computing-whitepaper/",
    cta: "Read Whitepaper",
    thumbnail: "/assets/logos/ubs-microsoft.svg"
  },
  {
    title: "Embedding SCI in Azure Architecture",
    organization: "Microsoft",
    description: "Microsoft integrated SCI into the Azure Well-Architected Framework, providing sustainability guidance and measurement tools for Azure customers to design carbon-efficient workloads.",
    link: "https://learn.microsoft.com/en-us/azure/well-architected/sustainability/sustainability-design-methodology",
    cta: "View Framework",
    thumbnail: "/assets/logos/microsoft.svg"
  }
];

export default function SuccessStoriesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {stories.map((story, index) => (
            <div className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]" key={index}>
              <div className="h-full rounded-xl border bg-white text-card-foreground shadow-sm p-6 flex flex-col justify-between">
                <div>
                  <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">{story.organization}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold leading-tight">{story.title}</h3>
                  <p className="text-muted-foreground mb-6">{story.description}</p>
                </div>
                <Button variant="primary" className="w-full" asChild>
                  <a href={story.link} target="_blank" rel="noopener noreferrer">
                    {story.cta}
                  </a>
                </Button>
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
  );
}
