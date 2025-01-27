import { t_quizHeader, t_quizItem, t_quizQuestion } from "./types/quizItem";

export const td_quizHeader: t_quizHeader = {
  topic: "string",
  code: "string",
  difficulty: "string",
  uploaded: "string",
  questionsCount: 0,
  totalScore: 0,
  numberOfAttempts: 0
};

export const td_quizQuestion: t_quizQuestion = {
  question: "string",
  options: ["string"],
  correctOption: [0]
};

export const td_quizItem: t_quizItem = {
  _id: "",
  header: td_quizHeader,
  questions: [td_quizQuestion]
};
