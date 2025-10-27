import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { universalSectionPadding, universalSideMargin } from "../page";
import Image from "next/image";

const HowItWorks = () => {
  const cardItems = [
    {
      title: "Instant Payments",
      description: "Send money to friends or family in real-time, for free.",
      imgSrc: "/howitworks/download.png",
    },
    {
      title: "Instant Payments",
      description: "Send money to friends or family in real-time, for free.",
      imgSrc: "/howitworks/card.png",
    },
    {
      title: "Instant Payments",
      description: "Send money to friends or family in real-time, for free.",
      imgSrc: "/howitworks/pay.png",
    },
  ];

  return (
    <div
      className={`bg-secondary ${universalSideMargin} ${universalSectionPadding} py-20 text-center  md:text-left`}
    >
      <div>
        <h3 className="uppercase text-secondary-foreground font-bold my-3 ">
          How it works
        </h3>
        <div className="flex flex-col md:flex-row gap-5 md:justify-between md:place-items-end   place-items-center">
          <h1 className="text-2xl lg:text-5xl/tight font-bold">
            Make payments, transfers, and <br /> more in 3 simple steps
          </h1>
          <Button size={"lg"} className="hidden lg:flex">
            Get Started Now
          </Button>
          <Button className="lg:hidden">Get Started Now</Button>
        </div>
      </div>
      {/* card */}
      <Card className="w-full flex flex-col md:flex-row justify-between md:divide-x-2 divide-y-2 md:divide-y-0 divide-secondary bg-white my-10">
        {cardItems.map((item, idx) => (
          <div key={idx} className="max-w-sm py-7">
            <CardHeader className="relative flex justify-center md:justify-start ">
              <h1 className="text-8xl font-bold text-[#F3F3F3]">
                {(idx + 1).toString().padStart(2, "0")}
              </h1>
              <Image
                src={item.imgSrc}
                alt="logo"
                height={50}
                width={50}
                className="absolute bottom-0 transform md:translate-x-1/2"
              />
            </CardHeader>
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </div>
        ))}
      </Card>

      <Image
        src={"/howitworks/man-using-laptop.png"}
        alt="man using laptop in coffeshop"
        width={1170}
        height={660}
        className="w-full rounded-xl hidden md:block"
      />
    </div>
  );
};

export default HowItWorks;
