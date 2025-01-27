import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import ImageOB from '@/public/4.jpg'
import ImageOBZero from '@/public/Artboard0.png'
import ImageOBOne from '@/public/Artboard1.png'
import ImageOBTwo from '@/public/Artboard2.png'
import ImageOBThree from '@/public/Artboard3.png'

export default function HeroSectionTwo() {
  return (
    <div className='container mx-auto px-12 flex items-center justify-between'>
        <div className="w-1/2 space-y-6">
            <h3 className='text-4xl text-blue-600'>
                Excellent Medical Professionals With Significant Experience
            </h3>
            <h5 className='text-lg text-gray-600 font-semibold'>
                Tristique senectus et netus et malesuada fames ac turpis. Turpis massa tincidunt dui ut ornare lectus sit amet. Viverra orci sagittis eu volutpat odio facilisis mauris sit amet. Imperdiet proin fermentum leo vel orci porta non pulvinar.
            </h5>
            
            <div className="flex gap-x-2">
                <div className="flex gap-x-2">
                    <div className="">
                        <Image src={ImageOBZero} alt="" />
                    </div>
                    <div className="">
                        <p className='text-blue-600 text-2xl font-bold'>200K +</p>
                        <p className='text-sm font-semibold text-gray-600'>Happy Clients</p>
                    </div>
                </div>
                <div className="flex gap-x-2">
                    <div className="">
                        <Image src={ImageOBTwo} alt="" />
                    </div>
                    <div className="">
                        <p className='text-blue-600 text-2xl font-bold'>50K +</p>
                        <p className='text-sm font-semibold text-gray-600'>Orders Delivered</p>
                    </div>
                </div>
                <div className="flex gap-x-2">
                    <div className="">
                        <Image src={ImageOBOne} alt="" />
                    </div>
                    <div className="">
                        <p className='text-blue-600 text-2xl font-bold'>80 +</p>
                        <p className='text-sm font-semibold text-gray-600'>Area Served</p>
                    </div>
                </div>
                <div className="flex gap-x-2">
                    <div className="">
                        <Image src={ImageOBThree} alt="" />
                    </div>
                    <div className="">
                        <p className='text-blue-600 text-2xl font-bold'>5 L</p>
                        <p className='text-sm font-semibold text-gray-600'>Medicines</p>
                    </div>
                </div>
            </div>
            <Button className='bg-blue-600 text-slate-50 font-bold text-xl rounded-md uppercase px-16 py-8'>Book Now</Button>
        </div>
        <div className="w-1/2 rounded-md overflow-hidden shadow-2xl relative">
            <Image src={ImageOB} className='w-full h-full object-cover block' alt="" />
            <div className="absolute bottom-0 min-h-16 w-full bg-gradient-to-t from-blue-400/30 via-blue-300/30 via-blue-200/60 ..."></div>
        </div>
    </div>
  )
}
