"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function CreateEventPage() {
  const [formData, setFormData] = useState({
    title: "",
    email: "",
    event_type: "",
    start_datetime: "",
    end_datetime: "",
    location: "",
    description: "",
    image_url: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const formDataUpload = new FormData();
    formDataUpload.append("file", formData.image);
  
    try {
      // Upload the image first
      const uploadResponse = await fetch("/api/upload", {
        method: "POST",
        body: formDataUpload,
      });
  
      const uploadResult = await uploadResponse.json();
      if (!uploadResponse.ok) {
        alert("Image upload failed: " + uploadResult.error);
        return;
      }
  
      // Then, save the event with the correct image URL
      const response = await fetch("/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          email: formData.email,
          event_type: formData.event_type,
          start_datetime: formData.start_datetime,
          end_datetime: formData.end_datetime,
          location: formData.location,
          description: formData.description,
          image_url: uploadResult.filePath,  // Store correct file path
        }),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert("Event created successfully!");
      } else {
        alert("Error: " + result.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };
  

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-2xl space-y-8 mt-16">
        <Card>
          <CardContent className="pt-6">
            <form onSubmit={handleSubmit} className="space-y-8">
              <h1 className="text-2xl font-bold text-center">Create Event</h1>

              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input id="title" name="title" placeholder="Event Title" onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="event_type">Event Type</Label>
                  <Select name="event_type" onChange={handleChange} required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select event type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="conference">Conference</SelectItem>
                      <SelectItem value="workshop">Workshop</SelectItem>
                      <SelectItem value="meetup">Meetup</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="start_datetime">Start Date and Time</Label>
                  <Input id="start_datetime" name="start_datetime" type="datetime-local" onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="end_datetime">End Date and Time</Label>
                  <Input id="end_datetime" name="end_datetime" type="datetime-local" onChange={handleChange} required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location">Event Location</Label>
                  <Input id="location" name="location" placeholder="Enter event location" onChange={handleChange} required />
                </div>

                {/* Image Upload */}
                <div className="space-y-2">
                  <Label htmlFor="image">Event Image</Label>
                  <Input id="image" type="file" accept="image/*" onChange={handleImageChange} required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Event Description</Label>
                <Textarea id="description" name="description" placeholder="Type here..." onChange={handleChange} required />
              </div>

              <Button className="w-full bg-purple-600" type="submit">
                Create Event
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
