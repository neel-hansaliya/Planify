"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { IoArrowBack } from "react-icons/io5";
import { IoStar } from "react-icons/io5";
import { jsPDF } from "jspdf";

export default function Destination() {
  const searchParams = useSearchParams();
  const country = searchParams.get("country") || "";
  const [places, setPlaces] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (country) {
      setLoading(true);
      fetch(`http://127.0.0.1:8000/search?destination=${country}`)
        .then((res) => res.json())
        .then((data) => {
          setPlaces(data.places || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
  }, [country]);

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <IoStar
          key={i}
          className={`text-yellow-400 ${
            i < rating ? "text-yellow-500" : "text-gray-300"
          }`}
        />
      );
    }
    return <div className="flex space-x-1">{stars}</div>;
  };

  const generateItinerary = () => {
    setLoading(true);
    const generatedItinerary: string[] = [];
    places.forEach((place, index) => {
      generatedItinerary.push(`Day ${index + 1}: Visit ${place.name}`);
      generatedItinerary.push(`- Duration: ${place.duration}`);
      generatedItinerary.push(`- Location: ${place.location}`);
      generatedItinerary.push(`- Description: ${place.description}\n`);
    });
    setLoading(false);

    // Create the PDF document using jsPDF
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.width;
    const pageHeight = doc.internal.pageSize.height;

    // Title (Itinerary for Italy) - Centered
    doc.setFontSize(22);
    doc.text(`Itinerary for ${country}`, pageWidth / 2, 20, {
      align: "center",
    });

    // Add a line separator after the title
    doc.setLineWidth(0.5);
    doc.line(10, 25, pageWidth - 10, 25); // Line from left to right (page margin)

    // Set font size for the itinerary content
    doc.setFontSize(12);

    let yPosition = 40; // Start below the title and line
    generatedItinerary.forEach((line, index) => {
      if (yPosition > pageHeight - 20) {
        // Check if the content exceeds the page length
        doc.addPage(); // Create a new page
        yPosition = 20; // Reset Y position for the new page
      }
      doc.text(line, 10, yPosition);
      yPosition += 10; // Add spacing between lines
    });

    // Save the generated PDF
    doc.save(`${country}_Itinerary.pdf`);
  };

  return (
    <div className="p-8">
      <div className="flex mb-6">
        <button
          className="px-2 py-2 mr-2 text-gray-500 hover:text-black cursor-pointer text-black rounded-lg"
          onClick={() => router.push("/")}
        >
          <IoArrowBack className="text-2xl" />
        </button>
        <h1 className="text-2xl mt-1 font-bold text-gray-800">
          Famous Places in {country}
        </h1>
        <h1
          className="ml-auto bg-white hover:bg-gray-200 shadow shadow-xl text-black cursor-pointer px-4 py-2 rounded-md font-bold"
          onClick={generateItinerary}
        >
          Generate Itinerary
        </h1>
      </div>

      {loading ? (
        <p className="text-black mt-5">Loading places...</p>
      ) : places.length === 0 ? (
        <p>No places found for {country}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {places.map((place) => (
            <div
              key={place.name}
              className="relative overflow-hidden rounded-2xl shadow-lg bg-white flex flex-col"
            >
              <div className="relative w-full h-72">
                <Image
                  src={place.image}
                  alt={place.name}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                  unoptimized={true}
                />
                <div className="absolute top-4 right-4 bg-white text-white px-4 py-2 rounded-full">
                  <span className="text-xs">{renderStars(place.rating)}</span>
                </div>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {place.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {place.description}
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-500">
                    Duration: {place.duration}
                  </span>
                  <span className="text-sm text-gray-500">
                    Location: {place.location}
                  </span>
                </div>

                {/* <div className="flex justify-between items-center mt-auto">
                  <p className="text-xl font-semibold text-blue-800">{place.price}</p>
                  <button className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700">
                    Book Now
                  </button>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
