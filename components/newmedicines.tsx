import React from 'react'
import { MedicineCard } from './medicinecard'

export default function NewMedicines() {
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
            <MedicineCard medicineImage="/M1.png" medicineTitle="Surgical Gloves" medicinePrice={3.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
            <MedicineCard medicineImage="/M2.png" medicineTitle="Microscope" medicinePrice={30.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
            <MedicineCard medicineImage="/M3.png" medicineTitle="R.V Stethoscope" medicinePrice={35.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
            <MedicineCard medicineImage="/M4.png" medicineTitle="Surgical Gloves" medicinePrice={12.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
            <MedicineCard medicineImage="/M5.png" medicineTitle="Surgical Gloves" medicinePrice={13.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
            <MedicineCard medicineImage="/M6.png" medicineTitle="Surgical Gloves" medicinePrice={8.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
            <MedicineCard medicineImage="/M7.png" medicineTitle="Surgical Gloves" medicinePrice={10.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
            <MedicineCard medicineImage="/M8.png" medicineTitle="Surgical Gloves" medicinePrice={10.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
            <MedicineCard medicineImage="/M9.png" medicineTitle="Surgical Gloves" medicinePrice={10.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
            <MedicineCard medicineImage="/M10.png" medicineTitle="Surgical Gloves" medicinePrice={10.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
            <MedicineCard medicineImage="/M11.png" medicineTitle="Surgical Gloves" medicinePrice={10.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
            <MedicineCard medicineImage="/M12.png" medicineTitle="Surgical Gloves" medicinePrice={10.00} medicineDescription="Paracetamol is a widely used over-the-counter medicine for relieving pain and reducing fever. It is commonly used to treat headaches, muscle aches, back pain, toothaches, and cold symptoms"/>
        </div>
    </div>
  )
}
