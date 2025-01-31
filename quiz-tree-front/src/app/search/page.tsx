"use server";

import React from 'react';
import { t_quizHeader } from '../types/quizItem';
import QuizItem from '@/components/commun/quizItem';
import Link from 'next/link';
import axios from 'axios';


interface HomeProps {
  quizes: { _id: string, header: t_quizHeader }[];
}


async function Search() {
  // Fix: Access response.data directly for quizes
  const response = await axios.get(process.env.NEXT_PUBLIC_NOT_SECRET_BACKEND_URL + "/user-quiz/quizes?username=imed");
  const quizes: HomeProps = response.data; // Use response.data

  //debug
  console.log(quizes.quizes.map((quiz) => quiz));


  return (
    <div className="p-4 flex min-h-screen">
      <div className='lg:max-w-[90%]'>

        <div>
          <h2 className="text-lg font-bold text-gray-700 mb-4">Solve Next</h2>
          <div className="flex justify-start w-full flex-wrap gap-2">
            {quizes.quizes.map((quiz, index) => (
              <Link key={`solve-next-${index}`} className="w-full md:w-auto flex flex-wrap gap-5" href={`/quiz/${quiz._id}`}>
                <QuizItem quizHeader={quiz.header} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


export default Search

