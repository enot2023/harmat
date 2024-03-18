import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='mb-4'>
      <hr className="mt-10 border-gray-200 " />
      <h2 className='flex items-center justify-center mt-10 text-3xl font-semibold'>About Us</h2>
      <div className='grid grid-cols-2'>
        <div className='flex items-center justify-center gap-24'>
          <p>Contact us at <a href="mailto:contact@harmatenterprise.com">contact@harmatenterprise.com</a></p>
          <Image src={"/logo.png"} width={200} height={200} alt='Company Logo' />
        </div>
        <div className='flex items-center justify-center mx-24 font-serif font-semibold'>
          <p>Nestled in Imphal, HARMAT ENTERPRISE PRIVATE LIMITED is a hub of architectural innovation, smart planning, and advanced IT networking. Our passion for creativity and technology fuels our progress. With a team from across India, we&apos;re not just changing spaces; we&apos;re making possibilities limitless. Welcome to a new era of excellence!</p>
        </div>
      </div>
    </div>
  )
}

export default About
