import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  Menu,
  ExternalLink,
  ChevronDown,
  Search,
  Target,
  FileText,
  TreePine,
  Bot,
  Award,
  Scale,
  Radar,
  GraduationCap,
  BookOpen,
  FlaskConical,
  BarChart3,
  Cloud,
  Workflow,
  Calculator,
  Newspaper,
  Users,
  Mic,
  Badge,
  Calendar,
  Building2,
  Shield,
  History,
  Handshake,
  Palette,
  Trophy,
  Droplets,
  Zap,
  MessagesSquare,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";

// --- Icon registry ---

const iconMap: Record<string, LucideIcon> = {
  target: Target,
  "file-text": FileText,
  "tree-pine": TreePine,
  bot: Bot,
  award: Award,
  scale: Scale,
  radar: Radar,
  "graduation-cap": GraduationCap,
  "book-open": BookOpen,
  "flask-conical": FlaskConical,
  "bar-chart": BarChart3,
  cloud: Cloud,
  workflow: Workflow,
  calculator: Calculator,
  newspaper: Newspaper,
  users: Users,
  mic: Mic,
  badge: Badge,
  calendar: Calendar,
  "building-2": Building2,
  shield: Shield,
  history: History,
  handshake: Handshake,
  palette: Palette,
  trophy: Trophy,
  droplets: Droplets,
  zap: Zap,
  "messages-square": MessagesSquare,
};
import * as Accordion from "@radix-ui/react-accordion";

// --- Types ---

export interface NavLink {
  href: string;
  label: string;
  external?: boolean;
  description?: string;
  icon?: string; // Lucide icon name from iconMap (e.g. "target", "file-text")
  iconSrc?: string; // URL to an SVG/image icon (takes priority over icon)
}

export interface NavFeatured {
  title: string;
  description: string;
  href: string;
  imageSrc?: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

export interface NavItemDropdown {
  label: string;
  sections: NavSection[];
  featured?: NavFeatured;
  columns?: number; // columns per row in the grid (default: number of sections)
  footerLink?: { href: string; label: string }; // panel-level CTA at the bottom
}

export interface NavItemLink {
  label: string;
  href: string;
}

export type NavItem = NavItemDropdown | NavItemLink;

function isDropdown(item: NavItem): item is NavItemDropdown {
  return "sections" in item;
}

// --- Sub-components ---

function NavIcon({ link }: { link: NavLink }) {
  if (link.iconSrc) {
    return <img src={link.iconSrc} alt="" className="mt-0.5 size-4 shrink-0" />;
  }
  const Icon = link.icon ? iconMap[link.icon] : null;
  if (Icon) {
    return <Icon className="mt-0.5 size-4 shrink-0 text-primary" />;
  }
  return null;
}

function MegaMenuLink({ link }: { link: NavLink }) {
  const hasIcon = link.iconSrc || link.icon;
  return (
    <a
      href={link.href}
      target={link.external ? "_blank" : undefined}
      rel={link.external ? "noopener noreferrer" : undefined}
      className="group/link flex gap-2.5 rounded px-2 py-1.5 transition-colors hover:bg-accent-lightest-2"
    >
      {hasIcon && <NavIcon link={link} />}
      <div className="flex flex-col gap-0.5">
        <span className="flex items-center gap-1 text-sm font-medium text-primary-dark group-hover/link:text-primary">
          {link.label}
          {link.external && <ExternalLink className="size-3 text-gray-darker" />}
        </span>
        {link.description && (
          <span className="text-xs leading-snug text-gray-darker">
            {link.description}
          </span>
        )}
      </div>
    </a>
  );
}

function FeaturedCard({ featured }: { featured: NavFeatured }) {
  return (
    <a
      href={featured.href}
      className="flex flex-col gap-3 rounded-lg bg-accent-lightest-2 p-4 transition-colors hover:bg-accent-lighter"
    >
      {featured.imageSrc && (
        <img
          src={featured.imageSrc}
          alt=""
          className="h-24 w-full rounded object-cover"
        />
      )}
      <div>
        <p className="text-sm font-bold text-primary-darker">
          {featured.title}
        </p>
        <p className="mt-1 text-xs text-gray-darker">{featured.description}</p>
      </div>
    </a>
  );
}

function MegaMenuPanel({ item }: { item: NavItemDropdown }) {
  const cols = item.columns || item.sections.length;
  return (
    <div className="flex flex-col">
      <div className="flex gap-8 p-6">
        <div
          className="grid flex-1 gap-x-10 gap-y-8"
          style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
        >
          {item.sections.map((section) => (
            <div key={section.title}>
              <h3 className="mb-2 px-2 text-xs font-bold uppercase tracking-wider text-gray-darker">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-0.5">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <MegaMenuLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        {item.featured && (
          <div className="flex w-48 shrink-0 flex-col justify-center">
            <FeaturedCard featured={item.featured} />
          </div>
        )}
      </div>
      {item.footerLink && (
        <div className="border-t border-gray/30 px-6 py-3">
          <a
            href={item.footerLink.href}
            className="inline-flex items-center gap-1.5 rounded-md bg-accent-lightest-2 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-accent-lighter"
          >
            {item.footerLink.label}
          </a>
        </div>
      )}
    </div>
  );
}

// --- Mobile accordion ---

function MobileNavSection({ section }: { section: NavSection }) {
  return (
    <div className="mb-2">
      <h4 className="px-2 py-1 text-xs font-bold uppercase tracking-wider text-gray-darker">
        {section.title}
      </h4>
      <ul>
        {section.links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="flex items-center gap-1.5 rounded px-2 py-2 text-base text-primary-dark transition-colors hover:bg-accent-lightest-2"
            >
              {link.label}
              {link.external && (
                <ExternalLink className="size-3 text-gray-darker" />
              )}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MobileNav({
  items,
  onNavigate,
}: {
  items: NavItem[];
  onNavigate: () => void;
}) {
  const handleLinkClick = (e: React.MouseEvent) => {
    // Only close sheet when an actual navigation link is clicked
    const target = e.target as HTMLElement;
    const link = target.closest("a");
    if (link) {
      onNavigate();
    }
  };

  return (
    <nav className="mt-16 flex flex-col gap-1 p-2" onClick={handleLinkClick}>
      <Accordion.Root type="multiple" className="flex flex-col gap-1">
        {items.map((item) => {
          if (!isDropdown(item)) {
            return (
              <a
                key={item.href}
                href={item.href}
                className="px-2 py-3 text-xl font-semibold text-primary-darker"
              >
                {item.label}
              </a>
            );
          }

          return (
            <Accordion.Item
              key={item.label}
              value={item.label}
              className="border-b border-gray/50"
            >
              <Accordion.Trigger className="group flex w-full items-center justify-between px-2 py-3 text-xl font-semibold text-primary-darker">
                {item.label}
                <ChevronDown className="size-5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="pb-3 pl-2">
                  {item.sections.map((section) => (
                    <MobileNavSection key={section.title} section={section} />
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </nav>
  );
}

// --- Main component ---

interface NavigationComponentProps {
  items?: NavItem[];
  showSearch?: boolean;
}

const NavigationComponent = ({
  items = [],
  showSearch = false,
}: NavigationComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center gap-1">
      {/* Desktop navigation */}
      <div className="hidden lg:block">
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            {items.map((item) => {
              if (!isDropdown(item)) {
                return (
                  <NavigationMenuItem key={item.label}>
                    <NavigationMenuLink
                      href={item.href}
                      className={navigationMenuTriggerStyle()}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              }

              return (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                  <NavigationMenuContent className="right-0 left-auto min-w-[700px] bg-white">
                    <MegaMenuPanel item={item} />
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Search placeholder */}
      {showSearch && (
        <button
          type="button"
          className="hidden rounded-md p-2 text-gray-darker transition-colors hover:bg-accent-lightest-2 hover:text-primary lg:block"
          aria-label="Search"
        >
          <Search className="size-5" />
        </button>
      )}

      {/* Mobile hamburger menu */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="p-2 text-gray-darker">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <MobileNav items={items} onNavigate={() => setIsOpen(false)} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavigationComponent;
