import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";

export interface NavItem {
  href: string;
  label: string;
}

interface NavigationComponentProps {
  items?: NavItem[];
}

const defaultItems: NavItem[] = [
  { href: "#overview", label: "Overview" },
  { href: "#why-sci", label: "Why SCI Matters" },
  { href: "#success-stories", label: "Success Stories" },
  { href: "#research", label: "Research" },
  { href: "#about-gsf", label: "About GSF" },
  { href: "https://directory.greensoftware.foundation", label: "Directory" },
];

const NavigationComponent = ({ items = defaultItems }: NavigationComponentProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center">
      {/* Desktop navigation */}
      <div className="hidden lg:block">
        <NavigationMenu className="flex justify-center">
          <NavigationMenuList className="flex flex-wrap">
            {items.map((item) => {
              const isExternal = item.href.startsWith("http");
              return (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    href={item.href}
                    className={navigationMenuTriggerStyle()}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile hamburger menu */}
      <div className="lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" className="p-2 text-gray-darker">
              <Menu className="size-2" />
            </Button>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <nav className="mt-16 flex flex-col gap-2 p-2">
              {items.map((item) => {
                const isExternal = item.href.startsWith("http");
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    className="px-2 py-2 text-2xl font-semibold text-primary-darker"
                    onClick={() => setIsOpen(false)}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavigationComponent;
