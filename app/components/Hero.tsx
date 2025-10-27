import Image from "next/image";
import { universalSecHeadline } from "../sections/Features";

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2">
      {/* left part */}
      <div className="mt-20 mb-10 text-center lg:text-left grid place-items-center lg:place-items-start ">
        <p className={`font-bold text-xl uppercase text-muted-foreground`}>
          Easy Payment
        </p>
        <h3
          className={`xl:text-6xl/tight 2xl:text-7xl/tight ${universalSecHeadline} lg:text-left`}
        >
          Pay{" "}
          <span className="underline underline-offset-8 lg:decoration-7 decoration-primary">
            fast and smarter
          </span>{" "}
          form anywhere
        </h3>
        <p className="text-xl text-muted-foreground font-medium w-[75%] mt-7 mb-12">
          Experience the future of payments: fast, secure, and tailored for the
          next generation&apos;s convenience and trust.
        </p>
        {/* download buttons */}
        <div className="flex gap-3">
          <Image
            src={"/components/Store download button.png"}
            alt="download button android "
            width={150}
            height={100}
            className="cursor-pointer"
          />
          <Image
            src={"/components/Store download button (1).png"}
            alt="download button apple"
            width={150}
            height={100}
            className="cursor-pointer"
          />
        </div>
      </div>
      {/* right part */}
      <div className="hidden lg:flex relative items-end">
        <Image
          src={"/components/User.png"}
          width={250}
          height={250}
          alt="user ratings"
          className="absolute -right-20 top-30 z-10"
        />

        <Image
          src={"/man-wearing-t-shirt-gesturing .png"}
          alt="man holding a phone"
          width={600}
          height={600}
          className="absolute bottom-0 right-0 "
        />

        <Image
          src={"/components/Card.png"}
          width={200}
          height={200}
          alt="payment successful card"
          className="absolute left-0 bottom-30 "
        />
      </div>
    </div>
  );
};

export default Hero;
