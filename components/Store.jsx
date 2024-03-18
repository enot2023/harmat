import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const Store = () => {
  return (
    <div className='mb-10 px-10'>
        <div className='pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7 mx-auto'>
            <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:bg-gray-300  transition-all ease-in-out'>
            <Image alt='doctor1' src={'/ecoomerce.webp'} width={500} height={200} className=' h-[200px] w-full object-cover rounded-lg'/>
            <div className='mt-3 items-center flex flex-col gap-1'>
                <h2 className="text-2xl font-bold text-neutral-500">Online Store</h2>
                <h2 className='text-grey-500 text-sm'>Fashions, Electrical, Groceries, TV, Computer Hardware, Garden Tools, Kitchen Appliance, Toys and more.</h2>
                <Link href={"/"}className='p-2 px-3 border-[1px] rounded-full w-full text-center text-[15px] mt-10 cursor-pointer hover:bg-lime-500 hover:text-white'>
                <h2> Shop now</h2></Link>
                </div>
            </div>
            <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:bg-gray-300  transition-all ease-in-out'>
            <Image alt='doctor2' src={'/digital.webp'} width={500} height={200} className='h-[200px] w-full object-cover rounded-lg'/>
            <div className='mt-3 items-center flex flex-col gap-1'>
                <h2 className='text-2xl font-bold text-neutral-500'>IT Solutions</h2>
                <h2 className='text-grey-500 text-sm'>Web Design & Development, Networking, Smart Home Integration, Home Security, Medical and Industrial Equipments.</h2>
                <Link href={"/"}className='p-2 px-3 border-[1px] rounded-full w-full text-center text-[15px] mt-10 cursor-pointer hover:bg-lime-500 hover:text-white'>
                <h2 >Read more</h2></Link>
                </div>
            </div>
            <div className='border-[1px] rounded-lg p-3 cursor-pointer hover:bg-gray-300  transition-all ease-in-out'>
            <Image alt='doctor3' src={'/architect.webp'} width={500} height={200} className='h-[200px] w-full object-cover rounded-lg'/> 
            <div className='mt-3 items-center flex flex-col gap-1'>
               <h2 className='text-2xl font-bold text-neutral-500'>Architectural Services</h2>
                <h2 className='text-grey-500 text-sm'>Architectural Design and Planning, Interior Design, Landscaping Design, Material Selection, Skilled Workforce Provision, and 3D Visualization.</h2>
                <Link href={"/"}className='p-2 px-3 border-[1px] rounded-full w-full text-center text-[15px] mt-5 cursor-pointer hover:bg-lime-500 hover:text-white'>
                <h2 >Read more</h2></Link>
            </div>
            </div>     
        </div>
    </div>
  );
};

export default Store;
