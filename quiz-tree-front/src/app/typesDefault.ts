export const td_quizHeader = {
  topic: "string",
  code: "string",
  difficulty: "string",
  uploaded: "string",
  questionsCount: 0,
  avgScore: 0
};

export const td_quizQuestion = {
  question: "string",
  options: ["string"],
  correctOption: [0]
};

export const td_quizItem = {
  header: td_quizHeader,
  questions: [td_quizQuestion]
};
