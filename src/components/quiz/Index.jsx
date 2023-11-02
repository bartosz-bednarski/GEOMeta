import QuizLogo from "../ui/QuizLogo";
import classes from "./quiz.module.scss";
import Button from "../ui/Button";
import QuizTypeBox from "./QuizTypeBox";
import ContinentImg from "../../assets/images/forum/continent.png";
import FlagImg from "../../assets/images/forum/chileFlag.svg";
import EmblemImg from "../../assets/images/forum/chileEmblem.svg";
import PlateImg from "../../assets/images/forum/colombia.jpg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
const Quiz = () => {
  const navigate = useNavigate();
  const [quizSelected, setQuizSelected] = useState(false);
  return (
    <div className={classes["quiz-container"]}>
      <div className={classes["quiz-container__about-container"]}>
        <QuizLogo />
        <h1>Geo Quiz</h1>
        <h2>
          Sprawdź swoją Wiedzę o Miejscach
          <br /> na Ziemi
        </h2>
        <Button content="Dowiedz się więcej" />
      </div>
      <div
        className={classes["quiz-container__types-container"]}
        style={quizSelected === true ? { pointerEvents: "none" } : {}}
      >
        <QuizTypeBox
          img={FlagImg}
          type="FLAGI"
          onClick={() => {
            setQuizSelected(true);
            navigate("flags");
          }}
        />
        <QuizTypeBox
          img={EmblemImg}
          type="GODŁA"
          onClick={() => {
            setQuizSelected(true);
            navigate("emblems");
          }}
        />
        <QuizTypeBox
          img={PlateImg}
          type="REJESTRACJE"
          onClick={() => {
            setQuizSelected(true);
            navigate("plates");
          }}
        />
        {/* <QuizTypeBox img={ContinentImg} type="KONTYNENTY" /> */}
      </div>
    </div>
  );
};
export default Quiz;
