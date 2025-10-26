import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center">
      <Image src="/logo.png" alt="easypay_logo" width={45} height={45}  className="hidden lg:block" />
      <Image src="/logo.png" alt="easypay_logo" width={35} height={35}  className="lg:hidden" />
      <h3 className="text-xl lg:text-3xl font-bold ">Easy Pay</h3>
    </div>
  );
};

export default Logo;