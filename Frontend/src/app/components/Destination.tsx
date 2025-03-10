"use client";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5"; // For navigation

export default function Destination() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") || "";
  const [places, setPlaces] = useState<{ name: string; image: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter(); // Hook for navigation

  useEffect(() => {
    if (country) {
      fetch(`http://127.0.0.1:8000/search?destination=${country}`)
        .then((res) => res.json())
        .then((data) => {
          setPlaces(data.places || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [country]);

  return (
    <div className="p-8">
      {/* Back Button */}

      <div className="flex-1">
        <div className="flex">
          <button
            className="px-1 py-1 mr-2 text-gray-500 hover:text-black cursor-pointer text-black rounded-lg"
            onClick={() => router.push("/")}
          >
            <IoArrowBack className="text-2xl" />
          </button>
          <h1 className="text-2xl mt-1 font-bold text-gray-800">
            Famous Places in {country}
          </h1>
          <h1 className="text-black font-bold ml-240 bg-gray-300 hover:bg-gray-400 hover:text-white cursor-pointer px-4 py-2 rounded-md">
            Generate Itinerary
          </h1>
        </div>
        {loading ? (
          <p className="text-black mt-5">Loading...</p>
        ) : places.length === 0 ? (
          <p>No places found for {country}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
            {places.map((place) => (
              <div
                key={place.name}
                className="bg-gray-100 p-4 rounded-lg shadow"
              >
                <h3 className="text-lg text-black mb-1 font-bold">
                  {place.name}
                </h3>
                <Image
                  src={place.image}
                  alt={place.name}
                  width={500}
                  height={200}
                  className="rounded object-cover"
                  unoptimized={true}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
