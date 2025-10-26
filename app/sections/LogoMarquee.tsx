import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoMarquee = () => {
  const logos = Array.from(
    { length: 7 },
    (_, i) => `/marquee/logo${i + 1}.png`
  );
  return (
    <Marquee >
      {logos.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`logo ${i + 1}`}
          width={200}
          height={200}
          className="mx-10"
        />
      ))}
    </Marquee>
  );
};

export default LogoMarquee;
