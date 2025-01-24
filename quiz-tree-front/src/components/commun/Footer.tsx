
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-4 ">
      <div className="flex justify-center">
        <p className="text-center text-white">
          &copy; {new Date().getFullYear()} Quiz Tree. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
