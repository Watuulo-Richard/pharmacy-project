"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter signup
    console.log("Signing up with email:", email)
    setEmail("")
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="container mx-auto px-12">
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          {/* Newsletter Signup */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-blue-600">Sign Up For Newsletter</h2>
            <p className="text-gray-600 text-lg">
              Join 60,000+ Subscribers and get a new discount coupon every saturday
            </p>
            <form onSubmit={handleSubmit} className="flex gap-4 max-w-xl">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-full bg-white"
                required
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8">
                SUBSCRIBE
              </Button>
            </form>
          </div>

          {/* App Download */}
          <div className="text-center lg:text-right">
            <h3 className="text-2xl font-bold mb-6">Download the app now!</h3>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-end">
              <a
                href="#"
                className="inline-block transition-transform hover:scale-105"
                aria-label="Get it on Google Play"
              >
                <Image src="/google.png?height=60&width=150" alt="Google Play Store" className="h-[40px] w-auto"  width={500} height={300} />
              </a>
              <a
                href="#"
                className="inline-block transition-transform hover:scale-105"
                aria-label="Download on the App Store"
              >
                <Image  src="/apple.png?height=60&width=150" alt="Apple App Store" className="h-[40px] w-auto" width={500} height={300}/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

