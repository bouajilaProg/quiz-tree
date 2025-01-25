"use client";

import quizes from '@/app/fakeData/quiz';
import { t_quizItem } from '@/app/types/quizItem';
import { td_quizItem } from '@/app/typesDefault';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';



const QuizPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = React.useState<number>(0);
  const [quiz, setQuiz] = React.useState<t_quizItem>(td_quizItem);
  const [selectedOptions, setSelectedOptions] = React.useState<number[]>([]);
  const [score, setScore] = React.useState<number>(0);


  let progress = (currentQuestion / (quiz.header.questionsCount) * 100);
  useEffect(() => {
    // Fetch Questions
    const testQuiz: t_quizItem = quizes[0];
    setQuiz(testQuiz);

  }, []);


  const checkRight = (options: number[]) => {
    let correctOptions = quiz.questions[currentQuestion].correctOption;

    // Ensure correctOptions is an array
    if (!Array.isArray(correctOptions)) {
      correctOptions = [correctOptions];
    }

    let score = options.filter(option => correctOptions.includes(option)).length;

    // The answer is correct if all correct options are selected and no extra ones
    if (score === correctOptions.length && options.length === correctOptions.length) {
      console.log("Correct");
      return 1;
    }

    return 0; // Return 0 if not fully correct
  }



  function handleNextQuestion(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log("Next Question");
    setScore(score => score + checkRight(selectedOptions));
    setCurrentQuestion(currentQuestion + 1);
    console.log(score);
    console.log(selectedOptions, "==", quiz.questions[currentQuestion].correctOption);
  }

  function handleOptionChange(e: React.ChangeEvent<HTMLInputElement>) {
    const option = parseInt(e.target.value);
    let debugSelectedOptions = selectedOptions;
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter(selectedOption => selectedOption !== option));
      debugSelectedOptions = selectedOptions.filter(selectedOption => selectedOption !== option);
    } else {
      setSelectedOptions([...selectedOptions, option]);
      debugSelectedOptions = [...selectedOptions, option];
    }

    console.log(debugSelectedOptions);
  }

  return (
    <div className="flex flex-col items-center p-6 md:p-8 lg:items-start lg:justify-start h-screen bg-gray-50 px-12 md:px-28  lg:px-24">
      {/* Title and Arrows */}
      <div className="flex flex-col items-center  text-2xl font-semibold justify-evenly w-full text-gray-800">
        <span className="font-bold text-xl text-center text-gray-700">{quiz.header.topic + " #" + quiz.header.code}</span>
        <div className="flex items-center gap-4  justify-evenly w-full ">
          <FaArrowLeft className="hidden cursor-pointer hover:text-blue-500 transition" />
          <div className="w-full bg-gray-300 rounded-full h-2.5 ">
            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
          </div>
          <FaArrowRight className="hidden cursor-pointer hover:text-blue-500 transition" />
        </div>
      </div>


      {
        currentQuestion < quiz.header.questionsCount && (

          <div className='w-full'>
            < div className="w-full lg:hidden flex flex-col items-center mt-6">
              <img src='https://placehold.co/600x400' className="rounded-lg w-[300] h-[200] md:h-[400px] md:w-[600px] shadow-md hover:shadow-xl transition-all duration-300" />
              <div className="w-full mt-6 flex flex-col gap-4 justify-evenly md:text-center">
                {quiz.questions[currentQuestion].options.map((option, index) => (
                  <label key={index} className="flex items-center gap-2 justify-between hover:bg-gray-100 rounded-lg p-3 transition-all duration-300">
                    <span className="text-lg text-gray-700">{option}</span>
                    <input type="checkbox" className="w-6 h-6" value={index} onChange={handleOptionChange} />
                  </label>
                ))}
              </div>
              <div className="w-full">
                <button className="mt-6 px-6 py-3 bg-blue-500 text-white  block w-full rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300" onClick={handleNextQuestion}>
                  Submit
                </button>
              </div>
            </div>

            <div className="hidden lg:flex w-full  mt-10 text-lg">
              <div className="flex flex-col gap-4 w-1/2">
                {["Option 1", "Option 2", "Option 3", "Option 4 "].map((option, index) => (
                  <label key={index} className="flex items-center gap-3 justify-between hover:bg-gray-100 rounded-lg p-4 transition-all duration-300">
                    <span className="text-xl text-gray-800">{option}</span>
                    <input type="checkbox" className="w-8 h-8" onChange={handleOptionChange} />
                  </label>
                ))}

                {/* Desktop Submit Button */}
                <button className="hidden lg:block mt-6 px-6 py-3 bg-blue-500 text-white w-1/4 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300" onClick={handleNextQuestion}>
                  Submit
                </button>
              </div>
              <img src='https://placehold.co/600x400' className="rounded-lg h-[400px] w-[600px] shadow-md hover:shadow-xl transition-all duration-300" />
            </div>
          </div>)
      }



      {
        currentQuestion === quiz.header.questionsCount && (
          <div className="flex w-full flex-col items-center gap-6 lg:justify-center lg:h-screen">
            <div className="flex flex-col items-center gap-4">
              <span className="text-4xl text-blue-500 font-bold">Quiz Completed</span>
              <span className="text-[12rem] lg:text-[15rem] font-bold text-gray-800">{(score / quiz.header.questionsCount) * 100}%</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-4 w-full max-w-md lg:max-w-2xl lg:justify-center">
              <Link href={"/home"} className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 w-full lg:flex-1 text-center">
                Continue
              </Link>
              <button className="px-6 py-3 bg-gray-400 text-gray-700 rounded-lg shadow-md cursor-not-allowed w-full lg:flex-1">
                See Correction <span className="text-xs">(Coming Soon)</span>
              </button>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300 w-full lg:flex-1" onClick={
                () => {
                  setCurrentQuestion(0);
                  setScore(0);
                  setSelectedOptions([]);
                }
              }>
                Retry
              </button>
            </div>
          </div>
        )
      }



    </div >
  );
};

export default QuizPage;
