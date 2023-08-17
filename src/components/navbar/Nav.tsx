import React from "react";

export default function Nav() {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          {/* <img src="logo.png" alt="IOT-Server" className="h-8 w-8 mr-2" /> */}
          <span className="text-white text-lg font-extrabold">IOT-Server</span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" className="text-white hover:text-gray-300">
            Dashboard
          </a>
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition duration-300">
            Login
          </button>
          <button className="text-white border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition duration-300">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
}
