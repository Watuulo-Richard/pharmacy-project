import React from 'react'
import { MedicineCard } from './medicinecard'

export default function NewMedicines() {
    const pharmacyProducts = [
        {
          medicineId:1,
          medicineImage: "/M1.png", 
          medicineTitle: "Surgical Gloves", 
          medicinePrice: 3.00, 
          medicineDescription: "Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:2,
          medicineImage:"/M2.png",
          medicineTitle:"Microscope",
          medicinePrice:30,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:3,
          medicineImage:"/M3.png",
          medicineTitle:"R.V Stethoscope",
          medicinePrice:35,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:4,
          medicineImage:"/M4.png",
          medicineTitle:"Surgical Gloves",
          medicinePrice:12,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:5,
          medicineImage:"/M5.png",
          medicineTitle:"Surgical Gloves",
          medicinePrice:13,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:6,
          medicineImage:"/M6.png",
          medicineTitle:"Surgical Gloves",
          medicinePrice:8,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:7,
          medicineImage:"/M7.png",
          medicineTitle:"Surgical Gloves",
          medicinePrice:10,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:8,
          medicineImage:"/M8.png",
          medicineTitle:"Surgical Gloves",
          medicinePrice:10,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:9,
          medicineImage:"/M9.png",
          medicineTitle:"Surgical Gloves",
          medicinePrice:10,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:10,
          medicineImage:"/M10.png",
          medicineTitle:"Surgical Gloves",
          medicinePrice:10,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:11,
          medicineImage:"/M11.png",
          medicineTitle:"Surgical Gloves",
          medicinePrice:10,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:12,
          medicineImage:"/M4.png",
          medicineTitle:"Surgical Gloves",
          medicinePrice:12,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
        {
          medicineId:13,
          medicineImage:"/M12.png",
          medicineTitle:"Surgical Gloves",
          medicinePrice:10,
          medicineDescription:"Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"
        },
      ]
  return (
    <div>
        <div className="flex justify-center items-center my-12">
            <h3 className='text-4xl text-center text-blue-600 font-bold transition-all duration-75 ease-in-out hover:border-b-2 border-blue-600'>New Arrival Medicines</h3>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-6">
            <div className="">
                <a href="#" className='capitalize'>VITAMIN TABLETS</a>
            </div>
            <div className="">
                <a href="#" className='capitalize'>SYRUP</a>
            </div>
            <div className="">
                <a href="#" className='capitalize'>FEVER TABLETS</a>
            </div>
            <div className="">
                <a href="#" className='capitalize'>EQUIPMENTS</a>
            </div>
        </div>
        {/* Grid Container */}
        <div className="container mx-auto px-12 grid gap-4 grid-cols-1 md:grid-cols-4">
            {
                pharmacyProducts.map((product, i)=>{
                    return <MedicineCard key={i} productData={product} />
                })
            }
            
        </div>
    </div>
  )
}
