// import React, { useState } from 'react'
"use client"
import { NavigationMenuDemo } from './dropdownlink'
import { CircleUserRound, Menu, Search, ShoppingBag, X } from 'lucide-react'
import Image from 'next/image'
import { Button } from './ui/button'
import { useState } from 'react'

export default function NavigationBar() {
    const [showMenu, setShowMenu] = useState(false)
    function handleShowMenu(){
        setShowMenu(!showMenu)
        console.log(showMenu)
    }
  return (
    <div>
        <nav className='bg-slate-50/80 flex flex-col justify-between md:flex-row px-2  md:px-4 py-2' >
            {/* Left */}
            <div className="hidden md:flex gap-x-2 items-center justify-between">
                <div className="">
                    <a href="#" className='text-gray-900 text-sm'>Home</a>
                </div>
                <div className="">
                    <NavigationMenuDemo/>
                </div>
                <div className="">
                    <a href="#" className='text-gray-900 text-sm'>About</a>
                </div>
                <div className="">
                    <NavigationMenuDemo/>
                </div>
                <div className='text-gray-900 text-sm'>
                    <a href="#">Contact</a>
                </div>
            </div>
            {/* Middle */}
            <div className="flex items-center justify-between">
                {/* Close Menu */}
                {
                    showMenu?(
                        <div className="">
                            <Button onClick={()=>handleShowMenu} variant="destructive">
                                <X />
                            </Button>
                        </div>
                    ):(
                    <div className="block md:hidden">
                        <Button onClick={()=>handleShowMenu} variant="outline">
                            <Menu />
                        </Button>
                    </div>
                    )
                }
                
                <div className=" md:w-full h-16">
                    <Image src="/Logo.png" className='w-full h-full block object-contain bg-transparent' width={500} height={300} alt="" />
                </div>
            </div>
            {/* Right */}
            <div className="flex justify-between gap-x-2 md:gap-x-4 items-center">
                <div className="border-2 py-2 px-2 border-gray-600 rounded-full focus:text-teal-600 flex justify-between
                ">
                    <input type="search" className='bg-transparent focus:outline-none w-[90%] placeholder: placeholder-gray-800' name="" id="" />
                    <Search className='w-[10%]'/>
                </div>
                <div className="relative hover:border-2 border-gray-900 w-10 h-10 rounded-full flex items-center justify-center">
                    <ShoppingBag />
                    <div className="bg-slate-50 w-4 h-4 flex items-center justify-center rounded-full absolute -top-1 -right-1">0</div>
                </div>
                <div className="">
                    <CircleUserRound />
                </div>
            </div>
            {
                showMenu && (
            <div className="border-2 bg-red-400 rounded-md my-2 border-slate-800 flex flex-col gap-x-2 items-center justify-center">
            <div className="">
                <a href="#" className='text-gray-900 text-sm'>Home</a>
            </div>
            <div className="">
                <NavigationMenuDemo/>
            </div>
            <div className="">
                <a href="#" className='text-gray-900 text-sm'>About</a>
            </div>
            <div className="">
                <NavigationMenuDemo/>
            </div>
            <div className='text-gray-900 text-sm'>
                <a href="#">Contact</a>
            </div>
        </div>
                )
            }
        </nav> 
    </div>
  )
}
