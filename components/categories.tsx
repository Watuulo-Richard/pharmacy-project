import React from 'react'
import CategoryCard from './categorycard'

export default function Categories() {
  return (
    <div className='container mx-auto px-12'>
        <div className="flex justify-center items-center my-12">
            <h3 className='text-4xl text-center text-blue-600 font-bold transition-all duration-75 ease-in-out hover:border-b-2 border-blue-600'>Shop Our Categories</h3>
        </div>
        <div className=" grid gap-4 grid-cols-1 md:grid-cols-4">
            <CategoryCard title= "Ointments" image = "/X1.jpg"/>
            <CategoryCard title= "Fitness Tablets" image = "/X2.jpg"/>
            <CategoryCard title= "Vitamin Capsules" image = "/X3.jpg"/>
            <CategoryCard title= "Pain Balms" image = "/X4.jpg"/>
            <CategoryCard title= "Itching Gel" image = "/X4.jpg"/>
            <CategoryCard title= "BP Monitors" image = "/X4.jpg"/>
        </div>
    </div>
  )
}
