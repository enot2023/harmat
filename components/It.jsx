"use client"
import Image from "next/image";
import React, { useEffect } from "react";
import {Button} from "@/components/ui/button"
const It = () => {
 
  useEffect(() => {
    let listItemDom = document.querySelector('.carousel .list');
    let thumbnailDom = document.querySelector('.carousel .thumbnail');
    let carouselDom = document.querySelector('.carousel');
    let timeRunning = 2000;
    let timeAutoNext = 7000;
    let runAutoRun = setTimeout(() => {
      document.getElementById('next').onclick()
    }, timeAutoNext)
    let runTimeOut;

    const showSlider = (type) => {
      const itemSlider = document.querySelectorAll('.carousel .list .item');
      const itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');
      
      if (type === 'next') {
        listItemDom.appendChild(itemSlider[0]);
        thumbnailDom.appendChild(itemThumbnail[0]);
        carouselDom.classList.add('next');
      } else if (type === 'prev') {
        listItemDom.prepend(itemSlider[itemSlider.length - 1]);
        thumbnailDom.prepend(itemThumbnail[itemThumbnail.length - 1]);
        carouselDom.classList.add('prev');
      }

      clearTimeout(runTimeOut);
      runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('prev');
        carouselDom.classList.remove('next');
      }, timeRunning);
      clearTimeout(runAutoRun)
      runAutoRun = setTimeout(() => {
        document.getElementById('next').click()
      }, timeAutoNext)
    };

    document.getElementById('prev').onclick = () => {
      showSlider('prev');
    };

    document.getElementById('next').onclick = () => {
      showSlider('next');
    };
  }, []);

  return (
    <div>
      <div className="carousel ">
        <div className="list">
          <div className="item">
            <div className="img"><Image src={"/it/webdesign.jpg"}   width={1000} height={1000}/></div>
            <div className="content">
             
              <div className="topic">Web Development</div>
              <div className="des  ">At Harmat, we specialize in crafting cutting-edge web solutions tailored to meet the unique needs of your business. Our expert team of developers is dedicated to delivering high-quality, custom-built websites and web applications that drive results and exceed expectations.
               <br />With a focus on user experience, performance, and scalability, we offer a comprehensive range of web development services. Whether you&apos;re looking to launch a brand new website, revamp an existing one, or develop a powerful web application, we have the expertise to bring your vision to life.</div>
              <div className="buttons">
                <Button className="bg-indigo-950">See more</Button>
         
              </div>
            </div>
          </div>
          <div className="item">
            <div  className="img"><Image src={"/it/networks.jpg"}  width={1000} height={1000}/>
     </div>       <div className="content">
             
              <div className="topic">Network Security</div>
              <div className="des " >At Hatman, we understand the critical importance of safeguarding your digital assets against ever-evolving cyber threats. Our comprehensive network security services are designed to protect your organization&apos;s sensitive information, maintain compliance with regulatory standards, and mitigate the risks associated with malicious attacks.</div>
              <div className="buttons">
                <Button className="bg-indigo-950">See more</Button>
              
              </div>
            </div>
          </div>
          <div className="item">
            <div  className="img"><Image src={"/it/asset.jpg"}  width={1000} height={1000}/>
        </div>    <div className="content">
              
              <div className="topic">Asset Management</div>
              <div className="des  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus, doloremque tempore animi id ipsam quos corporis perspiciatis, assumenda dolores modi rem  Reprehenderit!</div>
              <div className="buttons">
                <Button className="bg-indigo-950">See more</Button>
               
              </div>
            </div>
          </div>
         <div className="item">
            <div  className="img"><Image src={"/it/homesecurity.jpg"}  width={1000} height={1000}/>
 </div>           <div className="content">
            
              <div className="topic">Home Security</div>
              <div className="des  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus, doloremque tempore animi id ipsam quos corporis perspiciatis, assumenda dolores modi rem quae voluptatem repudiandae! </div>
              <div className="buttons">
                <Button className="bg-indigo-950" >See more</Button>
              
              </div>
            </div>
          </div>
          <div className="item">
            <div  className="img"><Image src={"/it/medicalequipment.jpg"}  width={1000} height={1000}/></div>
            <div className="content">
              
              <div className="topic">Medical Equipment related services</div>
              <div className="des  ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus, doloremque tempore animi id ipsam quos corporis perspiciatis, assumenda dolores modi rem quae voluptatem repudiandae! Nesciunt tempore pariatur quam ea quisquam fuga odio adipisci. Est,!</div>
              <div className="buttons">
                <Button className="bg-indigo-950">See more</Button>
             
              </div>
            </div>
          </div>
          <div className="item">
            <div  className="img"><Image src={"/it/industrialequi.jpg"}  width={1000} height={1000}/></div>
            <div className="content">
            
              <div className="topic">Industrial Equipment Related Service</div>
              <div className="des ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora natus, doloremque tempore animi id ipsam quos corporis perspiciatis, assumenda dolores modi rem quae voluptatem repudiandae! Nesciunt tempore pariatur quam ea quisquam fuga odio adipisci. Est, inventore nobis. Aspernatur soluta explicabo velit molestiae animi. Reprehenderit!</div>
              <div className="buttons">
                <Button  className="bg-indigo-950">See more</Button>
               
              </div>
            </div>
          </div> 
        </div>
        {/* thumnail */}
        <div className="thumbnail ">
         
          <div className="item">
          <div  className="img"><Image src={"/it/networks.jpg"}  width={1000} height={1000}/>
     </div>       <div className="content">
              <div className="title text-white">Network security </div>
          </div>
          </div>
          <div className="item">
          <div  className="img"><Image src={"/it/asset.jpg"} width={1000} height={1000}/>
         </div>   <div className="content">
              <div className="title text-white">Asset Management</div>
              
          </div>
          </div>
          <div className="item">
          <div  className="img"><Image src={"/it/homesecurity.jpg"} width={1000} height={1000}/>
  </div>          <div className="content">
              <div className="title text-white">Home Security</div>
              
          </div>
          </div> 
          <div className="item">
          <div  className="img"><Image src={"/it/medicalequipment.jpg"} width={1000} height={1000}/></div>
            <div className="content">
              <div className="title text-white">Medical Equipment related services</div>
              
          </div>
          </div>
          <div className="item">
          <div  className="img"><Image src={"/it/industrialequi.jpg"} width={1000} height={1000}/>
</div>            <div className="content">
              <div className="title text-white">Industrial Equipment Related Service</div>
              
          </div>
          </div>
          <div className="item">
          <div  className="img"><Image src={"/it/web.jpg"}  width={1000} height={1000}/>
          </div>  <div className="content">
              <div className="title text-white">Web Development</div>
              
          </div>
          </div>

        </div>
       {/* awrows */}
        <div className="arrows z-10">
          <Button id="prev" >←</Button>
          <Button id="next" >→</Button>
        </div>
        <div className="time"></div>
      </div>
     
    </div>
  );
};

export default It;
