import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  const logos = Array.from(
    { length: 7 },
    (_, i) => `/marquee/logo${i + 1}.png`
  );
  return (
    <Marquee>
      {logos.map((src, i) => (
        <div key={i} className="w-35 lg:w-50 mx-5 lg:mx-10 mt-20 lg:mt-0">
          <Image
            key={i}
            src={src}
            alt={`logo ${i + 1}`}
            width={200}
            height={200}
          />
        </div>
      ))}
    </Marquee>
  );
};

export default LogoMarquee;
