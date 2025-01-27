"use client"
import { useCartStore } from "@/store/store";
import { ProductsProps } from "@/types/types";
import Image from "next/image";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";


export function MedicineCard({productData}:{productData:ProductsProps}) {

const {handleAddToCart, handleRemoveFromCart, cartArray} = useCartStore()
const addedItem = cartArray.find((item)=> item.id === productData.medicineId)
const handleAdd = handleAddToCart
function cartFunction(){
    const cartProduct = {
    id: productData.medicineId,
    image: productData.medicineImage,
    title: productData.medicineTitle,
    price: productData.medicinePrice,
  }
  handleAdd(cartProduct)
}

    return (
        <div className="relative flex flex-col my-6 bg-white shadow-xl border border-blue-200 rounded-lg w-full">
        <div className="relative p-2.5 h-60 overflow-hidden rounded-xl bg-clip-border">
          <Image
            src={productData.medicineImage}
            className="h-full w-full object-cover rounded-md"
            width={500}
            height={300}
            alt=""
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <p className="text-slate-800 text-lg font-semibold">
              {productData.medicineTitle}
            </p>
            <p className="text-blue-600 text-sm font-semibold">
                Regular price ${productData.medicinePrice}
            </p>
          </div>
          <p className="text-slate-600 leading-normal font-light">
            {productData.medicineDescription}
          </p>
          {
            addedItem?(<Button onClick={()=>handleRemoveFromCart(productData.medicineId)} className="rounded-md w-full mt-6 bg-red-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-red-700 focus:shadow-none active:bg-red-700 hover:bg-red-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          <Trash2 /> Remove Item Cart
          </Button>):(<Button onClick={()=>cartFunction()} className="rounded-md w-full mt-6 bg-blue-600 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-none active:bg-blue-700 hover:bg-blue-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            Add to Cart
          </Button>)
          }
        </div>
      </div>
    );
  }