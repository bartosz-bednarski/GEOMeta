import Button from "../globals/Button";
import classes from "./topic.module.scss";
import { useState } from "react";
const anonymous = (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
    <path d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z" />
  </svg>
);
const AddTopic = (props) => {
  const [topicValue, setTopicValue] = useState("");
  const username = localStorage.getItem("username");
  const iconBackgroundColor = localStorage.getItem("iconBackgroundColor");
  const accessToken = localStorage.getItem("accessToken");
  const usernameShort = localStorage.getItem("usernameShort");
  const submitHandler = async (event) => {
    event.preventDefault();
    if (topicValue.length > 6 && accessToken) {
      const response = await fetch(
        "https://geo-meta-rest-api.vercel.app/api/forum/createTopic",
        // "http://localhost:9001/api/forum/createTopic",
        {
          method: "POST",
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({
            usernameShort: usernameShort,
            topic: topicValue,
            iconBackgroundColor: iconBackgroundColor,
          }),
        }
      );
      const data = await response.json();
      setTopicValue("");
      props.onUpdate();
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
            Bartosz
          </span>
          <span
            className={
              classes["topic-container__user-container__user-box__date"]
            }
          >
            19 Paź 2023
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
