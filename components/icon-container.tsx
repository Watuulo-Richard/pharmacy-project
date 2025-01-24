import React from 'react'

export default function IconContainer({icon}:{icon:React.ReactNode}) {
  return (
    <div className='bg-slate-50 w-8 h-8 rounded-full flex items-center justify-center text-gray-800'>
     {icon}
    </div>
  )
}
