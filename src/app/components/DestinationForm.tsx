import Image from 'next/image';
import img from "../assets/logo.png";
import lotus from "../assets/lotus temple.jpg";
import Beach from "../assets/beach.jpg"; 
import Desert from "../assets/desert.jpg"; 
import Mountain from "../assets/mountain.jpg"; 
import Temple from "../assets/temple.jpg";  

export default function Home() {
  // const [search, setSearch] = useState({ location: '', date: '', guests: '' });

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header */}
      <header className="flex justify-between ml-3 items-center p-2 bg-white shadow-md">
        <Image 
          src={img} 
          alt="Logo" 
          width={80} 
          height={60} 
        />
        <nav className="space-x-6">
          <a href="#" className="text-gray-600 hover:text-black">Home</a>
          <a href="#" className="text-gray-600 hover:text-black">Booking</a>
          <a href="#" className="text-gray-600 hover:text-black">Categories</a>
          <a href="#" className="text-gray-600 hover:text-black">About</a>
          <button className="bg-black hover:bg-gray-600 text-white px-4 py-2 cursor-pointer rounded-full">Sign Up</button>
        </nav>
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
          <p className="text-gray-200 mt-4">Find your perfect travel destination with ease</p>
          <div className="mt-6 bg-white text-black shadow-lg rounded-lg p-4 flex items-center space-x-4 max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Where do you want to go?" 
              className="flex-1 p-2 border rounded" 
            />
            <input 
              type="date" 
              className="p-2 border rounded" 
            />
            <input 
              type="number" 
              placeholder="Guest" 
              className="p-2 border rounded w-20" 
            />
            <button className="bg-black hover:bg-gray-600 cursor-pointer text-white px-4 py-2 rounded">Search</button>
          </div>
        </div>
      </section>
      
      {/* Popular Searches */}
      <section className="text-center py-8">
        <h3 className="text-xl font-semibold text-gray-800">Popular Searches</h3>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {['Goa', 'Lotus Temple', 'Udaipur(Rajasthan)', 'delhi'].map((item, index) => (
            <span key={index} className="bg-gray-200 px-3 py-1 rounded-full text-gray-700">{item}</span>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 -mt-5 text-center">
        <h3 className="text-xl font-semibold text-gray-800">Categories</h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {['Beach', 'Temple', 'Desert', 'Mountain'].map((category, index) => (
            <div key={index} className="bg-white hover:bg-gray-200 cursor-pointer shadow rounded-lg p-3">
              {/* Render specific image for each category */}
              {category === 'Beach' && (
                <Image 
                  src={Beach}  // Beach image
                  alt={category}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              )}
              {category === 'Temple' && (
                <Image 
                  src={Temple}  // Temple image
                  alt={category}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              )}
              {category === 'Desert' && (
                <Image 
                  src={Desert}  // Desert image
                  alt={category}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              )}
              {category === 'Mountain' && (
                <Image 
                  src={Mountain}  // Mountain image
                  alt={category}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              )}
              <p className="mt-2 text-gray-700">{category}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Download Section */}
      <section className="bg-black text-white py-12 text-center">
        <p className="mt-2">Get the latest deals and plan your trips easily.</p>
        <p className="mt-2">© 2025 Planify, Inc.  · Privacy · Terms · Site · map · Company details.</p>
      </section>
    </div>
  );
}
