import React from 'react'
import IconContainer from './icon-container'
import {Facebook, Instagram, Mail, MapPin, Twitter, Youtube} from 'lucide-react'
export default function Header() {
  
  return (
    <div>
        <nav className='bg-blue-600 flex flex-col md:flex-row justify-between px-4 py-2'>
            {/* Social-Links */}
            <div className="flex gap-x-4 justify-start md:gap-x-2">
              <IconContainer icon={<Facebook size={16}/>}/>
              <IconContainer icon={<Twitter size={16}/>}/>
              <IconContainer icon={<Instagram size={16}/>}/>
              <IconContainer icon={<Youtube size={16}/>}/>
            </div>
            {/*  */}
            <div className="flex flex-col items-start md:flex-row md:justify-between  gap-x-4">
              {/* Left */}
              <div className="flex gap-x-2 items-center my-2 md:my-0">
                <div className="text-slate-50">
                  <MapPin />
                </div>
                <div className="">
                  <p className='text-slate-50 text-xs md:text-sm'>No: 58 A, East Madison Street, Baltimore, MD, USA 4508</p>
                </div>
              </div>
              {/* Right */}
              <div className="flex gap-x-2 items-center text-left">
                <Mail className='text-slate-50' />
                <p className='text-slate-50 text-xs md:text-sm'>info@example.com</p>
              </div>
            </div>
        </nav>
    </div>
  )
}
