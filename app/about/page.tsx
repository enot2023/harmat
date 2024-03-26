import First from "@/components/about/first";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="container-bg">
      <Image
      width={1000}
      height={1000}
        className="object-cover object-center w-3/4 "
        alt="Placeholder Image"
        src="/about/about.jpg"
        style={{ width: '100vw', height: '100vh' }}
      />
      <div className="overlayContent">
      <div className='contentas'>
            <h1 className=''>what we do</h1>
            <p className='text-sm'>Architectural Planning & Design | School Management System | Smart Home | IT Solutions | ASSET MANAGEMENT</p>
            
        </div>
       
      </div>
      


    </div>
    <First/>
    </div>
  );
};

export default page;
