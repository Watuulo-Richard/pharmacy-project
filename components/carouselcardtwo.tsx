"use client"
import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"

export function CarouselSize() {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
    const carouselItems = [
        {
            image: "/Group_133510_2x_6b1258a2-7934-4174-8532-d6d52664387c.png",
            title: "Medicines",
            paragraph: "Phasellus Lobortis",
        },
        {
            image: "/Group_133510_2x_6b1258a2-7934-4174-8532-d6d52664387c.png",
            title: "Medicines",
            paragraph: "Phasellus Lobortis",
        },
        {
            image: "/Group_133510_2x_6b1258a2-7934-4174-8532-d6d52664387c.png",
            title: "Medicines",
            paragraph: "Phasellus Lobortis",
        },
        {
            image: "/Group_133510_2x_6b1258a2-7934-4174-8532-d6d52664387c.png",
            title: "Medicines",
            paragraph: "Phasellus Lobortis",
        },
        {
            image: "/Group_133510_2x_6b1258a2-7934-4174-8532-d6d52664387c.png",
            title: "Medicines",
            paragraph: "Phasellus Lobortis",
        },
        {
            image: "/Group_133510_2x_6b1258a2-7934-4174-8532-d6d52664387c.png",
            title: "Medicines",
            paragraph: "Phasellus Lobortis",
        },
    ]
  return (
    <div className="flex justify-center mx-12">
        <Carousel
        plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      className=" w-full max-w-none md:max-w-6xl"
    >
      <CarouselContent>
        {carouselItems.map((item, index) => (
          <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/4">
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <div className="">
                    <div className="flex flex-col justify-center items-center md:flex-row md:justify-between gap-4">
                        <div className="w-12 h-12 rounded-full bg-indigo-700 ">
                            <Image className="w-full h-full object-contain block object-center bg-center" src={item.image} width={500} height={300} alt=""/>
                        </div>
                        <div className="text-center">                          
                            <h5>{item.title}</h5>
                            <p>{item.paragraph}</p>
                        </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="hidden md:block">
        <CarouselPrevious />
        <CarouselNext />
      </div>
    </Carousel>
    </div>
  )
}
