import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='mb-4'>
      {/* <hr className="mt-10 border-gray-200 " /> */}
      <h2 className='flex items-center justify-center mt-6 text-3xl font-semibold'>About Us</h2>
      <div className='grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 '>
        <div className='flex items-center justify-center gap-10 lg:gap-24 -mt-10 lg:mt-8'>
          <p  className='order-2 lg:order-1 text-center pr-4 lg:px-4'>Contact us at : <a href="mailto:contact@harmatenterprise.com">contact@harmatenterprise.com</a></p>
          <Image src={"/logo.png"} width={200} height={200} alt='Company Logo' className="order-1 lg:order-2 w-32 h-32 md:w-50 md:h-50 ml-4 md:ml-24" />
        </div>
        <div className='flex items-center  justify-center mx-5 lg:mx-24 md:ml-24 font-serif text-sm text-gray-500'>
          <p>Nestled in Imphal, HARMAT ENTERPRISE PRIVATE LIMITED is a hub of architectural innovation, smart planning, and advanced IT networking. Our passion for creativity and technology fuels our progress. With a team from across India, we&apos;re not just changing spaces; we&apos;re making possibilities limitless. Welcome to a new era of excellence!</p>
        </div>
      </div>
    </div>
  )
}

export default About
