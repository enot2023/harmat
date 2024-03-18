import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div className='mb-4'>
      <hr className="mt-10 border-gray-200 " />
      <h1 className='flex items-center justify-center mt-10 text-3xl font-semibold'>About Us</h1>
      <div className='grid grid-cols-2'>
        <div className='flex items-center justify-center gap-24'>
        <h1>contact@harmatenterprise.com</h1>
          <Image  src={"/logo.png"} width={200} height={200} alt=''/>
        </div>
        <div className=' flex items-center justify-center mx-24 font-serif font-semibold'>
          <h1>Nestled in Imphal, HARMAT ENTERPRISE PRIVATE LIMITED is a hub of architectural innovation, smart planning, and advanced IT networking. Our passion for creativity and technology fuels our progress. With a team from across India, we're not just changing spaces; we're making possibilities limitless. Welcome to a new era of excellence!</h1>
        </div>
      </div>
    </div>
  )
}

export default About