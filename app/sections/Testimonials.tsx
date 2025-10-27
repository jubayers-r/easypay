"use client";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { universalSectionPadding, universalSideMargin } from "../page";
import { universalHeadline, universalSecHeadline } from "./Features";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useEffect, useRef, useState } from "react";
// import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const TestimonialSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const updateScrollState = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setAtStart(scrollLeft <= 0);
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 1);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -412,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 412,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState);
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, []);

  const cardItems = [
    {
      img: "/avatars/Avatar Image (1).png",
      rating: 5,
      description:
        "Experience a payment app built on simplicity and transparency. No hidden fees, just a seamless user experience that makes every transaction easy and stress-free. Say goodbye to confusion and hello to straightforward payments.",
      name: "Ethan Williams",
      proffession: "Digital Marketing Specialist",
    },
    {
      img: "/avatars/Avatar Image (2).png",
      rating: 5,
      description:
        "Discover a payment app focused on simplicity and transparency. Enjoy a seamless experience with no hidden fees, providing clarity and ease in every transaction. It’s designed to put you in control of your payments.",
      name: "Daniel Thompson",
      proffession: "Product Designer",
    },
    {
      img: "/avatars/Avatar Image.png",
      rating: 4,
      description:
        "This payment app is a game-changer! Its clear interface and no-fee policy make managing transactions effortless. I love how it prioritizes user control and eliminates unnecessary complications.",
      name: "Sophia Martinez",
      proffession: "Freelance Writer",
    },
    {
      img: "/avatars/Avatar Image (2).png",
      rating: 5,
      description:
        "A truly user-friendly payment app that delivers on its promise of transparency. No surprises, just smooth and reliable transactions every time. Highly recommend for anyone seeking simplicity.",
      name: "Liam Chen",
      proffession: "Software Engineer",
    },
    {
      img: "/avatars/Rectangle 13 1.png",
      rating: 4,
      description:
        "This app makes payments straightforward and hassle-free. The transparent fee structure and intuitive design ensure I can focus on my transactions without any distractions.",
      name: "Ava Patel",
      proffession: "Small Business Owner",
    },
    {
      img: "/avatars/Avatar Image (1).png",
      rating: 5,
      description:
        "An exceptional payment app that combines ease of use with complete transparency. Every transaction feels secure and straightforward, making financial management a breeze.",
      name: "Noah Kim",
      proffession: "Financial Analyst",
    },
    {
      img: "/avatars/Avatar Image (2).png",
      rating: 4,
      description:
        "I appreciate how this app simplifies payments with no hidden costs. The clean design and seamless functionality make it a reliable choice for everyday transactions.",
      name: "Emma Johnson",
      proffession: "Graphic Designer",
    },
  ];

  return (
    <div
      className={`bg-secondary text-center lg:text-left flex flex-col lg:flex-row py-20`}
    >
      {/* left */}
      <div
        className={` ${universalSideMargin} ${universalSectionPadding} lg:w-1/2 w-full`}
      >
        <h3 className={`${universalHeadline}`}>Testimonial</h3>
        <h1 className={`${universalSecHeadline} lg:text-left`}>
          We’ve built trust with reviews from real users
        </h1>
        <p className="text-muted-foreground font-medium lg:text-xl md:text-lg/tight">
          Boost your credibility by featuring genuine testimonials from real
          users, showcasing their positive experiences and satisfaction with
          Monks Pay services.
        </p>
        <div className="flex gap-5 my-5 justify-center lg:justify-start">
          <ChevronLeft
            size={30}
            className={`border rounded-full p-5 w-16 h-16 cursor-pointer transition-colors ${
              atEnd ? "bg-black text-white" : "bg-transparent text-black"
            }`}
            onClick={scrollLeft}
          />
          <ChevronRight
            className={`border rounded-full p-5 w-16 h-16 cursor-pointer transition-colors ${
              atStart ? "bg-black text-white" : "bg-transparent text-black"
            }`}
            size={30}
            onClick={scrollRight}
          />
        </div>
      </div>
      {/* right */}
      <div className="lg:w-1/2 w-full">
        {/* <Image
          src="/gaussian.png"
          alt="blend-color"
          height={700}
          width={700}
          className="absolute right-30 bottom-0 "
        /> */}
        <div
          ref={scrollContainerRef}
          className=" flex gap-7 z-10 overflow-x-hidden text-left"
          style={{ scrollBehavior: "smooth" }}
        >
          {cardItems.map((item, idx) => (
            <Card key={idx} className="max-h-80 lg:min-w-md min-w-sm ">
              <CardHeader className="flex gap-0">
                {Array(item.rating)
                  .fill(null)
                  .map((_, index) => (
                    <Star key={index} fill="#FFD700" stroke="#FFD700" />
                  ))}
              </CardHeader>
              <CardContent className="text-muted-foreground">
                {item.description}
              </CardContent>
              <CardFooter className="flex gap-2">
                <Avatar>
                  <AvatarImage src={item.img} alt="@shadcn" />
                  <AvatarFallback>{item.name}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <p className="text-muted-foreground font-medium">
                    {item.proffession}
                  </p>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
