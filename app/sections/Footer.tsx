import { FC } from "react";
import { universalSectionPadding, universalSideMargin } from "../page";
import FooterCard from "../components/FooterCard";
import Logo from "../components/Logo";

const shortLinks = ["Features", "How it works", "Security", "Testimonial"];
const othterLinks = ["Privacy", "Terms & Condition", "404"];

interface LinkSectionProps {
  title: string;
  links: string[];
}

const LinkSection: FC<LinkSectionProps> = ({ title, links }) => (
  <div className="space-y-2">
    <h3 className="font-bold text-xl md:text-2xl">{title}</h3>
    <ul className="text-lg text-muted-foreground font-medium space-y-2">
      {links.map((link, idx) => (
        <li key={idx} className="hover:text-primary cursor-pointer">
          {link}
        </li>
      ))}
    </ul>
  </div>
);
const Footer = () => {
  return (
    <div className={`${universalSideMargin} ${universalSectionPadding}`}>
      <FooterCard />

      <div className="md:bg-[url('/gaussian.png')] bg-no-repeat bg-top pb-5">
        <div className=" md:flex justify-between space-y-5">
          {/* left part */}
          <div className="md:w-[30%]">
            <Logo />
            <h3 className="text-lg text-muted-foreground font-medium">
              Easy Pay offers secure, seamless, and fee-free payments for
              effortless global transactions.
            </h3>
          </div>
          {/* right part */}
          <div className="flex gap-20">
            <LinkSection title="Short Links" links={shortLinks} />
            <LinkSection title="Other Pages" links={othterLinks} />
          </div>
        </div>
        <hr className="z-10 border-gray-300 mt-5 " />
        <h3 className="text-center text-gray-400 ">
          2025 ©Easy Pay. All rights reserved.
        </h3>
      </div>
    </div>
  );
};

export default Footer;
