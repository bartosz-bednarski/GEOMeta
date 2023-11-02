import { useState } from "react";
import classes from "./quizTypeBox.module.scss";

const QuizTypeBox = (props) => {
  const [loader, setLoader] = useState(false);
  return (
    <div
      className={classes["quiz-type-container"]}
      onClick={() => {
        props.onClick();
        setLoader(true);
      }}
    >
      <div className={classes["quiz-type-container__type-box"]}>
        {loader ? (
          <span
            className={classes["quiz-type-container__type-box__loader"]}
          ></span>
        ) : (
          <img src={props.img} />
        )}
      </div>
      {props.type}
    </div>
  );
};
export default QuizTypeBox;
