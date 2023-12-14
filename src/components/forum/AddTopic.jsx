import { addTopics } from "../../api/forum";
import Button from "../ui/Button";
import classes from "./topic.module.scss";
import { useState } from "react";
import { getTodayDateString } from "../../utils/time";
const AddTopic = ({ onUpdate }) => {
  const [topicValue, setTopicValue] = useState("");
  const iconBackgroundColor = localStorage.getItem("iconBackgroundColor");
  const accessToken = localStorage.getItem("accessToken");
  const usernameShort = localStorage.getItem("usernameShort");
  const userName = localStorage.getItem("userName");
  const submitHandler = async (event) => {
    event.preventDefault();
    if (topicValue.length > 6 && accessToken) {
      await addTopics(
        accessToken,
        usernameShort,
        topicValue,
        iconBackgroundColor
      );
      setTopicValue("");
      onUpdate();
    }
  };
  return (
    <div className={classes["topic-container"]}>
      <div className={classes["topic-container__user-container"]}>
        <div
          className={classes["topic-container__user-container__icon-box"]}
          style={{ backgroundColor: iconBackgroundColor }}
        >
          {usernameShort}
        </div>
        <div className={classes["topic-container__user-container__user-box"]}>
          <span
            className={
              classes["topic-container__user-container__user-box__username"]
            }
          >
            {userName}
          </span>
          <span
            className={
              classes["topic-container__user-container__user-box__date"]
            }
          >
            {getTodayDateString()}
          </span>
        </div>
      </div>
      <form
        className={classes["topic-container__input-container"]}
        onSubmit={submitHandler}
      >
        <input
          className={classes["topic-container__input-container__input"]}
          value={topicValue}
          onChange={(e) => setTopicValue(e.target.value)}
          minLength={7}
        ></input>
        <Button content="Opublikuj" type="submit" />
      </form>
    </div>
  );
};
export default AddTopic;
