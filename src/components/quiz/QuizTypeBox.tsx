import React from "react";
import { useState } from "react";
import classes from "./quizTypeBox.module.scss";
import LoaderSm from "../ui/LoaderSm";
import { quizTypeBoxProps } from "quiz";

const QuizTypeBox: React.FC<quizTypeBoxProps> = ({ img, type, onClick }) => {
  const [loader, setLoader] = useState<boolean>(false);
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
