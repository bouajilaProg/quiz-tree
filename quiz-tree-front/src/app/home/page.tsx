import React from 'react';
import { t_quizHeader } from '../types/quizItem';
import QuizItem from '@/components/commun/quizItem';

function Home() {

  const test1: t_quizHeader = {
    topic: 'Test Topic',
    code: '123',
    difficulty: 'Hard',
    uploaded: '2021-09-01',
    questionsCount: 10,
    avgScore: 80
  }


  const test2: t_quizHeader = {
    topic: 'Test Topic 2',
    code: '16960',
    difficulty: 'easy',
    uploaded: '2021-10-01',
    questionsCount: 16,
    avgScore: 72
  }


  return (
    <div className="p-4 flex justify-center min-h-screen">
      <div className='lg:max-w-[90%]'>
        {/* Recent Section */}
        <div className="mb-8">
          <h2 className="text-lg font-bold text-gray-700 mb-4">Recent</h2>
          <div className="flex flex-wrap gap-5">
            {Array.from({ length: 3 }).map((_, index) => (
              <QuizItem key={`recent-${index}`} quizHeader={test1} />
            ))}
          </div>
        </div>

        {/* Solve Next Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-700 mb-4">Solve Next</h2>
          <div className="flex flex-wrap gap-5">
            {Array.from({ length: 12 }).map((_, index) => (
              <QuizItem key={`solve-next-${index}`} quizHeader={test2} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
