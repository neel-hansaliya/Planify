// 'use client';
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// export default function SearchBar() {
//   const [destination, setDestination] = useState("");
//   const [date, setDate] = useState("");
//   const [suggestions, setSuggestions] = useState<string[]>([]);
//   const [allDestinations, setAllDestinations] = useState<string[]>([]);
//   const [guests, setGuests] = useState(1);
//   const [showSuggestions, setShowSuggestions] = useState(false);
//   const [selectedIndex, setSelectedIndex] = useState(-1);

//   const router = useRouter();

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/destinations")
//       .then((res) => res.json())
//       .then((data) => setAllDestinations(data.destinations))
//       .catch((error) => console.error("Error fetching destinations:", error));
//   }, []);

//   useEffect(() => {
//     if (destination.trim()) {
//       const filtered = allDestinations.filter((item) =>
//         item.toLowerCase().includes(destination.toLowerCase())
//       );
//       setSuggestions(filtered);
//       setShowSuggestions(true);
//       setSelectedIndex(-1);
//     } else {
//       setSuggestions([]);
//       setShowSuggestions(false);
//     }
//   }, [destination, allDestinations]);

//   const handleSelect = (selectedDestination: string) => {
//     setDestination(selectedDestination);
//     setShowSuggestions(false);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "ArrowDown") {
//       setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
//     } else if (e.key === "ArrowUp") {
//       setSelectedIndex((prev) => Math.max(prev - 1, 0));
//     } else if (e.key === "Enter") {
//       e.preventDefault(); // ✅ Enter दबाने पर form submit न हो
//       if (selectedIndex >= 0) {
//         handleSelect(suggestions[selectedIndex]);
//       } else if (suggestions.length > 0) {
//         handleSelect(suggestions[0]); // ✅ अगर कोई selectedIndex नहीं तो पहला select कर लो
//       }
//       setShowSuggestions(false); // ✅ Enter दबाते ही suggestions hide होंगे
//     }
//   };

//   const handleSearch = () => {
//     if (destination.trim() && allDestinations.includes(destination)) {
//       router.push(`/destination?country=${destination}`);
//     }
//   };

//   return (
//     <div className="mt-6 bg-white text-black shadow-lg rounded-lg p-4 flex items-center space-x-4 max-w-2xl mx-auto">
//       <div className="relative w-full">
//         <input
//           type="text"
//           placeholder="Where do you want to go?"
//           className="w-full p-2 border rounded"
//           value={destination}
//           onChange={(e) => setDestination(e.target.value)}
//           onFocus={() => setShowSuggestions(true)}
//           onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//           onKeyDown={handleKeyDown}
//         />
//         {/* Suggestions Dropdown */}
//         {showSuggestions && suggestions.length > 0 && (
//           <ul className="absolute left-0 right-0 bg-white border rounded shadow-lg mt-1 z-10">
//             {suggestions.map((item, index) => (
//               <li
//                 key={item}
//                 className={`p-2 cursor-pointer hover:bg-gray-200 ${
//                   index === selectedIndex ? "bg-gray-300" : ""
//                 }`}
//                 onMouseDown={() => handleSelect(item)}
//               >
//                 {item}
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       <input
//         type="date"
//         className="p-2 border rounded"
//         value={date}
//         onChange={(e) => setDate(e.target.value)}
//       />
//       <input
//         type="number"
//         placeholder="Guest"
//         className="p-2 border rounded w-20"
//         value={guests}
//         onChange={(e) => setGuests(Number(e.target.value))}
//         min={1}
//       />
//       <button
//         className="bg-black hover:bg-gray-600 cursor-pointer text-white px-4 py-2 rounded"
//         onClick={handleSearch}
//       >
//         Search
//       </button>
//     </div>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [allDestinations, setAllDestinations] = useState<string[]>([]);
  const [guests, setGuests] = useState(1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [loading, setLoading] = useState(false); // ✅ Loader state

  const router = useRouter();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/destinations")
      .then((res) => res.json())
      .then((data) => setAllDestinations(data.destinations))
      .catch((error) => console.error("Error fetching destinations:", error));
  }, []);

  useEffect(() => {
    if (destination.trim()) {
      const filtered = allDestinations.filter((item) =>
        item.toLowerCase().includes(destination.toLowerCase())
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
      setSelectedIndex(-1);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [destination, allDestinations]);

  const handleSelect = (selectedDestination: string) => {
    setDestination(selectedDestination);
    setShowSuggestions(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setSelectedIndex((prev) => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      setSelectedIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0) {
        handleSelect(suggestions[selectedIndex]);
      } else if (suggestions.length > 0) {
        handleSelect(suggestions[0]);
      }
      setShowSuggestions(false);
    }
  };

  const handleSearch = () => {
    if (destination.trim() && allDestinations.includes(destination)) {
      setLoading(true); // ✅ Start loader
      setTimeout(() => {
        router.push(`/destination?country=${destination}`);
        setLoading(false); // ✅ Stop loader after search
      }, 2000); // Simulating API request delay
    }
  };

  return (
    <div className="mt-6 bg-white text-black shadow-lg rounded-lg p-4 flex items-center space-x-4 max-w-2xl mx-auto">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Where do you want to go?"
          className="w-full p-2 border rounded"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onKeyDown={handleKeyDown}
        />
        {showSuggestions && suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 bg-white border rounded shadow-lg mt-1 z-10">
            {suggestions.map((item, index) => (
              <li
                key={item}
                className={`p-2 cursor-pointer hover:bg-gray-200 ${
                  index === selectedIndex ? "bg-gray-300" : ""
                }`}
                onMouseDown={() => handleSelect(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>
      <input
        type="date"
        className="p-2 border rounded"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      {/* <input
        type="number"
        placeholder="Guest"
        className="p-2 border rounded w-20"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        min={1}
      /> */}
      <button
        className="bg-black hover:bg-gray-600 cursor-pointer text-white px-4 py-2 rounded flex items-center justify-center w-28"
        onClick={handleSearch}
        disabled={loading} // ✅ Disable button while loading
      >
        {loading ? (
          <div className="w-5 h-5 border-2 cursor-pointer border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          "Search"
        )}
      </button>
    </div>
  );
}
