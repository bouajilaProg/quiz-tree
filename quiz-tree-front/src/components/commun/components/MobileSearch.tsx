"use client";
import { FaArrowLeft, FaSearch } from "react-icons/fa";
import Link from "next/link";

interface MobileSearchProps {
  setMobileSearchOpen: (open: boolean) => void;
  searchData: string[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const MobileSearch = ({ setMobileSearchOpen, searchData, searchQuery, setSearchQuery }: MobileSearchProps) => {
  return (
    <>
      {/* Modal */}
      <div className="absolute top-0 left-0 right-0 z-50 h-screen">
        <div className="bg-gray-900 rounded-lg w-full max-w-md p-3 h-screen flex flex-col">
          {/* Search input */}
          <div className="flex items-center space-x-2 w-full">
            <button className="p-2">
              <FaArrowLeft className="text-white text-lg" onClick={() => setMobileSearchOpen(false)} />
            </button>
            <input
              type="text"
              placeholder="Search"
              className="flex-grow p-3 pb-1 bg-gray-900 text-white border-b-2 border-white outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch className="text-white w-5 h-5" />
          </div>

          {/* Search suggestions */}
          <div className="mt-4 space-y-2 overflow-y-auto max-h-screen">
            {searchData
              .filter((data) => data.toLowerCase().includes(searchQuery.toLowerCase()))
              .map((suggestion) => (
                <Link
                  key={suggestion}
                  href={`/search?query=${suggestion}`}
                  className="block text-white px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                  {suggestion}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSearch;
