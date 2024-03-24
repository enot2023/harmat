import { First } from '@/components/it/first';
import { MacbookScroll } from '@/components/ui/macbook-scroll';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <div className='bg-indigo-950'>
      <div className="overflow-hidden w-full">
      <MacbookScroll
        title={
            <>
          <span className=' ei4 font-extralight md:font-normal text-white'>
            We bring you powerful advantages to navigate your digital transformation. 
          </span>
          <br className='block md:hidden'/><br />
         <span className='ei3 text-white'>WE PROVIDE IT SOLUTIONS</span>
         </>
        }
        badge={
          <Link href="/">
            <Badge className="h-10 w-10 transform -rotate-12" />
          </Link>
        }
        src={`/it1/a1.png`}
        showGradient={false}
      />
      
    </div>
    <First/>
    
    </div>
  );
}
// Peerlist logo
const Badge = ({ className }: { className?: string }) => {
  return (
   <Image src={"/logo.png"} width={70} height={70} alt='yo'/>
  )
}

export default page