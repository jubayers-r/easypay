import { MobileMenu } from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export const navItems = ["Features", "Pricing", "Security", "Benefits"];

const Navbar = () => {
  return (
    <div className="py-5 ">
      <DesktopMenu />
      <MobileMenu />
    </div>
  );
};

export default Navbar;
