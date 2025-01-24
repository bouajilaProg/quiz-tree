import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const QuizPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 md:p-8 lg:items-start lg:justify-start h-screen bg-gray-50 px-12 md:px-28  lg:px-24">
      {/* Title and Arrows */}


      <div className="flex flex-col items-center  text-2xl font-semibold justify-evenly w-full text-gray-800">
        <span className="font-bold text-xl text-center text-gray-700">Zwawin</span>



        <div className="flex items-center gap-4  justify-evenly w-full ">
          <FaArrowLeft className="cursor-pointer hover:text-blue-500 transition" />
          <div className="w-full bg-gray-300 rounded-full h-2.5 ">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "66%" }}></div>
          </div>
          <FaArrowRight className="cursor-pointer hover:text-blue-500 transition" />
        </div>
      </div>



      {/* Mobile and Medium Screens */}
      <div className="w-full lg:hidden flex flex-col items-center mt-6">
        <img src='https://placehold.co/600x400' className="rounded-lg w-[300] h-[200] md:h-[400px] md:w-[600px] shadow-md hover:shadow-xl transition-all duration-300" />
        <div className="w-full mt-6 flex flex-col gap-4 md:text-center">
          {["Option 1", "Option 2", "Option 3", "Option 4"].map((option, index) => (
            <label key={index} className="flex items-center gap-2   justify-between hover:bg-gray-100 rounded-lg p-3 transition-all duration-300">
              <span className="text-lg text-gray-700">{option}</span>
              <input type="checkbox" className="w-6 h-6" />
            </label>
          ))}
        </div>
        <div className="w-full">
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white  block w-full rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
            Submit
          </button>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex w-full justify-between mt-10 text-lg">
        <div className="flex flex-col gap-4 w-1/2">
          {["Option 1", "Option 2", "Option 3", "Option 4 "].map((option, index) => (
            <label key={index} className="flex items-center gap-3 justify-between hover:bg-gray-100 rounded-lg p-4 transition-all duration-300">
              <span className="text-xl text-gray-800">{option}</span>
              <input type="checkbox" className="w-8 h-8" />
            </label>
          ))}

          {/* Desktop Submit Button */}
          <button className="hidden lg:block mt-6 px-6 py-3 bg-blue-500 text-white w-1/4 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300">
            Submit
          </button>
        </div>
        <img src='https://placehold.co/600x400' className="rounded-lg h-[400px] w-[600px] shadow-md hover:shadow-xl transition-all duration-300" />
      </div>
    </div>
  );
};

export default QuizPage;
