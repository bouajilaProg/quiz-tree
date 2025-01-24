import { t_quizHeader } from "@/app/types/quizItem";
import QuizItem from "@/components/commun/quizItem";

const SearchResults: React.FC = () => {


  const quizTest: t_quizHeader = {
    topic: 'Test Topic',
    code: '123',
    difficulty: 'Hard',
    uploaded: '2021-09-01',
    questionsCount: 10,
    avgScore: 80
  }

  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold text-gray-700 mb-4">Solve Next</h2>
      <div className="flex flex-wrap gap-5">
        {Array.from({ length: 12 }).map((_, index) => (
          <QuizItem key={`solve-next-${index}`} quizHeader={quizTest} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
