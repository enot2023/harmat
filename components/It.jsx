
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const It = () => {
  return (
    <div className=" relative isolate ">
      <div
        className="absolute inset-x-0 -z-10 overflow-hidden blur-2xl "
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div className="mx-auto max-w-screen-xl px-4 pt-8 sm:px-6 lg:px-8 ">
        <h1 className="text-2xl  font-extrabold">
          Seamless <span className="text-lime-500">IT</span> Enterprise{" "}
          <span className="text-lime-500">Solutions</span>
        </h1>
        <h1 className=" pt-2">
          Unleash Efficiency and Innovation. Elevate Your Business Today!
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 pt-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 gap-10">
  <div className="md:col-span-1">
    <Link href={"/"} className="flex flex-col items-center justify-center image-containers hover:text-white">
      <Image src={"/it/responsive.png"} width={70} height={70} alt="machi" />
      <h1 className="font-semibold text-center">Web Development</h1>
    </Link>
    <Link href={"/"} className="pt-6 flex flex-col items-center justify-center image-containers hover:text-transparent">
      <Image src={"/it/network.png"} width={70} height={70} alt="machi" />
      <h1 className="font-semibold text-center">NETWORK SECURITY</h1>
    </Link>
    <Link href={"/"} className="pt-6 flex flex-col items-center justify-center image-containers hover:text-transparent">
      <Image src={"/it/server.png"} width={70} height={70} alt="machi" />
      <h1 className="font-semibold text-center">ASSET MANAGEMENT</h1>
    </Link>
  </div>
  <div className="md:col-span-1 hidden md:flex justify-center"> {/* Hide on mobile */}
    <Image src={"/source.gif"} alt="machi" width={500} height={500} className="roundedImage" />
  </div>
  <div className="md:col-span-1">
    <Link href={"/"} className="flex flex-col items-center justify-center image-containers hover:text-transparent">

      <Image src={"/it/security.png"} width={70} height={70} alt="machi" />
      <h1 className=" font-semibold text-center">Home Security</h1>
    </Link>
    <Link href={"/"} className="pt-6 flex flex-col items-center justify-center image-containers hover:text-white">
      
      <Image src={"/it/mri.png"} width={70} height={70} alt="machi" />
      <h1 className="font-semibold text-center">Medical Equipment <br /> Related services</h1>
    </Link>
    <Link href={"/"} className="pt-6 flex flex-col items-center justify-center image-containers hover:text-white">
      
      <Image src={"/it/machinery.png"} width={70} height={70} alt="machi" />
      <h1 className="font-semibold text-center">Industrial Equipment <br /> Related Service</h1>
    </Link>
  </div>
</div>
    </div>
  );
};

export default It;
