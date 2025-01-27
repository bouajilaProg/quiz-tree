"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const AutoComplete = () => {
  const [query, setQuery] = useState("");
  const suggestions = ["React", "NestJS", "Next.js", "Django", "MongoDB"];

  // Filtered results based on input
  const filtered = query
    ? suggestions.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
    : [];

  const [open, setOpen] = useState(false);





  return (
    <div className="relative w-48 border border-gray-700 rounded-t-lg ">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search"
        onFocus={() => setOpen(true)}
        onBlur={() => setOpen(false)}
        className="bg-transparent text-white outline-none placeholder-gray-500 w-full px-2 py-2 border-0 rounded-t-lg"
      />
      {(filtered.length > 0 && open) && (
        <ul className="absolute left-0 right-0 top-full bg-gray-800 rounded-t-none border-t border-gray-700 rounded-b-lg overflow-hidden">
          {filtered.map((item) => (
            <Link
              href={`/search?query=${item}`}
              key={item}
              onClick={() => setQuery(item)}
              className="block w-full py-2 px-2 text-gray-300 hover:bg-gray-700 cursor-pointer"
            >
              {item}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );

};

export default AutoComplete;
