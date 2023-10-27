import { useParams } from "react-router-dom";
import FlagsQuiz from "../components/quiz/flags/Index";
import EmblemsQuiz from "../components/quiz/emblems/Index";
const QuizTypePage = () => {
  const params = useParams();
  const quizType = params.quizType;
  return (
    <>
      {quizType === "flags" && <FlagsQuiz />}
      {quizType === "emblems" && <EmblemsQuiz />}
    </>
  );
};

export default QuizTypePage;
