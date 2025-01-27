import { t_quizHeader } from '@/app/types/quizItem';
import React from 'react';

interface QuizItemProps {
  quizHeader: t_quizHeader;
}

function QuizItem({ quizHeader }: QuizItemProps) {
  return (
    <div className="w-full md:w-72 p-4 bg-white border border-gray-300 rounded-md shadow-sm">
      {/* First Line */}
      <div className="flex justify-between items-center mb-2">
        <div className='flex '>


          <span className="text-sm font-medium text-gray-700">{quizHeader.topic}</span>
          <span className="text-sm text-gray-500">#{quizHeader.code}</span>

        </div>
        <span className="text-xs bg-red-500 text-white py-1 px-2 rounded-full">{quizHeader.difficulty}</span>
      </div>

      {/* Second Line */}
      <div className="text-sm text-gray-500 mb-2">
        Uploaded: <span className="font-medium">{quizHeader.uploaded}</span>
      </div>

      {/* Third Line */}
      <div className="text-sm text-gray-700 mb-2">
        <span className="font-medium">{quizHeader.questionsCount}</span> questions
      </div>

      {/* Last Line */}

      <div className="text-sm text-gray-700">
        {quizHeader.numberOfAttempts === 0 ? (
          <span className='font-medium'>"First attempt"</span>
        ) : (
          <>
            {"Avg Score: "}
            <span className="font-medium">{(quizHeader.totalScore / quizHeader.numberOfAttempts).toFixed(2)}%</span>
          </>
        )}
      </div>
    </div >
  );
}

export default QuizItem;
