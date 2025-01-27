"use client"

// import { useState } from "react"
import { Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { useCartStore } from "@/store/store"
import Image from "next/image"

// interface CartItem {
//   id: number
//   name: string
//   variant: string
//   price: number
//   image: string
//   quantity: number
// }

export default function ShoppingCart() {
  // const [cartItems, setCartItems] = useState<CartItem[]>([
  //   {
  //     id: 1,
  //     name: "Apple Watch Series 7 - 44mm",
  //     variant: "Golden",
  //     price: 259.0,
  //     image: "/placeholder.svg",
  //     quantity: 1,
  //   },
  //   {
  //     id: 2,
  //     name: "Beylob 90 Speaker",
  //     variant: "Space Gray",
  //     price: 99.0,
  //     image: "/placeholder.svg",
  //     quantity: 1,
  //   },
  //   {
  //     id: 3,
  //     name: "Beoplay M5 Bluetooth Speaker",
  //     variant: "Silver Collection",
  //     price: 129.0,
  //     image: "/placeholder.svg",
  //     quantity: 1,
  //   },
  //   {
  //     id: 4,
  //     name: "Apple Watch Series 7 - 44mm",
  //     variant: "Golden",
  //     price: 379.0,
  //     image: "/placeholder.svg",
  //     quantity: 1,
  //   },
  // ])
  const {cartArray, handleRemoveFromCart} = useCartStore()
  const prices = cartArray.map((item)=> item.price)
  const total = prices.reduce((prev, curr)=> prev + curr, 0)
  // const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  // const tax = 0
  // const shipping = 10
  // const total = subtotal + tax + shipping

  // const removeItem = (id: number) => {
  //   setCartItems(cartItems.filter((item) => item.id !== id))
  // }

  // const updateQuantity = (id: number, quantity: number) => {
  //   setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  // }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>
        <span className="text-gray-500">{cartArray.length} Items in cart</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="border-blue-600/20">
            <CardContent className="divide-y p-6">
              {cartArray.map((cartItem) => (
                <div key={cartItem.id} className="py-6 first:pt-0 last:pb-0">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                      <Image
                        src={cartItem.image || "/placeholder.svg"}
                        alt={cartItem.title}
                        className="w-full h-full object-cover"
                        width={500}
                        height={300}
                      />
                    </div>
                    <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <h3 className="font-medium text-gray-900">{cartItem.title}</h3>
                        {/* <p className="text-gray-500">{item.variant}</p> */}
                      </div>
                      <div className="flex items-center gap-4">
                        <Select
                          value={cartItem.price.toString()}
                          // onValueChange={(value) => updateQuantity(cartItem.id, Number.parseInt(value))}
                        >
                          <SelectTrigger className="w-20">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <span className="font-medium text-lg">${cartItem.price.toFixed(2)}</span>
                        <button
                          onClick={() => handleRemoveFromCart(cartItem.id)}
                          className="text-gray-400 hover:text-gray-500 transition-colors"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="border-blue-600/20">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax</span>
                  {/* <span className="font-medium">${tax.toFixed(2)}</span> */}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  {/* <span className="font-medium">${shipping.toFixed(2)}</span> */}
                </div>
                <div className="h-px bg-gray-200" />
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  {/* <span>${total.toFixed(2)}</span> */}
                </div>
                <div className="space-y-3 pt-4">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Confirm payment</Button>
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Continue Shopping
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}


