"use client";

// import { useState } from "react";
import DestinationForm from "../app/components/DestinationForm";
// import ItineraryDisplay from "@/components/ItineraryDisplay";

export default function Home() {
  // const [itinerary, setItinerary] = useState<any[]>([]);

  // const handleGenerateItinerary = async (destination: string, days: number, preferences: string[]) => {
  //   // Mock API Call - Replace this with actual API integration
  //   const generatedItinerary = Array.from({ length: days }, (_, i) => ({
  //     day: i + 1,
  //     activities: [`Explore ${destination} - Activity ${i + 1}`],
  //   }));

  //   setItinerary(generatedItinerary);
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* <h1 className="text-3xl font-bold mb-6 text-center">AI-Powered Travel Itinerary Planner</h1> */}
      <DestinationForm />
    </div>
  );
}
