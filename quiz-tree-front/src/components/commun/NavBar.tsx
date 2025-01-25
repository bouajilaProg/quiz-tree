"use client";
import { userContext } from "@/app/contexts/userProvider";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";

const NavBar = () => {
  const { user, setUser } = useContext(userContext); // Get context values
  const [loggedIn, setLoggedIn] = useState<boolean>(false); // Default to false, not logged in

  if (user && !loggedIn) {
    setLoggedIn(true); // If user is set, set logged in to true
  } else {
    if (loggedIn && !user) {
      setLoggedIn(false); // If user is not set, set logged in to false
    }
  }

  return (
    <nav className="bg-gray-900 p-4 lg:px-0 sticky w-full top-0">
      <div className="flex justify-between items-center lg:mx-28">
        <h1 className="text-white text-2xl font-bold">Quiz Tree</h1>

        {!loggedIn ? (
          <button className="text-gray-300 hover:text-white transition duration-200">
            Login
          </button>
        ) : (
          <div className="flex items-center space-x-6">
            {/* Search button on small screens, input on large screens */}
            <div className="flex items-center">
              <button className="flex items-center text-gray-300 hover:text-white transition duration-200 md:hidden">
                <FaSearch />
              </button>
              <div className="hidden md:flex items-center bg-gray-800 px-3 py-1.5 rounded-lg border border-gray-700">
                <FaSearch className="text-gray-400 block mr-2 md:hidden" />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent text-white outline-none placeholder-gray-500"
                />
              </div>
            </div>

            {/* Profile button */}
            <button className="text-gray-300 hover:text-white transition duration-200 flex items-center gap-2">
              <FaUser className="text-lg" />
              <span className="hidden md:inline">Profile</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
