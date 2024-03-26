import Image from 'next/image'
import React from 'react'

const First = () => {
  return (
    <div className='mx-auto max-w-screen-xl pl-10 pt-8'>
      <div className="grid grid-cols-1 md:grid-cols-2">
          <div className='order-2 md:order-1 pb-5'>
            <h1 className=" text-[40px] lg:text-[50px] xl:text-[70px]  font-sans font-light">
            Who we are?
          </h1>
          <p className="text-[17px]  ">
          we are pioneers in IT services and architecture planning and design. With a relentless passion for innovation and a commitment to excellence, we empower businesses to harness the full potential of technology for sustainable growth and success.
          </p></div>
          <div className='pb-5 mr-10 order-1 md:order-2'>
          <Image
            src="/about/who.jpg"
            height="1000"
            width="1000"
            className="h-[350px]  md:w-[500px] xl:w-full  object-cover rounded-xl  "
            alt="thumbnail"
          />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='pb-5 mr-10 '>
          <Image
            src="/about/who1.jpg"
            height="1000"
            width="1000"
            className="h-[350px]  md:w-[500px] xl:w-full  object-cover rounded-xl  "
            alt="thumbnail"
          />
          </div>
          <div className=' pb-5'>
            <h1 className=" text-[40px] lg:text-[50px] xl:text-[70px]  font-sans font-light">
            Our Purpose
          </h1>
          <p className="text-[17px]  ">
          our purpose is to empower businesses to thrive in the digital age by providing unparalleled IT services and architecting innovative solutions that drive sustainable growth and transformation.</p></div>
          
        </div>
    </div>
  )
}

export default First