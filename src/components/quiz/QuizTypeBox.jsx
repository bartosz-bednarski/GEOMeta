import classes from "./quizTypeBox.module.scss";

const QuizTypeBox = (props) => {
  return (
    <div className={classes["quiz-type-container"]} onClick={props.onClick}>
      <div className={classes["quiz-type-container__type-box"]}>
        <img src={props.img} />
      </div>
      {props.type}
    </div>
  );
};
export default QuizTypeBox;
