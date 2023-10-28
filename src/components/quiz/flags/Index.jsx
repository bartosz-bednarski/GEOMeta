import classes from "./flagsQuiz.module.scss";
import flag from "../../../assets/images/country/flags/chile.svg";
import { useEffect, useState } from "react";
const FlagsQuiz = () => {
  const [questions, setQuestions] = useState("");
  const [flags, setFlags] = useState("");
  const getFlags = async () => {
    const response = await fetch(
      "https://geo-meta-rest-api.vercel.app/api/quiz/getFlags",
      // "http://localhost:9001/api/quiz/getFlags",
      {
        method: "GET",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    setQuestions(data.data);
    console.log(data);
  };
  useEffect(() => {
    if (questions === "") {
      getFlags();
    }
  }, [questions]);
  return (
    <div className={classes["flags-layout"]}>
      <div className={classes["flags-layout__flags-container"]}>
        <h1>Wybierz flagę Chile</h1>
        <div className={classes["flags-layout__flags-container__flags-box"]}>
          <img src={flag} />
          <img src={flag} />
          <img src={flag} />
          <img src={flag} />
        </div>
        <span
          className={classes["flags-layout__flags-container__timer"]}
          onClick={() => console.log(flags)}
        >
          10
        </span>
        <span className={classes["flags-layout__flags-container__timer-box"]} />
      </div>
    </div>
  );
};
export default FlagsQuiz;
