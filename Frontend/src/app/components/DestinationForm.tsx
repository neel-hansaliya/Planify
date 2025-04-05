// "use client";
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import { useState, useEffect } from "react";
// import SearchBar from "../components/SearchBar";
// import img from "../assets/logo.png";
// import lotus from "../assets/lotus temple.jpg";
// import Beach from "../assets/beach.jpg";
// import Desert from "../assets/desert.jpg";
// import Mountain from "../assets/mountain.jpg";
// import Temple from "../assets/temple.jpg";

// export default function Home() {
//   const router = useRouter();
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [loading, setLoading] = useState(false); // Loader state

//   useEffect(() => {
//     const authStatus = localStorage.getItem("isAuthenticated");
//     if (authStatus === "true") {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   const handleSignup = () => {
//     setLoading(true);
//     setTimeout(() => {
//       // Simulate API call delay
//       router.push("/signup");
//       setLoading(false);
//     }, 1500);
//   };

//   const handleLogout = () => {
//     setLoading(true);
//     setTimeout(() => {
//       // Simulate API call delay
//       localStorage.setItem("isAuthenticated", "false");
//       setIsAuthenticated(false);
//       router.push("/login");
//       setLoading(false);
//     }, 1500);
//   };

//   return (
//     <div className="min-h-screen bg-white font-sans">
//       {/* Header */}
//       <header className="flex justify-between items-center p-2 bg-white shadow-md">
//         {/* Logo */}
//         <Image src={img} alt="Logo" width={80} height={60} className="ml-2" />

//         {/* Navigation & Buttons */}
//         <div className="flex items-center space-x-6">
//           <nav className="flex text-md space-x-6">
//             <a href="#" className="text-gray-600 hover:text-black">
//               Home
//             </a>
//             {/* <a href="#" className="text-gray-600 hover:text-black">
//               Booking
//             </a> */}
//             <a href="#" className="text-gray-600 hover:text-black">
//               Categories
//             </a>
//             <a href="#" className="text-gray-600 hover:text-black">
//               About
//             </a>
//           </nav>

//           {/* Sign Up / Log Out Button with Loader */}
//           {isAuthenticated ? (
//             <button
//               onClick={handleLogout}
//               className="bg-black hover:bg-gray-600 cursor-pointer text-white px-4 py-2 rounded-full flex items-center justify-center min-w-[100px]"
//               disabled={loading} // Disable button when loading
//             >
//               {loading ? (
//                 <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//               ) : (
//                 "Log Out"
//               )}
//             </button>
//           ) : (
//             <button
//               onClick={handleSignup}
//               className="bg-black hover:bg-gray-600 cursor-pointer text-white px-4 py-2 rounded-full flex items-center justify-center min-w-[100px]"
//               disabled={loading} // Disable button when loading
//             >
//               {loading ? (
//                 <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
//               ) : (
//                 "Sign Up"
//               )}
//             </button>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative text-black w-full h-screen">
//         <Image
//           src={lotus}
//           alt="Lotus Temple"
//           layout="fill"
//           objectFit="cover"
//           objectPosition="center"
//           className="z-0"
//         />
//         <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
//         <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-20 text-center text-white">
//           <h2 className="text-4xl font-bold">Explore Beautiful Places</h2>
//           <p className="text-gray-200 mt-4">
//             Find your perfect travel destination with ease
//           </p>
//           <SearchBar />
//         </div>
//       </section>

//       {/* Popular Searches */}
//       <section className="text-center py-8">
//         <h3 className="text-xl font-semibold text-gray-800">
//           Popular Searches
//         </h3>
//         <div className="mt-4 flex flex-wrap justify-center gap-3">
//           {["Goa", "Lotus Temple", "Udaipur(Rajasthan)", "delhi"].map(
//             (item, index) => (
//               <span
//                 key={index}
//                 className="bg-gray-200 px-3 py-1 rounded-full text-gray-700"
//               >
//                 {item}
//               </span>
//             )
//           )}
//         </div>
//       </section>

//       {/* Categories Section */}
//       <section className="py-12 -mt-5 text-center">
//         <h3 className="text-xl font-semibold text-gray-800">Categories</h3>
//         <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
//           {["Beach", "Temple", "Desert", "Mountain"].map((category, index) => (
//             <div
//               key={index}
//               className="bg-white hover:bg-gray-100 cursor-pointer shadow rounded-lg p-3"
//             >
//               {category === "Beach" && (
//                 <>
//                   <Image
//                     src={Beach}
//                     alt={category}
//                     width={300} // Increased size
//                     height={300} // Increased size
//                     className="mx-auto rounded-lg"
//                   />
//                   <p className="mt-2 text-gray-700">
//                     "Beaches are perfect for relaxing, enjoying the sun, and
//                     swimming. Popular beach destinations include Goa and the
//                     Maldives."
//                   </p>
//                 </>
//               )}
//               {category === "Temple" && (
//                 <>
//                   <Image
//                     src={Temple}
//                     alt={category}
//                     width={300} // Increased size
//                     height={300} // Increased size
//                     className="mx-auto rounded-lg"
//                   />
//                   <p className="mt-2 text-gray-700">
//                     "Temples offer a blend of history, culture, and
//                     spirituality. Popular temples include the Lotus Temple and
//                     Udaipur Temples."
//                   </p>
//                 </>
//               )}
//               {category === "Desert" && (
//                 <>
//                   <Image
//                     src={Desert}
//                     alt={category}
//                     width={300} // Increased size
//                     height={300} // Increased size
//                     className="mx-auto rounded-lg"
//                   />
//                   <p className="mt-2 text-gray-700">
//                     "Deserts are a haven for adventure and tranquility. Explore
//                     the vast Thar Desert in Rajasthan and other desert
//                     landscapes."
//                   </p>
//                 </>
//               )}
//               {category === "Mountain" && (
//                 <>
//                   <Image
//                     src={Mountain}
//                     alt={category}
//                     width={300} // Increased size
//                     height={300} // Increased size
//                     className="mx-auto rounded-lg"
//                   />
//                   <p className="mt-2 text-gray-700">
//                     "Mountains are ideal for trekking, hiking, and nature
//                     lovers. Explore the majestic Himalayas or the Aravallis for
//                     stunning views."
//                   </p>
//                 </>
//               )}
//               <p className="mt-2 text-black font-bold">{category}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Download Section */}
//       <section className="bg-black text-white py-12 text-center">
//         <p className="mt-2">Get the latest deals and plan your trips easily.</p>
//         <p className="mt-2">
//           © 2025 Planify, Inc. · Privacy · Terms · Site · map · Company details.
//         </p>
//       </section>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";
import SearchBar from "../components/SearchBar";
import img from "../assets/logo.png";
import lotus from "../assets/lotus temple.jpg";
import Beach from "../assets/beach.jpg";
import Desert from "../assets/desert.jpg";
import Mountain from "../assets/mountain.jpg";
import Temple from "../assets/temple.jpg";

export default function Home() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false); // Loader state
  
  // Specify the ref type as HTMLDivElement
  const categoriesRef = useRef<HTMLDivElement>(null); // Explicitly typing ref

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    if (authStatus === "true") {
      setIsAuthenticated(true);
    }
  }, []);

  const handleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulate API call delay
      router.push("/signup");
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      // Simulate API call delay
      localStorage.setItem("isAuthenticated", "false");
      setIsAuthenticated(false);
      router.push("/login");
      setLoading(false);
    }, 1500);
  };

  // Handle smooth scroll to categories
  const scrollToCategories = () => {
    // Use the ref to scroll to the Categories section
    categoriesRef.current?.scrollIntoView({
      behavior: "smooth", // Enables smooth scroll
      block: "start", // Scroll to the start of the section
    });
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="flex justify-between items-center p-2 bg-white shadow-md">
        {/* Logo */}
        <Image src={img} alt="Logo" width={80} height={60} className="ml-2" />

        {/* Navigation & Buttons */}
        <div className="flex items-center space-x-6">
          <nav className="flex text-md space-x-6">
            <a href="#" className="text-gray-600 hover:text-black">
              Home
            </a>
            {/* Categories link will trigger scroll */}
            <a
              href="#"
              className="text-gray-600 hover:text-black"
              onClick={scrollToCategories} // Scroll to Categories on click
            >
              Categories
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              About
            </a>
          </nav>

          {/* Sign Up / Log Out Button with Loader */}
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className="bg-black hover:bg-gray-600 cursor-pointer text-white px-4 py-2 rounded-full flex items-center justify-center min-w-[100px]"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "Log Out"
              )}
            </button>
          ) : (
            <button
              onClick={handleSignup}
              className="bg-black hover:bg-gray-600 cursor-pointer text-white px-4 py-2 rounded-full flex items-center justify-center min-w-[100px]"
              disabled={loading} // Disable button when loading
            >
              {loading ? (
                <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative text-black w-full h-screen">
        <Image
          src={lotus}
          alt="Lotus Temple"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 z-20 text-center text-white">
          <h2 className="text-4xl font-bold">Explore Beautiful Places</h2>
          <p className="text-gray-200 mt-4">
            Find your perfect travel destination with ease
          </p>
          <SearchBar />
        </div>
      </section>

      {/* Popular Searches */}
      <section className="text-center py-8">
        <h3 className="text-xl font-semibold text-gray-800">
          Popular Searches
        </h3>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {["Goa", "Lotus Temple", "Udaipur(Rajasthan)", "delhi"].map(
            (item, index) => (
              <span
                key={index}
                className="bg-gray-200 px-3 py-1 rounded-full text-gray-700"
              >
                {item}
              </span>
            )
          )}
        </div>
      </section>

      {/* Categories Section */}
      <section
        ref={categoriesRef} // Attach the ref here
        className="py-12 -mt-5 text-center"
      >
        <h3 className="text-xl font-semibold text-gray-800">Categories</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {["Beach", "Temple", "Desert", "Mountain"].map((category, index) => (
            <div
              key={index}
              className="bg-white hover:bg-gray-100 cursor-pointer shadow rounded-lg p-3"
            >
              {category === "Beach" && (
                <>
                  <Image
                    src={Beach}
                    alt={category}
                    width={300} // Increased size
                    height={300} // Increased size
                    className="mx-auto rounded-lg"
                  />
                  <p className="mt-2 text-gray-700">
                    "Beaches are perfect for relaxing, enjoying the sun, and
                    swimming. Popular beach destinations include Goa and the
                    Maldives."
                  </p>
                </>
              )}
              {category === "Temple" && (
                <>
                  <Image
                    src={Temple}
                    alt={category}
                    width={300} // Increased size
                    height={300} // Increased size
                    className="mx-auto rounded-lg"
                  />
                  <p className="mt-2 text-gray-700">
                    "Temples offer a blend of history, culture, and
                    spirituality. Popular temples include the Lotus Temple and
                    Udaipur Temples."
                  </p>
                </>
              )}
              {category === "Desert" && (
                <>
                  <Image
                    src={Desert}
                    alt={category}
                    width={300} // Increased size
                    height={300} // Increased size
                    className="mx-auto rounded-lg"
                  />
                  <p className="mt-2 text-gray-700">
                    "Deserts are a haven for adventure and tranquility. Explore
                    the vast Thar Desert in Rajasthan and other desert
                    landscapes."
                  </p>
                </>
              )}
              {category === "Mountain" && (
                <>
                  <Image
                    src={Mountain}
                    alt={category}
                    width={300} // Increased size
                    height={300} // Increased size
                    className="mx-auto rounded-lg"
                  />
                  <p className="mt-2 text-gray-700">
                    "Mountains are ideal for trekking, hiking, and nature
                    lovers. Explore the majestic Himalayas or the Aravallis for
                    stunning views."
                  </p>
                </>
              )}
              <p className="mt-2 text-black font-bold">{category}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section className="bg-black text-white py-12 text-center">
        <p className="mt-2">Get the latest deals and plan your trips easily.</p>
        <p className="mt-2">
          © 2025 Planify, Inc. · Privacy · Terms · Site · map · Company details.
        </p>
      </section>
    </div>
  );
}
