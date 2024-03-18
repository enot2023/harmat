"use client";
import Image from "next/image";
import TypewriterEffect from "typewriter-effect";

export default function First() {
  return (
    <div className="mx-auto bg-black opacity-90 relative " >
    <Image
      className="mb-10 shadow-md w-full max-h-screen lg:h-screen"
      alt="Placeholder Image"
      src="/carousal/co2.jpg"
      width={850} 
      height={1000}
      
      objectFit="cover" 
      objectPosition="center center"
    />
      <div className="overlayContent pt-24 lg:pt-10 ">
        <h1 className=" text-lg  sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-lime-500 fontb">IT Solutions that transform your business.</h1>
        <p className="font-a text-lg sm:text-md md:text-3xl lg:text-3xl fonta ">Leave the tech to us. Let&apos;s get started with yours</p>
        <div className="text-sm sm:text-md md:text-lg lg:text-xl font-bold mt-2  bg-clip-text flex items-center justify-center">
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
  );
}