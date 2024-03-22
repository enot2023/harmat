"use client";
import Image from "next/image";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TypewriterEffect from "typewriter-effect";
export default function First() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);
  return (
    <div
      ref={ref}
      className="w-full h-[700px] overflow-hidden relative grid place-items-center pt-10 "
    >
      <motion.h1
        className=" font-serif  text-4xl md:text-6xl text-white  lg:text-8xl absolute top-[100px] md:top-[90px] lg:top-[110px] left-5 z-10 "
        style={{ y: textY }}
      >
        {" "}
        IT Solutions that{" "}
       <br/> transform{" "} <br className="block lg:hidden"/> your  <br className="hidden lg:block" />Business
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/a3.png)`,
          backgroundPositionX: "center",
          backgroundPositionY: "10%",
          backgroundSize: "cover",
        

          y: backgroundY,
        }}
      ></motion.div>
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/a2.png)`,
          backgroundPositionX: "center",
          backgroundPositionY: "10%",
          backgroundSize: "cover",
          
        }}
      >
        {/* <motion.h1 className='font-bold font-serif text-7xl lg:text-8xl absolute top-28 left-5 z-10' style={{y: textY}}> your <span className='text-slate-900'>business</span></motion.h1> */}
        <div className="flex items-center justify-center mt-[360px] md:mt-64">
          <h1 className="font-semibold mt-16 lg:mt-[170px] ml-5 font-serif text-white text-2xl md:text-2xl  lg:text-3xl  z-0">
            Leave the tech to us. <br /> Let&apos;s get
            started with yours
          </h1>
        </div>
        <div className="text-sm sm:text-md md:text-lg lg:text-xl z-0 text-white  mt-3 font-bold  bg-clip-text flex items-center justify-center">
          <TypewriterEffect
            options={{
              strings: ["ARCHITECTURAL PLANNING AND DESIGN", "IT SERVICES"],
              autoStart: true,
              loop: true,
              cursor: "",
            }}
          />
        </div>
        <div className="flex items-center justify-center">
          <a href="/" className="  btna mt-3 z-0">
            KNOW MORE
          </a>
        </div>
      </div>
    </div>
  );
}