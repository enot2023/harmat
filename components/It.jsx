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
      <div className="grid grid-cols-3 pt-10 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 gap-10">
        <div>
          <Link href={"/"} className=" flex items-center justify-center gap-3 image-containers hover:text-white">
            <Image src={"/it/responsive.png"} width={70} height={70} alt="machi" />
            <h1 className=" font-semibold ">Web Development</h1>
          </Link>
          <Link
            href={"/"}
            className="pt-16 flex items-center justify-center gap-3 image-containers hover:text-white"
          >
            <Image src={"/it/network.png"} width={70} height={70} alt="machi" />
            <h1 className=" font-semibold ">NETWORK SECURITY</h1>
          </Link>
          <Link
            href={"/"}
            className="pt-16 flex items-center justify-center gap-3 image-containers hover:text-white"
          >
            <Image src={"/it/server.png"} width={70} height={70} alt="machi" />
            <h1 className=" font-semibold ">ASSET MANAGEMENT</h1>
          </Link>
        </div>
        <div>
          <Image
            src={"/source.gif"}
            alt="machi"
            width={500}
            height={500}
            className=" roundedImage "
          ></Image>
        </div>
        <div>
          <Link href={"/"} className=" flex items-center justify-center gap-3 image-containers hover:text-white">
            <h1 className=" font-semibold ">Home Security</h1>
            <Image src={"/it/security.png"} width={70} height={70} alt="machi" />
          </Link>
          <Link
            href={"/"}
            className="pt-16 flex items-center justify-center gap-3 image-containers hover:text-white"
          >
            <h1 className=" font-semibold ">Medical Equipment <br /> Related services</h1>
            <Image src={"/it/mri.png"} width={70} height={70} alt="machi" />
          </Link>
          <Link
            href={"/"}
            className="pt-16 flex items-center justify-center gap-3 image-containers hover:text-white"
          >
            <h1 className=" font-semibold ">Industrial Equipment <br /> Related Service</h1>
            <Image src={"/it/machinery.png"} width={70} height={70} alt="machi" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default It;
