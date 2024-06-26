import Image from 'next/image'
import React from 'react'

const First = () => {
  return (
    <div className='mx-auto max-w-screen-xl px-8 pt-8'>
       <h1 className=" text-[25px] md:text-[50px] xl:text-[70px]  font-sans font-light">
            WHAT MAKES US A SPECIAL AGENCY?
          </h1>
          <p className=" text-[15px] md:text-[17px] pb-5 pt-2 mb-pt-0 ">
          we&apos;re not just another IT agency—we&apos;re the architects of innovation, the pioneers of progress, and your trusted partners in navigating the digital landscape.</p>
      <div className="grid grid-cols-1 md:grid-cols-2">
          <div className='order-2 md:order-1 pb-5'>
            <h1 className=" text-[25px] md:text-[50px] xl:text-[70px] font-sans font-light">
            Who we are?
          </h1>
          <p className="text-[15px] md:text-[17px] md:pr-8 ">
          we are pioneers in IT services and architecture planning and design. With a relentless passion for innovation and a commitment to excellence, we empower businesses to harness the full potential of technology for sustainable growth and success.
          </p></div>
          <div className='pb-5 order-1 md:order-2 md:pl-8'>
          <Image
            src="/about/who.jpg"
            height="1000"
            width="1000"
            className="h-[300px]  md:w-[500px] xl:w-full  object-cover rounded-xl  "
            alt="thumbnail"
          />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2">
        <div className='pb-5 md:pr-8'>
          <Image
            src="/about/who1.jpg"
            height="1000"
            width="1000"
            className="h-[300px]  md:w-[500px] xl:w-full  object-cover rounded-xl  "
            alt="thumbnail"
          />
          </div>
          <div className=' pb-5'>
            <h1 className="text-[25px] md:text-[50px] xl:text-[70px]  font-sans font-light md:pl-8">
            Our Purpose
          </h1>
          <p className="text-[15px] md:text-[17px]md:pl-8 ">
          our purpose is to empower businesses to thrive in the digital age by providing unparalleled IT services and architecting innovative solutions that drive sustainable growth and transformation.</p></div>
          
        </div>
    </div>
  )
}

export default First