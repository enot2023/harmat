"use client";
import Image from "next/image";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import TypewriterEffect from "typewriter-effect";
import NextVideo from "next-video";
import First from "@/components/archi/first";



const Archi = () => {
  return(
    <div>
    <div className="container-bg">
    <NextVideo className='eigi' src={'/archi/joy.mp4'} autoPlay loop muted controls={false}/>
      <div className="overlayContent">
      <div className='contents'>
            <h1 className=''>Architecture</h1>
            <p className='text-sm'>Architectural Planning & Design | Interior Design | Smart Home</p>
            {/* <div className="buttona">
                <button >Know more</button>
            </div> */}
        </div>
      </div>
      


    </div>
    <First/>
    </div>
  )
}

export default Archi