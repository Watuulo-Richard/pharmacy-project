import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import Image from 'next/image'

export default function CategoryCard({title, image}:{title:string, image:string}) {
  return (
    <div className=''>
        <Card  className="w-full">
            <CardContent className="grid gap-4 mt-4">
                <div className=" flex items-center justify-center space-x-4 rounded-md border border-blue-600 p-4">
                    <div className="flex justify-center space-y-1 ">
                        <h3 className="text-sm font-bold leading-none">
                            {title}
                        </h3>
                    </div>
                </div>
                <div>
                    <div className="mb-4">
                        <a href="#">
                            <div className="rounded-md overflow-hidden relative">
                                <Image src={image} className='w-full h-full' width={500} height={300} alt="" />
                                <div className="absolute bottom-0 min-h-16 w-full bg-gradient-to-t from-blue-400/60 via-blue-300/60 via-blue-200/60 ...">

                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button className="rounded-md w-full mt-6 bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                    Buy Now
                </Button>
            </CardFooter>
        </Card>
    </div>
  )
}
