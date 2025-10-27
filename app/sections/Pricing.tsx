import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { universalHeadline, universalSecHeadline } from "./Features";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { universalSideMargin } from "../page";

const Pricing = () => {
  type ButtonVariant =
    | "default"
    | "outline"
    | "link"
    | "destructive"
    | "secondary"
    | "ghost";
  const cardItems: {
    title: string;
    description: string;
    price: string;
    features: { list: string[]; checkColor: string };
    bgColor: string;
    btnType: ButtonVariant;
  }[] = [
    {
      title: "Free Plan",
      description: "Free for personal payments",
      price: "0",
      features: {
        list: [
          "Up to 100 transactions per month",
          "Basic fraud protection",
          "Chat support",
          "Email support",
        ],
        checkColor: "text-blue-700 bg-blue-100",
      },
      bgColor: "",
      btnType: "outline",
    },
    {
      title: "Advanced",
      description: "Minimal fees for advanced transactions",
      price: "19",
      features: {
        list: [
          "Up to 1000 transactions per month",
          "Advanced proud protection",
          "Detailed transaction reports",
          "Priority email & chat support",
        ],
        checkColor: "text-white bg-gray-900",
      },
      bgColor: "bg-black text-white",
      btnType: "default",
    },
    {
      title: "Business",
      description: "Premium business transactions",
      price: "29",
      features: {
        list: [
          "Unlimited transections per month",
          "Premium proud protection",
          "Detailed transaction reports",
          "Priority email & chat support",
        ],
        checkColor: "text-blue-700 bg-blue-100",
      },
      bgColor: "",
      btnType: "outline",
    },
  ];

  return (
    <div className={`${universalSideMargin} my-30 text-center`}>
      <h3 className={`${universalHeadline}`}>Pricing</h3>
      <h1 className={`${universalSecHeadline}`}>
        Simple transparent pricing <br /> no hidden fees{" "}
      </h1>
      <div className="grid lg:grid-cols-3 place-items-center my-10 gap-5 bg-[url('/gaussian.png')] bg-no-repeat bg-center">
        {cardItems.map((item, idx) => (
          <Card key={idx} className={`text-left  md:max-w-lg ${item.bgColor}`}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </CardHeader>
            <CardContent className="divide-y">
              <h1 className="text-6xl py-5 font-bold">
                ${item.price}
                <span className="text-lg font-normal">/month</span>
              </h1>
              <div className="my-5">
                {item.features.list.map((feature, idx) => (
                  <div key={idx} className="flex gap-2 my-2">
                    <Check
                      className={`${item.features.checkColor} rounded-full p-1`}
                    />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant={`${item.btnType}`} className="w-full ">
                Get Advance Plan
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
