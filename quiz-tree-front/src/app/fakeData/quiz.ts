import { t_quizItem } from "../types/quizItem";

const quizes: t_quizItem[] = [
  {
    header: {
      topic: 'Test Topic',
      code: '123',
      difficulty: 'Hard',
      uploaded: '2021-09-01',
      questionsCount: 10,
      avgScore: 80
    },
    questions: [
      {
        question: 'What is the capital of France?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctOption: [0]
      },
      {
        question: 'What is the capital of Germany?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctOption: [2]
      },
      {
        question: 'What is the capital of Spain?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctOption: [3]
      },
      {
        question: 'What is the capital of England?',
        options: ['Paris', 'London', 'Berlin', 'Madrid'],
        correctOption: [1]
      },
      {
        question: 'What is the capital of Italy?',
        options: ['Paris', 'London', 'Rome', 'Madrid'],
        correctOption: [2]
      },
      {
        question: 'What is the capital of Portugal?',
        options: ['Paris', 'Lisbon', 'Berlin', 'Madrid'],
        correctOption: [1]
      },
      {
        question: 'What is the capital of Belgium?',
        options: ['Paris', 'London', 'Brussels', 'Madrid'],
        correctOption: [2]
      },
      {
        question: 'What is the capital of Netherlands?',
        options: ['Paris', 'London', 'Berlin', 'Amsterdam'],
        correctOption: [3]
      },
      {
        question: 'What is the capital of Switzerland?',
        options: ['Paris', 'London', 'Bern', 'Madrid'],
        correctOption: [2]
      },
      {
        question: 'What is the capital of Sweden?',
        options: ['Paris', 'Stockholm', 'Berlin', 'Madrid'],
        correctOption: [1]
      }
    ]
  },
  {
    header: {
      topic: 'Math',
      code: '16960',
      difficulty: 'Easy',
      uploaded: '2021-10-01',
      questionsCount: 16,
      avgScore: 72
    },
    questions: [
      {
        question: 'What is 2 + 2?',
        options: ['1', '2', '3', '4'],
        correctOption: [3]
      },
      {
        question: 'What is 3 + 5?',
        options: ['5', '6', '7', '8'],
        correctOption: [3]
      },
      {
        question: 'What is 10 - 3?',
        options: ['5', '6', '7', '8'],
        correctOption: [2]
      },
      {
        question: 'What is 9 + 6?',
        options: ['13', '14', '15', '16'],
        correctOption: [2]
      },
      {
        question: 'What is 15 - 7?',
        options: ['6', '7', '8', '9'],
        correctOption: [2]
      },
      {
        question: 'What is 12 ÷ 4?',
        options: ['2', '3', '4', '5'],
        correctOption: [1]
      },
      {
        question: 'What is 7 × 6?',
        options: ['40', '42', '44', '45'],
        correctOption: [1]
      },
      {
        question: 'What is 25 ÷ 5?',
        options: ['4', '5', '6', '7'],
        correctOption: [1]
      },
      {
        question: 'What is 3 × 9?',
        options: ['24', '26', '27', '28'],
        correctOption: [2]
      },
      {
        question: 'What is 100 - 45?',
        options: ['50', '55', '60', '65'],
        correctOption: [1]
      },
      {
        question: 'What is 12 × 12?',
        options: ['132', '144', '156', '162'],
        correctOption: [1]
      },
      {
        question: 'What is 20 ÷ 4?',
        options: ['4', '5', '6', '7'],
        correctOption: [1]
      },
      {
        question: 'What is 16 ÷ 8?',
        options: ['1', '2', '3', '4'],
        correctOption: [1]
      },
      {
        question: 'What is 9 × 8?',
        options: ['72', '73', '74', '75'],
        correctOption: [0]
      },
      {
        question: 'What is 18 ÷ 3?',
        options: ['5', '6', '7', '8'],
        correctOption: [1]
      },
      {
        question: 'What is 13 + 7?',
        options: ['18', '19', '20', '21'],
        correctOption: [0]
      }
    ]
  }
];

export default quizes;
