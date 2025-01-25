export interface t_quizHeader {
  topic: string;
  code: string;
  difficulty: string;
  uploaded: string;
  questionsCount: number;
  avgScore: number;
}


//quiz question
export interface t_quizQuestion {
  question: string;
  options: string[];
  correctOption: number[];
}


export interface t_quizItem {
  header: t_quizHeader;
  questions: t_quizQuestion[];
}
