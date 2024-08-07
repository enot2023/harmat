
"use client";
import {  Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Link from "next/link";

const First = () => {
  return (
    <div className="container-bg ">
      <img
        className="object-cover object-center w-3/4   shadow-md g327"
        alt="Placeholder Image"
        src="contact.jpg"
        style={{ width: '100%', height: '970px' }}
      />
      <div className="absolute inset-0  lg:block">
      <div className="">
      <div className="mx-auto px-10 pt-[70px]  md:pt-36 ">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-3 md:mt-0">
          <h1 className=" text-[30px] md:text-[40px] lg:text-[50px] xl:text-[70px] text-white font-sans font-light">
            What&apos;s on your mind?
          </h1>
          <p className=" md:pl-10 text-[13px] md:text-[17px] xl:text-xl pt-2 md:pt-0 lg:pt-6 xl:pt-8 text-white ">
            We&apos;re here to help you! Tell us what you&apos;re looking for and
            we&apos;ll get you connected to the right people.
          </p>
        </div>
        <div className="">
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 ">
            <div className="order-2 md:order-1">
              <div className="  rounded-lg h-[180px] md:h-[350px] xl:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.497108408435!2d93.92596577482502!3d24.812668047169304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374927b6677229d1%3A0xd03c882f24fc199f!2sRIMS%20Rd%2C%20Imphal%2C%20Manipur!5e0!3m2!1sen!2sin!4v1721125854598!5m2!1sen!2sin" 
                  width="100%"
                  height="100%"
                  className="rounded-lg"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="pt-7">
                <ul>
                  <li className=" pb-3">
                    <MapPin className="icon-box" style={{ fill: 'white'}} />
                    <span className="pl-6 text-white text-sm md:text-base">Address: Nagamapal, RIMS Road</span>
                  </li>
                  <li className="pb-3  hover:scale-110 transition-all ease-in-out">
                    <Phone className="icon-box" style={{ fill: 'white'}}/>
                    <a href="tel:+919863303851" className="pl-6 text-white text-sm md:text-base">
                      Call us: +91 9863303851
                    </a>
                  </li>
                  <li className="pb-3 hover:scale-110 transition-all ease-out-in">
                    <Mail className="icon-box" style={{ fill: 'white'}}/>
                    <a
                      href="mailto:soramjoys@gmail.com.com"
                      className="pl-6 text-white text-xs md:text-sm lg:text-base"
                    >
                      Mail us: soramjoys@gmail.com.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          
          <div className="order-1 md:order-2">
          <CardContainer className="inter-var">
      <CardBody className=" container-bg relative group/card  dark:hover:shadow-2xl w-auto sm:w-[30rem] rounded-xl   ">
      <div className=" flex items-center justify-center hover:scale-110 transition-all ease-out-in">
          <CardItem
            translateZ={20}
            as={Link}
            href="mailto:soramjoys@gmail.com"
            target="__blank"
            className=" rounded-xl text-base md:text-2xl font-normal text-white "
          >
            Request for a service →
          </CardItem>
        </div>
        <CardItem translateZ="100" className="w-full my-4 ">
          <Image
            src="/request.jpg"
            height="1000"
            width="1000"
            className=" md:h-[300px] xl:h-60  md:w-[350px] xl:w-full md:ml-20 object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
      </CardBody>
    </CardContainer>
          </div>
        </div>
        </div>
      </div>
    </div>
      </div>
      


    </div>
  );
};

export default First;
