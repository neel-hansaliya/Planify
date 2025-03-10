import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import img from "../assets/logo.png";
import adventure from "../assets/spiti.jpg";
import Link from "next/link";

export default function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      console.log("Login Data:", formData);
      setLoading(false);

      // Set the authentication status after login
      localStorage.setItem("isAuthenticated", "true");
      router.push("/"); // Redirect to home
    }, 2000);
  };

  return (
    <div className="min-h-screen text-black flex items-center justify-center bg-gray-100">
      <div className="flex w-[800px] h-[450px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 relative">
          <Image
            src={adventure}
            alt="Adventure"
            layout="fill"
            objectFit="cover"
            className="rounded-l-lg"
          />
        </div>

        <div className="w-1/2 p-7 gap-2 flex flex-col justify-center">
          <Image
            src={img}
            alt="Logo"
            width={80}
            height={80}
            className="mx-auto mb-3"
          />
          <h2 className="text-2xl font-bold text-center mb-4">
            Welcome Back to Planify
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full p-2 border rounded pr-10"
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full mt-2 py-2 bg-black cursor-pointer text-white rounded hover:bg-gray-700 flex justify-center items-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Loading...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          <p className="text-center mt-1 text-gray-600">
            Do not have an account?{" "}
            <Link href="/signup" className="text-blue-500 hover:underline">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
