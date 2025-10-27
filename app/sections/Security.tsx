import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { universalSideMargin } from "../page";
import Image from "next/image";

const Security = () => {
  const cardItems = [
    {
      title: "Two-factor authentication",
      description:
        "Two-factor authentication ensures added protection by using verification steps.",
      colorIn: "bg-[#2E68FD]",
      colorOut: "bg-[#2E68FD]/20",
    },
    {
      title: "Fraud detection and alerts",
      description:
        "Fraud detection safeguards your money, sending instant alerts for any activity.",
      colorIn: "bg-red-500",
      colorOut: "bg-red-100",
    },
    {
      title: "Transaction notifications",
      description:
        "Instant notifications for transaction keep you informed to manage your finances.",
      colorIn: "bg-[#08A965]",
      colorOut: "bg-[#08A965]/20",
    },
    {
      title: "Biometric access",
      description:
        "Easily and securely log in with biometric features, and facial recognition.",
      colorIn: "bg-[#3B7793]",
      colorOut: "bg-[#3B7793]/20",
    },
    {
      title: "End-to-end encryption",
      description:
        "By encryption, protecting your data from unauthorized access.",
      colorIn: "bg-[#D77E1B]",
      colorOut: "bg-[#D77E1B]/20",
    },
    {
      title: "24/7 Protection support",
      description:
        "Our dedicated team is available around the clock to help you.",
      colorIn: "bg-[#932EFA]",
      colorOut: "bg-[#932EFA]/20",
    },
  ];

  return (
    <div className={`${universalSideMargin} my-30 text-center md:text-left`}>
      <h3 className="text-secondary-foreground text-xl font-semibold">
        Security
      </h3>
      <div className=" md:flex justify-between ">
        <h1 className="text-xl md:text-3xl/tight lg:text-5xl/tight font-bold md:w-[60%] lg:w-[70%]">
          {" "}
          We protect your money at <br /> every step with Easy Pay
        </h1>
        <p className="text-muted-foreground font-medium  lg:text-xl md:text-lg/tight md:w-[40%] lg:w-[30%]">
          Easy Pay ensures your money is protected at every step with advanced
          encryption, real-time monitoring, and multi-factor authentication.
        </p>
      </div>

      <Card
        className={`bg-[url('/hero-bg.png')] bg-center md:bg-top-left bg-no-repeat bg-cover my-10 grid md:grid-cols-2 lg:grid-cols-3 p-5 shadow-xl`}
      >
        {cardItems.map((item, idx) => (
          <div key={idx} className="max-w-sm py-7">
            <CardHeader className="place-items-center md:place-items-start">
              <div
                className={`w-8 h-8 rounded-full place-items-center flex justify-center ${item.colorOut}`}
              >
                <div className={`w-3 h-3 rounded-full ${item.colorIn}`} />
              </div>
            </CardHeader>
            <CardContent>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardContent>
          </div>
        ))}
      </Card>
    </div>
  );
};

export default Security;
