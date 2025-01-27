export interface t_quizHeader {
  topic: string;
  code: string;
  difficulty: string;
  uploaded: string;
  questionsCount: number;
  totalScore: number;
  numberOfAttempts: number;
}


//quiz question
export interface t_quizQuestion {
  question: string;
  options: string[];
  correctOption: number[];
}


export interface t_quizItem {
  _id: string | undefined;
  header: t_quizHeader;
  questions: t_quizQuestion[];
}



