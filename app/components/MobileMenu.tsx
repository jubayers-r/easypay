import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { contactUsBtn, navItems } from "./Navbar";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  return (
    <div className="md:hidden flex justify-between">
      <Logo />
      <Sheet>
        <SheetTrigger asChild>
          <button className="p-2">
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>
        <SheetContent side="right" className="p-6">
          <nav>
            <ol className="flex flex-col gap-4 text-lg font-medium text-secondary-foreground">
              {navItems.map((item) => (
                <li key={item} className="hover:text-primary cursor-pointer">
                  {item}
                </li>
              ))}
              <li className="hover:text-primary cursor-pointer">Contact Us</li>
            </ol>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
