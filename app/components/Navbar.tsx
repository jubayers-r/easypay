import { MobileMenu } from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export const navItems = ["Features", "Pricing", "Security", "Benefits"];

const Navbar = () => {
  return (
    <div className="pt-5 z-10 ">
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
};

export default Navbar;
