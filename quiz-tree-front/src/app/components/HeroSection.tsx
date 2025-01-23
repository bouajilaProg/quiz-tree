import React from 'react';

const HeroSection = () => {


  return (
    <div className="flex justify-center p-8 bg-slate-100">
      <div className="w-full md:w-11/12 lg:w-3/5">
        <div className="flex flex-col md:flex-row items-center justify-center gap-5">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl  md:text-3xl font-bold mb-4">
              Plant the Seeds of Knowledge with

              <span className="text-blue-600 text-4xl md:text-4xl ml-1">Quiz Tree</span>
            </h2>
            <p className="text-base md:text-lg text-gray-700">
              Join us and enhance your learning experience with engaging quizzes
              and interactive content.
            </p>
          </div>
          <div className="mb-4 md:mb-0">
            <img
              src="https://placehold.co/400x300"
              alt="Learning and Revision"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
