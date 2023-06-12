import { IGameInfoContent } from './models';

export const initialGamePageState: IGameInfoContent = {
  gameName: 'Millionaire',
  stepsNumber: 12,
  questionSteps: [
    {
      id: 1,
      question: 'What is the capital of Australia?',
      answers: [
        { id: 1, answer: 'Sydney', isCorrect: false },
        { id: 2, answer: 'Melbourne', isCorrect: false },
        { id: 3, answer: 'Canberra', isCorrect: true },
        { id: 4, answer: 'Perth', isCorrect: false },
      ],
      prize: '500',
    },
    {
      id: 2,
      question: 'Which planet is known as the Red Planet?',
      answers: [
        { id: 1, answer: 'Mars', isCorrect: true },
        { id: 2, answer: 'Venus', isCorrect: false },
        { id: 3, answer: 'Jupiter', isCorrect: false },
        { id: 4, answer: 'Saturn', isCorrect: false },
      ],
      prize: '1,000',
    },
    {
      id: 3,
      question: "Who wrote the play 'Romeo and Juliet'?",
      answers: [
        { id: 1, answer: 'William Shakespeare', isCorrect: true },
        { id: 2, answer: 'Jane Austen', isCorrect: false },
        { id: 3, answer: 'Charles Dickens', isCorrect: false },
        { id: 4, answer: 'Mark Twain', isCorrect: false },
      ],
      prize: '2,000',
    },
    {
      id: 4,
      question: 'What is the chemical symbol for gold?',
      answers: [
        { id: 1, answer: 'Ag', isCorrect: false },
        { id: 2, answer: 'Au', isCorrect: true },
        { id: 3, answer: 'Cu', isCorrect: false },
        { id: 4, answer: 'Fe', isCorrect: false },
      ],
      prize: '4,000',
    },
    {
      id: 5,
      question: 'Which country won the FIFA World Cup in 2018?',
      answers: [
        { id: 1, answer: 'Brazil', isCorrect: false },
        { id: 2, answer: 'Germany', isCorrect: false },
        { id: 3, answer: 'France', isCorrect: true },
        { id: 4, answer: 'Spain', isCorrect: false },
      ],
      prize: '8,000',
    },
    {
      id: 6,
      question: 'What is the largest ocean in the world?',
      answers: [
        { id: 1, answer: 'Atlantic Ocean', isCorrect: false },
        { id: 2, answer: 'Arctic Ocean', isCorrect: false },
        { id: 3, answer: 'Indian Ocean', isCorrect: false },
        { id: 4, answer: 'Pacific Ocean', isCorrect: true },
      ],
      prize: '16,000',
    },
    {
      id: 7,
      question: 'Which scientist discovered the theory of relativity?',
      answers: [
        { id: 1, answer: 'Isaac Newton', isCorrect: false },
        { id: 2, answer: 'Albert Einstein', isCorrect: true },
        { id: 3, answer: 'Galileo Galilei', isCorrect: false },
        { id: 4, answer: 'Nikola Tesla', isCorrect: false },
      ],
      prize: '32,000',
    },
    {
      id: 8,
      question: 'What is the largest planet in our solar system?',
      answers: [
        { id: 1, answer: 'Jupiter', isCorrect: true },
        { id: 2, answer: 'Saturn', isCorrect: false },
        { id: 3, answer: 'Neptune', isCorrect: false },
        { id: 4, answer: 'Uranus', isCorrect: false },
      ],
      prize: '64,000',
    },
    {
      id: 9,
      question: "Who painted the famous artwork 'The Starry Night'?",
      answers: [
        { id: 1, answer: 'Vincent van Gogh', isCorrect: true },
        { id: 2, answer: 'Leonardo da Vinci', isCorrect: false },
        { id: 3, answer: 'Pablo Picasso', isCorrect: false },
        { id: 4, answer: 'Michelangelo', isCorrect: false },
      ],
      prize: '125,000',
    },
    {
      id: 10,
      question: 'What is the largest mammal on Earth?',
      answers: [
        { id: 1, answer: 'Elephant', isCorrect: false },
        { id: 2, answer: 'Blue whale', isCorrect: true },
        { id: 3, answer: 'Giraffe', isCorrect: false },
        { id: 4, answer: 'Hippopotamus', isCorrect: false },
      ],
      prize: '250,000',
    },
    {
      id: 11,
      question: "Who is the author of the 'Harry Potter' book series?",
      answers: [
        { id: 1, answer: 'J.K. Rowling', isCorrect: true },
        { id: 2, answer: 'Stephen King', isCorrect: false },
        { id: 3, answer: 'George R.R. Martin', isCorrect: false },
        { id: 4, answer: 'Dan Brown', isCorrect: false },
      ],
      prize: '500,000',
    },
    {
      id: 12,
      question: "Which country is known as the 'Land of the Rising Sun'?",
      answers: [
        { id: 1, answer: 'China', isCorrect: false },
        { id: 2, answer: 'Japan', isCorrect: true },
        { id: 3, answer: 'South Korea', isCorrect: false },
        { id: 4, answer: 'Vietnam', isCorrect: false },
      ],
      prize: '1,000,000',
    },
  ],
};
