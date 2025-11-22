import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handle(e) {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", {
        name,
        email,
        password,
      });

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
      }

      router.push("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-4">
      
      <form
        onSubmit={handle}
        className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl shadow-2xl p-8 w-full max-w-md text-white"
      >
        <h2 className="text-3xl font-bold mb-6 text-center tracking-wide">
          Create Your Account
        </h2>

        <div className="space-y-4">
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />

          <input
            required
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />

          <input
            required
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create a password"
            className="w-full p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-300"
          />
        </div>

        <button
          className="mt-6 w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg tracking-wide shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03]"
        >
          Register
        </button>

        <p className="text-center text-sm mt-4 text-gray-200">
          Already have an account?  
          <span className="underline cursor-pointer text-white ml-1">
            Login
          </span>
        </p>
      </form>
    </div>
  );
}
