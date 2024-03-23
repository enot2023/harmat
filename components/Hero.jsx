"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  const data =[
    {
        img: '/archi.jpg'
    },
    {
        img: '/carousal/co1.jpg'
    },
    {
        img: '/carousal/co2.jpg'
    },
   
]
const shop =[
  
  {
      img: '/carousal/shpo2.webp'
  },
  {
      img: '/carousal/shop1.webp'
  },
  {
    img: '/carousal/shop3.jpg'
  },
 
]
const it =[
  
  {
      img: '/carousal/it3.webp'
  },
  {
      img: '/carousal/it1.jpeg'
  },
  {
    img: '/carousal/it2.jpg'
  },
 
]
const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000  
  };
  return (
    <div className="mx-auto max-w-screen-xl px-4 pt-10 sm:px-6 lg:px-8 z-100">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="order-2 lg:order-1 lg:py-24 sm:p-2">
          <h2 className="text-3xl lg:mb-0 ml-4 lg:ml-0 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-950 to-sky-500">
          Online Store
          </h2>

          <p className="mt-4 lg:mb-0 ml-4 lg:ml-0 text-gray-600">
          Fashions, Electrical, Groceries, TV, Computer Hardware, Garden Tools, Kitchen Appliance, Toys and more.
          </p>
          
          <Button className="mt-4 mb-4 lg:mb-0 ml-4 lg:ml-0 bg-indigo-950 hover:bg-stone-950 transform hover:scale-105 transition duration-300">
            Shop Now
          </Button>
        </div>

    
    <Slider {...settings} className="order-1 lg:order-2">
  {shop.map((d) => (
    <div key={d.id} className="overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
      <Image
        alt="doctor"
        width={800}
        height={800}
        src={d.img}
        className="h-80 w-full object-cover rounded-3xl"
      />
      
    </div>
  ))}
</Slider>



      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <Slider {...settings}>
  {it.map((d) => (
    <div key={d.id} className="overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
      <Image
        alt="doctor"
        width={800}
        height={800}
        src={d.img}
        className="h-80 w-full object-cover rounded-3xl"
      />
    </div>
  ))}
</Slider>

        
        <div className="lg:py-24">
          <h2 className="text-3xl lg:mb-0 ml-4 lg:ml-0 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-950 to-sky-500">
          We bring you powerful advantages to navigate your digital transformation.
          </h2>

          <p className="mt-4 lg:mb-0 ml-4 lg:ml-0 text-gray-600">
          Web Design & Development, Networking, Smart Home Integration, Home Security, Medical and Industrial Equipments.
          </p>
          
          <Button className="mt-4 mb-4 lg:mb-0 ml-4 lg:ml-0 bg-indigo-950 hover:bg-stone-950 transform hover:scale-105 transition duration-300">
  Read more
</Button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="order-2 lg:order-1 lg:py-24">
          <h2 className="text-3xl lg:mb-0 ml-4 lg:ml-0 font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-950 to-sky-500">
          Turn your dream home to reality.
          </h2>

          <p className="mt-4 lg:mb-0 ml-4 lg:ml-0 text-gray-600">
          Architectural Design and Planning, Interior Design, Landscaping Design, Material Selection, Skilled Workforce Provision, and 3D Visualization.
          </p>
          
          <Link href={"/architecture"}>
          <Button className="mt-4 mb-4 lg:mb-0  ml-4 lg:ml-0 bg-indigo-950 hover:bg-stone-950 transform hover:scale-105 transition duration-300">
  Read more
</Button></Link>
        </div>
      <Slider {...settings} className="order-1 lg:order-2">
  {data.map((d) => (
    <div key={d.id} className="overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
      <Image
        alt="doctor"
        width={800}
        height={800}
        src={d.img}
        className="h-80 w-full object-cover rounded-3xl"
      />
    </div>
  ))}
</Slider>

      </div>

      <div className="flex items-center justify-between pt-10 pb-7">
        <div className=" text-center ">
          <h1 className="text-5xl font-extrabold text-indigo-950">5+</h1>
          <p>Years of expertise</p>
        </div>
        <div className=" text-center ">
          <h1 className="text-5xl font-extrabold text-indigo-950">5+</h1>
          <p>Years of expertise</p>
        </div>
        <div className=" text-center ">
          <h1 className="text-5xl font-extrabold text-indigo-950">5+</h1>
          <p>Years of expertise</p>
        </div>
        <div className=" text-center ">
          <h1 className="text-5xl font-extrabold text-indigo-950">5+</h1>
          <p>Years of expertise</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;