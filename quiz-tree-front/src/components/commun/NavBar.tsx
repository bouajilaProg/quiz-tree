import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gray-900 p-4 lg:px-0">
      <div className="flex justify-between items-center lg:mx-28 ">
        <h1 className="text-white text-2xl font-bold">Quiz Tree</h1>
        <div className="flex space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
