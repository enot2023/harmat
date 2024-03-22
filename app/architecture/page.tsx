"use client";
import Image from "next/image";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TypewriterEffect from "typewriter-effect";



const Archi = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "700%"]);
  return (
    <div
      ref={ref}
      className="w-full h-[700px] overflow-hidden relative grid place-items-center pt-10 "
    >
    

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(/archi/group2.png)`,
          backgroundPositionX: "center",
          backgroundPositionY: "10%",
          backgroundSize: "cover",
        

          y: backgroundY,
        }}
      ></motion.div>
      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: `url(/archi/group3.png)`,
          backgroundPositionX: "center",
          backgroundPositionY: "10%",
          backgroundSize: "cover",
          
        }}
      >
        {/* <motion.h1 className='font-bold font-serif text-7xl lg:text-8xl absolute top-28 left-5 z-10' style={{y: textY}}> your <span className='text-slate-900'>business</span></motion.h1> */}
        <div className="flex items-center justify-center mt-[360px] md:mt-64">
          <motion.h1 className="font-semibold  ml-5 font-serif text-white text-2xl md:text-2xl  lg:text-3xl  z-0 text-center"  style={{ y: textY }}>
          Architecture <br /> <span className=" text-base text-neutral-600">Architectural Planning & Design | Interior Design | Smart Home </span>
          </motion.h1>
        </div>
        
      </div>
    </div>
  )
}

export default Archi