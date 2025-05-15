import React from "react";
import { useNavigate } from "react-router-dom";

const VaibhavHome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-10">Good vibes, great images ahead. ✨📸🚀</h1>
      <div className="flex flex-col gap-8 w-full max-w-md">
        <button
          className="bg-blue-600 text-white text-2xl font-semibold py-8 rounded-lg shadow-lg hover:bg-blue-700 transition"
          onClick={() => navigate("/enhancer")}
        >
          AI Image Enhancer 🤖🖼️
        </button>
        <button
          className="bg-green-600 text-white text-2xl font-semibold py-8 rounded-lg shadow-lg hover:bg-green-700 transition"
          onClick={() => navigate("/generator")}
        >
          Random Image Generator 🎲🖼️
        </button>
      </div>
    </div>
  );
};

export default VaibhavHome;
