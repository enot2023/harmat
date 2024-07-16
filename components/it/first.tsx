"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Image from "next/image";

export function First() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto max-w-screen-xl pb-24 px-10 gap-10 ">
      <BackgroundGradient className="rounded-[22px]   bg-zinc-900  ">
      <div className={"backgroundz rounded-[22px]" } style={{backgroundImage: "url('/it1/web.jpg')",}}>
      <div className={"contentz"}>
        <h1 className={"titlez"}>WEB DEVELOPMENT</h1>
        <p className={"descriptionz text-white"}>
          Elevate your online presence with our expert web development solutions, crafted to seamlessly merge innovation with functionality. From captivating design to robust functionality, we bring your digital vision to life with precision and flair.
        </p>
      <div className="flex items-center justify-center pt-5">
      <a href="mailto:soramjoys@gmail.com" className=" eigini w-44 justify-center text-center rounded-lg shadow px-2 py-4 flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
            </div>
      </div>
    </div></BackgroundGradient>
    <BackgroundGradient className="rounded-[22px]  items-center bg-zinc-900  ">
      <div className={"backgroundz rounded-[22px]" } style={{backgroundImage: "url('/it1/networks.jpg')",}}>
      <div className={"contentz"}>
        <h1 className={"titlez"}>NETWORK SECURITY</h1>
        <p className={"descriptionz text-white"}>
        Secure your digital infrastructure with our cutting-edge network security solutions. From threat detection to data encryption, we safeguard your organization against cyber threats with expertise and precision.</p>
      <div className="flex items-center justify-center pt-8  ">
      <a href="mailto:soramjoys@gmail.com" className=" eigini  w-44 justify-center text-center rounded-lg shadow px-2 py-4 mb-[5px] flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
            </div>
      </div>
    </div></BackgroundGradient>
    <BackgroundGradient className="rounded-[22px]  items-center bg-zinc-900  ">
      <div className={"backgroundz rounded-[22px]" } style={{backgroundImage: "url('/it1/asset.jpg')",}}>
      <div className={"contentz"}>
        <h1 className={"titlez"}>ASSET MANAGEMENT</h1>
        <p className={"descriptionz text-white"}>
        Elevate your asset management strategies with our tailored solutions. From tracking and optimizing resources to mitigating risks, we empower your organization to efficiently manage and maximize the value of its assets.</p>
      <div className="flex items-center justify-center pt-5 ">
      <a href="mailto:soramjoys@gmail.com" className=" eigini w-44 justify-center text-center rounded-lg shadow px-2 py-4 flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
            </div>
      </div>
    </div></BackgroundGradient>
    <BackgroundGradient className="rounded-[22px]  items-center bg-zinc-900  ">
      <div className={"backgroundz rounded-[22px]" } style={{backgroundImage: "url('/it1/school1.jpg')",}}>
      <div className={"contentz"}>
        <h1 className={"titlez"}>SCHOOL MANAGEMENT SYSTEM</h1>
        <p className={"descriptionz text-white"}>
        Optimize educational processes with our School Management System. From enrollment to performance tracking, our solution empowers educators to efficiently manage every aspect of the learning journey, fostering student success.</p>
      <div className="flex items-center justify-center pt-4">
      <a href="mailto:soramjoys@gmail.com" className=" eigini w-44 justify-center text-center rounded-lg shadow px-2 py-4 flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
            </div>
      </div>
    </div></BackgroundGradient>
    <BackgroundGradient className="rounded-[22px]  items-center bg-zinc-900  ">
      <div className={"backgroundz rounded-[22px]" } style={{backgroundImage: "url('/it1/fire.jpg')",}}>
      <div className={"contentz"}>
        <h1 className={"titlez py-6" }>FIRE ALARM</h1>
        <p className={"descriptionz text-white"}>
        Ensure safety with our advanced Fire Alarm systems. From early detection to swift response, we provide reliable solutions to protect lives and property, offering peace of mind in any environment.</p>
      <div className="flex items-center justify-center pt-8">
      <a href="mailto:soramjoys@gmail.com" className=" eigini w-44 justify-center text-center rounded-lg shadow px-2 py-4 flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
            </div>
      </div>
    </div></BackgroundGradient>
    <BackgroundGradient className="rounded-[22px]  items-center bg-zinc-900  ">
      <div className={"backgroundz rounded-[22px]" } style={{backgroundImage: "url('/it1/homesecurity.jpg')",}}>
      <div className={"contentz"}>
        <h1 className={"titlez md:py-3 lg:py-6 xl:py-6"}>CCTV CAMERA</h1>
        <p className={"descriptionz text-white"}>
        Enhance security with our CCTV Camera solutions. Offering round-the-clock surveillance, our systems provide peace of mind by monitoring and safeguarding your premises against potential threats.</p>
      <div className="flex items-center justify-center pt-8">
      <a href="mailto:soramjoys@gmail.com" className=" eigini w-44 justify-center text-center rounded-lg shadow px-2 py-4  flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
            </div>
      </div>
    </div></BackgroundGradient>
      
    </div>
  );
}
