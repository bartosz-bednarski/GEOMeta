import { useState } from "react";
import classes from "./quizTypeBox.module.scss";
import LoaderSm from "../ui/LoaderSm";

const QuizTypeBox = ({ img, type, onClick }) => {
  const [loader, setLoader] = useState(false);
  return (
    <div
      className={classes["quiz-type-container"]}
      onClick={() => {
        onClick();
        setLoader(true);
      }}
    >
      <div className={classes["quiz-type-container__type-box"]}>
        {loader ? <LoaderSm /> : <img src={img} alt="quiz-type-icon" />}
      </div>
      {type}
    </div>
  );
};
export default QuizTypeBox;
