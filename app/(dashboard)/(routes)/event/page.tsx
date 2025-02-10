"use client";

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Facebook, Instagram, Linkedin, ArrowLeft, MapPinned } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const EventDetail = () => {
  return (
    <div className="min-h-screen fill bg-background mt-16">
      <div className="grid md:grid-cols-2 mt-16">
        {/* Left Section */}
        <div className="relative min-h-[600px]">
          {/* Back Button */}
          <div className="absolute top-6 left-6 z-10">
            <Link href={"/"}>
            <Button variant="secondary" size="sm" className="gap-2 bg-purple-600 text-white">
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            </Link>
          </div>
          
          {/* Image and Content Overlay */}
          <div className="relative h-full">
            <Image
              src="/images/image_1.png"
              alt="Event Cover"
              fill
              className="object-cover brightness-75"
            />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h1 className="text-3xl font-bold mb-4">
                Best Seller Book Bootcamp - write, Market & Publish Your Book -Lucknow
              </h1>
              <div className="flex items-center top-6 left-6 gap-2 mb-4">
                <MapPinned />
                <span>SM City Iloilo</span>
              </div>
              <Button variant="secondary" className="bg-green-500 hover:bg-green-600 text-white">
                I'm interested
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="p-8">
          <Card className="p-6 space-y-8">
            <section>
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Start Date/Time:</span>
                  <span className="text-blue-600">October 4, 2025 | 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">End Date/Time:</span>
                  <span className="text-blue-600">October 4, 2025 | 5:00 PM</span>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold mb-4">Event Location</h2>
              {/* Google Maps iframe */}
              <div className="w-full h-[200px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1000!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM3nCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjkiVw!5e0!3m2!1sen!2sus!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </section>

            <section>
              <h2 className="text-base font-medium mb-4 text-center">Share With Friends</h2>
              <div className="flex gap-4 justify-center items-center">
                <Link href="#" className="text-blue-600 hover:text-blue-700">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-pink-600 hover:text-pink-700">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" className="text-blue-500 hover:text-blue-600">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </section>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default EventDetail;