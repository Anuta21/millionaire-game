interface IAnswer {
  id: number;
  answer: string;
  isCorrect: boolean;
}

export interface IQuestionStep {
  id: number;
  question: string;
  answers: Array<IAnswer>;
  prize: string;
}

export interface IGameInfoContent {
  gameName: string;
  stepsNumber: number;
  questionSteps: Array<IQuestionStep>;
}
