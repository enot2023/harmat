import Image from 'next/image'
import React from 'react'

const Second = () => {
  return (
    <div>
<div className='bg-blue-400'>
<h1 className='ei2 pt-4 pl-10 block md:hidden'>ARCHITECTURAL DESIGN AND PLANNING</h1>
        <div className='mx-auto max-w-screen-xl pl-10 grid grid-cols-2 md:pt-10 '>
        <div className='flex items-end justify-start order-2 md:order-1 '>
            <Image src={"/archi/architecture.png"} width={600} height={600} alt='archi'/>
        </div>
        <div className='text-sm md:text-base order-1 md:order-2 '>
            <h1 className='ei2 hidden md:block'>ARCHITECTURAL DESIGN AND PLANNING</h1>
            <ul className='ult '>
            <li>Floor Plan</li>
            <li>Sections</li>
            <li>Elevation</li>
            <li>3D views</li>
            <li>Interior Design</li>
            <li>Electrical Drawing</li>
            <li>Rain Water Harvesting</li>
            </ul>
        </div>
    </div>
    </div>
    <div className='bg-orange-400'>
    <h1 className='ei2 pt-4 pl-10 block md:hidden'>SMART HOME SOLUTIONS</h1>
        <div className='mx-auto max-w-screen-xl pl-10 grid grid-cols-2  md:pt-10 '>
        
        <div>
            <h1 className='ei2 hidden md:block'>SMART HOME SOLUTIONS</h1>
            <ul className='ult'>
            <li>Door Camera</li>
            <li>Motion Detection</li>
            <li>Notification through Email/SMS</li>
            <li>WiFi Enabled Switch, Remotely Controlled</li>
            <li>Smoke Detector</li>
            <li>Wireless Water Level Controller</li>
            <li>LPG Gas Detector</li>
            <li>CCTV</li>
            </ul>
        </div>
        <div className='flex items-end justify-start'>
            <Image src={"/archi/phone.png"} width={300} height={300} alt='archi'/>
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default Second