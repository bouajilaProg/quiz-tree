import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const PricingSection = () => {
  return (
    <div className="p-8 bg-slate-100">
      <h2 className="text-3xl font-bold text-center mb-8">
        Pricing Plans
      </h2>
      <div className="flex flex-col md:flex-row justify-center">
        {/* Free Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4 md:mb-0 md:w-80 mx-2">
          <h3 className="text-2xl font-bold mb-2">Bronze</h3>
          <p className="text-lg mb-4">
            Access to over 1000 quizzes in various topics.
          </p>
          <p className="text-4xl font-bold mb-4">$0</p>
          <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Sign Up for Free
          </button>
          <div className="flex items-center text-gray-600 mb-2 mt-4">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>Access to more than 1000 quizzes</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>Free evaluation at the end</span>
          </div>
        </div>

        {/* Premium Plan */}
        {/* Premium Plan */}
        <div className="bg-white shadow-lg rounded-lg p-6 mb-4 md:mb-0 md:w-80 mx-2">
          <h3 className="text-2xl font-bold mb-2">Silver</h3>
          <p className="text-lg mb-4">
            don't depend on luck, get the best quizzes
          </p>
          <p className="text-4xl font-bold mb-4">$5/month</p>
          <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Join Now
          </button>
          <div className="flex items-center text-gray-600 mb-2 mt-4">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>All in bronze</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>No ads</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>Correction for quizzes</span>
          </div>

        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 mb-4 md:mb-0 md:w-80 mx-2">
          <h3 className="text-2xl font-bold mb-2">Gold</h3>
          <p className="text-lg mb-4">
            be the best student with our gold plan.
          </p>
          <p className="text-4xl font-bold mb-4">$12/month</p>
          <button className="mt-4 bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
            Join Now
          </button>
          <div className="flex items-center text-gray-600 mb-2 mt-4">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>All in silver</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>No ads</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>over 10,000 quizzes in 250 topics</span>
          </div>
          <div className="flex items-center text-gray-600 mb-2">
            <FaCheckCircle className="text-green-500 mr-2" />
            <span>Correction for quizzes</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PricingSection;
