import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // ✅ Eye icons added
import img from "../assets/logo.png";
import adventure from "../assets/spiti.jpg";
import Link from "next/link";

export default function Signup() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to the Terms and Conditions before signing up.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }

    setIsLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Signup Data:", formData);
    setIsLoading(false);

    router.push("/");
  };

  return (
    <div className="min-h-screen text-black flex items-center justify-center bg-gray-100">
      <div className="flex w-[800px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 relative">
          <Image src={adventure} alt="Adventure" layout="fill" objectFit="cover" className="rounded-l-lg" />
        </div>

        <div className="w-1/2 p-7 gap-2 flex flex-col justify-center">
          <Image src={img} alt="Logo" width={80} height={80} className="mx-auto mb-3" />
          <h2 className="text-2xl font-bold text-center mb-4">Welcome to Planify</h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />

            {/* Password Field with Eye Icon */}
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
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-600"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Confirm Password Field with Eye Icon */}
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full p-2 border rounded pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute inset-y-0 right-2 flex items-center text-gray-600"
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="w-4 h-4 cursor-pointer border-gray-300 rounded"
              />
              <label htmlFor="terms" className="ml-2 text-md text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>
              </label>
            </div>

            <button
              type="submit"
              className={`w-full mt-2 py-2 rounded flex items-center justify-center ${
                agreed ? "bg-black text-white hover:bg-gray-700 cursor-pointer" : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
              disabled={!agreed || isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin h-5 w-5 mr-2 border-2 border-t-transparent border-white rounded-full" viewBox="0 0 24 24"></svg>
                  Signing Up...
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="text-center mt-1 text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
