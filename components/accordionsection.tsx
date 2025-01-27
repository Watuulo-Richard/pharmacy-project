import Image from 'next/image'
import React from 'react'
import PatientImage from '@/public/P1.jpg'
import FAQAccordion from './accordion'

export default function AccordionSection() {
  return (
    <div className='container mx-auto px-12 flex gap-x-4 items-center justify-between my-12'>
        <div className="w-1/2 rounded-md overflow-hidden">
            <Image src={PatientImage} className='w-full h-full block object-cover' width={500} height={300} alt="" />
        </div>
        <div className="w-1/2">
            <FAQAccordion/>
        </div>
    </div>
  )
}
