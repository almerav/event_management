"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [events, setEvents] = useState([]);
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const loggedUser = JSON.parse(localStorage.getItem("user") || "null");
    if (!loggedUser) {
      router.push("/sign-in");
    } else {
      setUser(loggedUser);
    }
  }, []);

  // Fetch events from database
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

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  return (
    <div className="bg-white">
      {/* Header (Updated for Dashboard) */}
      <header className="flex justify-between items-center bg-purple-600 p-4 text-white shadow-md">
        <h1 className="text-2xl font-bold">ILOVATION</h1>
        <div className="flex items-center gap-4">
          {user && (
            <div className="flex items-center gap-2">
              <img
                src="/images/user-icon.png"
                alt="User Profile"
                className="w-10 h-10 rounded-full border-2 border-white"
              />
              <span className="font-medium">{user.email}</span>
              <Button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4">
                Logout
              </Button>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex items-center justify-center h-[500px] bg-black overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-50 rounded-2xl" style={{ backgroundImage: "url(/images/landingPhoto.png)" }}></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold">ILOVATION</h1>
          <p className="text-lg mt-2">Event Management</p>
          <Link href="/book">
            <Button className="bg-purple-600 px-6 py-3 mt-4 rounded-lg">Book Events</Button>
          </Link>
        </div>
      </section>

      {/* Popular Events Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto w-full max-w-6xl py-8 px-4">
          <h2 className="text-3xl font-bold mb-8">Your Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.length > 0 ? (
              events.map((event) => (
                <Card key={event.id} className="shadow-md hover:shadow-xl transition-all">
                  <CardContent className="p-1">
                    <img
                      src={event.image_url || "/images/default_event.jpg"}
                      alt={event.title}
                      className="w-full h-48 object-cover"
                    />
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

      {/* About Us Section */}
      <section className="py-16 px-10 bg-white text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-8 py-4">
          <div>
            <h2 className="text-3xl font-extrabold text-black">ABOUT US</h2>
            <h3 className="text-5xl text-purple-600 font-extrabold mt-2">ILOVATION</h3>
          </div>
          <p className="mt-4 text-gray-600 max-w-2xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
