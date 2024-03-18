"use client";
import Image from "next/image";
import TypewriterEffect from "typewriter-effect";
export default function First() {
    return (
        <div className=" mx-auto  inset-0 bg-black opacity-90" >

    <div>
      <div>
      <Image
        className=" mb-10 shadow-md"
        alt="Placeholder Image"
        src="/carousal/co2.jpg"
        style={{ width: '100%', maxHeight: '100vh' }}
      />
      </div>
      <div className="overlayContent">
        <h1 class="larger-text fontb  animate__animated animate__slideInFromTop text-lime-500" >IT Solutions that transform your business.</h1>
        <p class="larger-text fonta animate__animated animate__slideInFromInward">Leave the tech to us. Let&apos;s get started with yours</p>
        <div >
        <div className=" text-xl font-bold mt-2 bg-clip-text  ">
            <TypewriterEffect
              options={{
                strings: ["ARCHITECTURAL PLANNING AND DESIGN", "IT SERVICES"],
                autoStart: true,
                loop: true,
                cursor: "",
              }}
            />
          </div>
      <a href="/" className="btna mt-3">KNOW MORE</a>
      </div>
      </div>
      


    </div>
            
</div>
        
        
)}