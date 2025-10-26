import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
// import LogoMarquee from "./LogoMarquee";

const cardItems = [
  {
    title: "Instant Payments",
    description: "Send money to friends or family in real-time, for free.",
    imgSrc: "/features/instant.png",
    color: "bg-[#F3F7FF]",
    hover: "hover:bg-[#E6EEFF]",
  },
  {
    title: "No hidden fees",
    description: "Clear and simple pricing. Always be aware of your costs.",
    imgSrc: "/features/hidden_fees.png",
    color: "bg-[#FBF6EF]",
    hover: "hover:bg-[#F2E8DC]",
  },
  {
    title: "Digital wallet",
    description: "Store money securely and make fast transfers or purchases.",
    imgSrc: "/features/digital_wallet.png",
    color: "bg-[#EEF9FE]",
    hover: "hover:bg-[#DCEFFD]",
  },
  {
    title: "Secure transactions",
    description: "End-to-end encryption for all transactions.",
    imgSrc: "/features/secure.png",
    color: "bg-[#F4EDFC]",
    hover: "hover:bg-[#E9DDFC]",
  },
];

const Features = () => {
  return (
    <div className="my-30 place-items-center">
      <h3 className="text-secondary-foreground font-bold text-xl uppercase">
        Features
      </h3>
      <h1 className="text-2xl lg:text-5xl/tight  font-bold text-center ">
        Why choose Easy Pay for <br /> effortless payments?
      </h1>
      {/* cards */}
      <div className="grid md:grid-cols-2 xl:grid-cols-4 w-full gap-7 my-7 lg:my-15 place-items-center">
        {cardItems.map((item, idx) => (
          <Card
            key={idx}
            className={` max-w-70  min-h-60 text-center ${item.color} ${item.hover} cursor-default`}
          >
            <CardHeader className="place-items-center">
              <Image
                src={item.imgSrc}
                alt="instant-payments"
                height={60}
                width={60}
              />
            </CardHeader>
            <CardContent className="space-y-2">
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* <LogoMarquee/> */}
    </div>
  );
};

export default Features;
