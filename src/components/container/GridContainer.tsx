"use client"
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Icon } from '@iconify/react';


// import required modules
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// @ts-ignore
import SwiperCore, { Navigation, Pagination,Grid } from "swiper";
import Card from "../card/Card";
import EpisodeCard from "../card/EpisodeCard";
import { GridBreakPoints } from "../../../utils/Vars";
import { GridContainerProps } from "../../../types/types";

SwiperCore.use([Navigation]);



export default function GridContainer({data,heading,swiperId}:GridContainerProps) {
  const swiper = useSwiper();
  const currentSwiper = useRef(null);
  return (
    <div className="home_container m-3">
     <div className=" w-full flex justify-between items-center mt-5">
    <span
          className={` px-2 flex  $ font-semibold items-end  text-2xl`}
        >
          
          {/* {heading} */}
        </span>
       
        
        <div className="flex items-center gap-[2px] mx-1 p-2.5">
          <button
            className="   text-white hover:text-neutral-400 "
            id={`swiper-back-${swiperId}`}
          >
            
            <Icon icon="mingcute:left-fill" width={24} />

          </button>
          <button
            className="   hover:text-neutral-400 text-white   "
            id={`swiper-forward-${swiperId}`}
          >
            <Icon icon="mingcute:right-fill" width={24} />


          </button>
        </div>
      </div>
      <Swiper
        ref={currentSwiper}
        speed={600}
        

         
        breakpoints={GridBreakPoints}
        slidesPerGroupSkip={1}
        grid={{
          rows: 2,
          fill:"row"
        }}
        navigation={{
          nextEl: `#swiper-forward-${swiperId}`,
          prevEl: `#swiper-back-${swiperId}`,
        }}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Grid,Navigation]}
        className="mySwiper w-full"
      >
        
          {data?.map((item:any, index:any) => (
                <SwiperSlide key={index}>
                  <div
                    
                  >
                    {
                    heading === "Popular" ? 
                    
                    <Card
                      {...item}
                    //   selected={handleSelected}
                      heading={heading}
                    />
                    :
                    <EpisodeCard
                    {...item}
                  //   selected={handleSelected}
                    heading={heading}
                  />
                  }
                  </div>
                </SwiperSlide>
              ))}
           
     
      </Swiper>
    </div>
  );
}
