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

    // After signup, set authentication status to true
    localStorage.setItem("isAuthenticated", "true");
    router.push("/"); // Navigate to home
  };

  return (
    <div className="min-h-screen text-black flex items-center justify-center bg-gray-100">
      <div className="flex w-[800px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
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
            Create a New Account
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
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <FaEyeSlash size={20} />
                ) : (
                  <FaEye size={20} />
                )}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="h-4 w-4"
              />
              <label className="text-gray-600 text-sm">
                I agree to the terms and conditions
              </label>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-2 cursor-pointer bg-black text-white rounded hover:bg-gray-700 flex justify-center items-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Signing up...
                </>
              ) : (
                "Sign Up"
              )}
            </button>
          </form>

          <p className="text-center mt-1 text-gray-600">
            Already have an account?{" "}
            <Link href="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
