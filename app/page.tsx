"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("loggedIn")) {
      router.push("/dashboard");
    }
  }, [router]);

  const handleLogin = () => {
    if (email === "user@example.com" && password === "123456") {
      localStorage.setItem("loggedIn", "true");
      router.push("/dashboard");
    } else {
      setError("Your email or password seems incorrect.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-white/30">
        <h1 className="text-2xl font-bold mb-2">Welcome back</h1>
        <p className="text-sm mb-4">Sign in to access the PDF checker</p>

        {error && <div className="mb-4 p-2 bg-red-200 text-red-800 rounded">{error}</div>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded-lg border focus:outline-none"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-3 rounded-lg border focus:outline-none"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
        >
          Sign In
        </button>
        <p className="text-center text-sm mt-3 text-gray-600">Use <b>user@example.com</b> / <b>123456</b></p>
      </div>
    </div>
  );
}
