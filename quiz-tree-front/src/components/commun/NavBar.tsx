"use client";
import { userContext } from "@/app/contexts/userProvider";
import axios from "axios";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import MobileSearch from "./components/MobileSearch";
import AutoComplete from "./components/AutoComplete";

const NavBar = () => {
  const { user, setUser } = useContext(userContext); // Get context values
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [SearchData, setSearchData] = useState<string[]>([]);

  if (user && !loggedIn) {
    setLoggedIn(true); // If user is set, set logged in to true
  } else {
    if (loggedIn && !user) {
      setLoggedIn(false); // If user is not set, set logged in to false
    }
  }

  useEffect(() => {
    document.body.style.overflow = searchOpen ? "hidden" : "auto";
  }, [searchOpen]);

  useEffect(() => {
    //fetch search data
    setSearchData(["test1", "test2", "test3", "test4", "test5"]);
  }, [searchQuery])




  return (
    <div className={(searchOpen) ? "overflow-hidden h-screen" : ""}>
      {searchOpen ? (

        <div className="absolute top-0 right-0 left-0 z-50">
          <MobileSearch setMobileSearchOpen={setSearchOpen} searchData={SearchData} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </div>

      ) : null}
      < nav className="bg-gray-900 p-4 lg:px-0 sticky w-full top-0">
        <div className="flex justify-between items-center lg:mx-28">
          <Link className="text-white text-2xl font-bold" href={loggedIn ? "/home" : "/"}>Quiz Tree</Link>

          {!loggedIn ? (
            <Link href={"/login"} className="text-gray-300 hover:text-white transition duration-200">
              Login
            </Link>
          ) : (
            <div className="flex items-center space-x-6">
              {/* Search button on small screens, input on large screens */}
              <div className="flex items-center">
                <button className="flex items-center text-gray-300 hover:text-white transition duration-200 md:hidden" onClick={() => { setSearchOpen(true) }}>

                  <FaSearch />

                </button>
                <div className="hidden md:flex flex-col items-center px-3 py-1.5 rounded-lg ">
                  <FaSearch className="text-gray-400 block mr-2 md:hidden" />
                  <AutoComplete />
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

    </div >
  );
};

export default NavBar;
