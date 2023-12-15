import classes from "./quiz.module.scss";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import QuizView from "./QuizView";
import QuizScore from "./QuizScore";
import { useAppDispatch } from "../../../redux/hooks";
import { updateAchievements } from "../../../redux/achievements-reducer";
import Loader from "../../ui/Loader";
import { postUserAnswers } from "../../../api/quiz";
const QuizType = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const accessToken = localStorage.getItem("accessToken");
  const loader = useLoaderData();
  const data = loader.data;
  const [questions, setQuestions] = useState({
    id: 0,
    question: loader.data[0].question,
    data: loader.data[0].data,
    updated: false,
  });
  const [getAnswers, setGetAnswers] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [serverAnswers, setServerAnswers] = useState("");
  const [userScore, setUserScore] = useState(0);
  const [isFetching, setIsFetching] = useState(false);
  const setQuestionsHandler = () => {
    setQuestions((prevState) => {
      if (prevState.id < 4) {
        return {
          id: prevState.id + 1,
          question: data[prevState.id + 1].question,
          data: data[prevState.id + 1].data,
        };
      }
      if (prevState.id === 4) {
        setGetAnswers(true);
        return {
          id: 5,
          question: "",
          data: "",
        };
      }
    });
  };

  const postUserAnswersHandler = async () => {
    setIsFetching(true);
    const data = await postUserAnswers(
      accessToken,
      params.quizType,
      userAnswers
    );
    setIsFetching(false);
    if ((data.message = "ok")) {
      dispatch(updateAchievements());
      setServerAnswers(data.data.user_correct_answers);
      setUserScore(data.data.user_score);
    }
  };

  useEffect(() => {
    if (getAnswers === true) {
      postUserAnswersHandler();
    }
  }, [getAnswers]);
  if (isFetching) {
    return <Loader />;
  }
  return (
    <div className={classes["flags-layout"]}>
      {questions.id !== 5 && (
        <QuizView
          data={data}
          setQuestionsHandler={setQuestionsHandler}
          setUserAnswers={(answers) => setUserAnswers(answers)}
          questions={questions}
          userAnswers={userAnswers}
        />
      )}
      {serverAnswers !== "" && (
        <QuizScore serverAnswers={serverAnswers} userScore={userScore} />
      )}
    </div>
  );
};
export default QuizType;
