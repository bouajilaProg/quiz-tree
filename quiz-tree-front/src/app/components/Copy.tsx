import React from 'react';

const Copy = () => {
  return (
    <div className="flex justify-center p-8 bg-slate-200">
      <div className="w-full md:w-11/12 lg:w-3/5">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-5">
          <div className="mb-4 md:mb-0">
            <img
              src="https://placehold.co/400x300"
              alt="Learning and Revision"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Learning and Revision
            </h2>
            <p className="text-base text-justify md:text-left md:text-lg text-gray-700">
              With Quiz Tree, you can  revise and learn new concepts
              while practicing exercises. Our platform provides a variety of
              quizzes tailored to enhance your knowledge.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Copy;
