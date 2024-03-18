"use client"
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
  
const Solution = () => {
    const data =[
        {
            label: 'ARCHITECTURE PLANNING AND DESIGN',
            img: '/carousal/construction.webp'
        },
        {
            label: 'SMART HOME',
            img: '/carousal/smarthome.webp'
        },
        {
            label: 'INTERIOR DESIGN',
            img: '/carousal/interior.webp'
        },
        {
            label: 'CONSTRUCTION WORK',
            img: '/carousal/cwork.webp'
        },
        {
            label: 'LANDSCAPE DESIGN',
            img: '/carousal/landscape.webp'
        },
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,

        responsive: [
          {
            breakpoint: 768, 
            settings: {
              slidesToShow: 1,
            },
          },
          {
            breakpoint: 1024, 
            settings: {
              slidesToShow: 2,
            },
          },
        ],
      };
  return (
    <div className='bg-lime-500 pb-10'>
        <div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8'>
        <h1 className='text-2xl text-white font-extrabold'>Expert Architectural Solutions</h1>
        <h1 className='text-white pt-2'>Unlock Your Vision with Expert Architectural Solutions! Explore Our Wide Range of Services and Transform Your Dreams into Reality.</h1>
        </div>
        <div className='w-3/4 m-auto '>
        <Slider {...settings} >
                {data.map((d) =>(
                    <div key={d.label} className='bg-white h-[450px] rounded-xl'>
                        <div className='rounded-t-xl flex justify-center items-center'>
                            <Image  alt='img' src={d.img} width={500} height={500} className=''></Image>
                        </div>
                        <div className='flex flex-col justify-center items-center p-4'>
                            <h1 className='text-xl  '>{d.label}</h1>
                        </div>
                    </div>
                ))}
            
        </Slider>
        </div>

    </div>
  )
}

export default Solution