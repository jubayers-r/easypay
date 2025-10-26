import { navItems } from "./Navbar";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex justify-between items-center">
      <Logo />
      <ol className="flex gap-5 text-secondary-foreground lg:font-medium  text-xl z-10 justify-between items-center  ">
        {navItems.map((items, idx) => (
          <li key={idx} className="hover:text-primary cursor-pointer">
            {items}
          </li>
        ))}
      </ol>
      <Button variant={"default"} className="hidden lg:flex">
        Contact Us
      </Button>
      <Button
        variant={"default"}
        size={"tab"}
        className="hidden md:flex lg:hidden"
      >
        Contact Us
      </Button>
    </div>
  );
};

export default DesktopMenu;
