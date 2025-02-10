"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const LandingPage = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("/api/events");
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
        } else {
          console.error("Failed to fetch events");
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="bg-white">
      {/* Header */}
      <header className="flex justify-between items-center bg-purple-600 p-4 text-white">
        <h1 className="text-2xl font-bold">ILOVATION</h1>
        <div className="flex gap-4">
          <Link href="/sign-in">
            <Button className="bg-white text-purple-600 hover:bg-gray-200">Sign In</Button>
          </Link>
          <Link href="/sign-up">
            <Button className="bg-gray-200 text-purple-600 hover:bg-white">Sign Up</Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[500px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50 rounded-2xl" style={{ backgroundImage: "url(/images/landingPhoto.png)" }}></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold">ILOVATION</h1>
          <p className="text-lg mt-2">Event Management</p>
          <Button onClick={() => window.location.href = "/book"} className="bg-purple-600 px-6 py-3 mt-4 rounded-lg">
            Book Events
          </Button>
        </div>
      </section>

      {/* Popular Events Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto w-full max-w-6xl py-8 px-4">
          <h2 className="text-3xl font-bold mb-8">Popular Events <span className="text-purple-600">Near You:</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.length > 0 ? (
              events.map((event) => (
                <Card key={event.id} className="shadow-md hover:shadow-xl transition-all">
                  <CardContent className="p-1">
                    <img src={event.image_url || "/images/default_event.jpg"} alt={event.title} className="w-full h-48 object-cover" />
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-gray-900">{event.title}</h3>
                      <p className="text-gray-600">{event.location}</p>
                      <p className="text-gray-500">{new Date(event.start_datetime).toLocaleDateString()}</p>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <p className="text-center text-gray-400">No events available</p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
