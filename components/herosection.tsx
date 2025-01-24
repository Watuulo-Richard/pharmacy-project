import React from 'react'
import { Button } from './ui/button'

export default function HeroSection() {
  return (
    <div className="my-12">
        <div className="bg-[url(/Hero.jpg)] bg-no-repeat bg-cover p-12 relative w-full">
            <div className="flex flex-col justify-start space-y-12">
                <h3 className='text-slate-50 font-bold text-4xl'>Week End Sale!</h3>
                <h5 className='text-slate-50 font-bold text-2xl'>Buy Your Best Healthcare Equipment & Medicines</h5>
                <p className='text-slate-50 font-bold text-xl max-w-3xl'>Ornare arcu lacusac tellus faucibus accumsan. Duisaliquet veldiam sedpretium. Duis sodales maximus risusquis mollis</p>
                <div className="">
                    <Button className='text-slate-800 bg-slate-50 px-8 py-4 hover:text-slate-50 hover:border-2 hover:border-slate-50 font-bold'>SHOP NOW</Button>
                </div>
            </div>
        </div>
    </div>
  )
}
