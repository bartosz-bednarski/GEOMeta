export type quizGameLoader = {
  data: [
    {
      answer: string;
      data: [
        {
          country_flag: string;
        }
      ];
      id: number;
      question: string;
    }
  ];
  message: string;
};

export type questions = {
  id: number;
  question: string;
  data: [
    {
      country_flag: string;
    }
  ];
  updated: boolean;
};
export type answers = {
  id: string;
  user_answer: string;
  correct_answer: string;
};
export type userAnswers = [
  { id: number; user_answer: string; correct_answer: string }
];
export type quizViewProps = {
  quizQuestions: [
    {
      answer: string;
      data: [
        {
          country_flag: string;
        }
      ];
      id: number;
      question: string;
    }
  ];
  setQuestionsHandler: () => void;
  setUserAnswers: (answers: userAnswers) => void;
  questions: questions;
  userAnswers: userAnswers;
};
export type quizTypeBoxProps = {
  img: string;
  type: "FLAGI" | "GODŁA" | "REJESTRACJE";
  onClick: () => void;
};
