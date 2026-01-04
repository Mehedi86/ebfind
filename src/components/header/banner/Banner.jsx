"use client"

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Banner() {
  return (
    <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 my-4 sm:my-8 md:my-12 lg:my-16 mx-auto overflow-hidden h-46 md:h-75 lg:h-100">
      <Carousel 
        className="w-full h-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="ml-0 h-full">
          <CarouselItem className="pl-0 basis-full h-full">
            <img 
              src="/image/banner/banner1.jpg" 
              alt="Banner 1" 
              className="w-full h-full object-cover"
            />
          </CarouselItem>
          
          <CarouselItem className="pl-0 basis-full h-full">
            <img 
              src="/image/banner/banner2.jpg" 
              alt="Banner 2" 
              className="w-full h-full object-cover"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:left-4 z-20 bg-white/80 hover:bg-white text-gray-800 border-0 h-8 w-8 sm:h-10 sm:w-10" />
        <CarouselNext className="right-2 sm:right-4 z-20 bg-white/80 hover:bg-white text-gray-800 border-0 h-8 w-8 sm:h-10 sm:w-10" />
      </Carousel>
    </div>
  )
}
