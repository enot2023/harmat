"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "../ui/layout-grid";
import Image from "next/image";
import Second from "./second";

export default function First() {
  return (
    <div>
      <div className='mx-auto max-w-screen-xl pl-10 pt-8'>
       <h1 className='text-sm md:text-xl lg:text-2xl text-gray-600 font-medium ei2'>We specialize in comprehensive architectural design and planning services, offering expertise in:</h1>
      </div>
      <div className=" relative h-screen md:h-[900px] w-full">
       
      <LayoutGrid cards={cards} />
      
    </div>
    <Second/>
    </div>
    
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white ei">Planning & Design</p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
      We are here to provide the best planning and design as per your needs. Starting from section, elevation till REALISTIC 3D views. 
      </p>
      <a href="mailto:contact@harmatenterprise.com" class=" eigini w-44 justify-center text-center rounded-lg shadow px-2 py-4 flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white ei">Interior Design</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
      Interior Design play a very important role in building office / home. We make sure it not miss and provide starting from designing, Electrical to material selection.
      </p>
      <a href="mailto:contact@harmatenterprise.com" class=" eigini w-44 justify-center text-center rounded-lg shadow px-2 py-4 flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white ei">Landscaping Design</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
      A good Landscape will make the eyes treat to see. For accomplishing a good landscaping design, We are here to provide the best service.
      </p>
      <a href="mailto:contact@harmatenterprise.com" class=" eigini w-44 justify-center text-center rounded-lg shadow px-2 py-4 flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white ei">Home Security</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
      We provide service and equipment for home security. Contact us for more information.
      </p>
      <a href="mailto:contact@harmatenterprise.com" class=" eigini w-44 justify-center text-center rounded-lg shadow px-2 py-4 flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
    </div>
  );
};
const Skeletonfive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white ei">Smart Home</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
      High electric bill? We are providing a solution to cut down on electric bill and control the lighting remotely. For more information contact us. 
      </p>
      <a href="mailto:contact@harmatenterprise.com" class=" eigini w-44 justify-center text-center rounded-lg shadow px-2 py-4 flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
    </div>
  );
};
const Skeletonsix = () => {
  return (
    <div>
      <p className="font-bold text-3xl text-white ei">Rainwater Harvesting</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-sm my-4 max-w-lg text-neutral-200">
      We provide a technique of collection and storage of rainwater. For more information contact us.
      </p>
      <a href="mailto:contact@harmatenterprise.com" class=" eigini w-44 justify-center text-center rounded-lg shadow px-2 py-4 flex items-center hover:scale-110 transition-all ease-in-out">Contact US</a>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: "/archi/planning.jpg"
   },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: "/archi/interior.jpg"
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: "/archi/landscape.jpg"},
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: "/archi/security.png",
  },
  {
    id: 5,
    content: <Skeletonfive />,
    className: "md:col-span-2",
    thumbnail: "/archi/smart.png",
  },
  {
    id: 6,
    content: <Skeletonsix />,
    className: "col-span-1",
    thumbnail: "/archi/rain.jpeg",
   },
];
