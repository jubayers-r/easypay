import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { universalSecHeadline } from "../sections/Features";

const FooterCard = () => {
  return (
    <Card className="bg-[url(/footer.png)] bg-no-repeat bg-center bg-cover grid place-items-center text-center md:py-30 py-10 px-0 my-10 md:my-30 ">
      <CardContent className="md:w-[80%] space-y-3 ">
        <h3 className={`${universalSecHeadline} text-white`}>
          Ready to experience seamless secure payments globally
        </h3>
        <p className="text-xl text-white md:w-[80%] mx-auto hidden md:block">
          Ready for hassle-free, secure payments anywhere in the world? Start
          using Monks Pay today it's fast, free, and focused on keeping your
          transactions secure!
        </p>
      </CardContent>
      <CardFooter className="grid md:flex gap-2 mt-5">
        <Button>Download The App</Button>
        <Button variant={"outline"} className="text-white">
          Get Started Now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FooterCard;
