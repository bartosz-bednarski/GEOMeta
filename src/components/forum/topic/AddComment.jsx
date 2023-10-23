import { useNavigate } from "react-router-dom";
import classes from "./addComment.module.scss";
import { useState } from "react";
const anonymous = (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
    <path d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z" />
  </svg>
);
const AddComment = (props) => {
  const iconBackgroundColor = localStorage.getItem("iconBackgroundColor");
  const usernameShort = localStorage.getItem("usernameShort");
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [inputText, setInputText] = useState("");
  console.log(props.data);
  const submitHandler = async (event) => {
    event.preventDefault();
    const url = accessToken
      ? `https://geo-meta-rest-api.vercel.app/api/forum/${props.data.topic_id}/createComment/authorized`
      : `https://geo-meta-rest-api.vercel.app/api/forum/${props.data.topic_id}/createComment/unauthorized`;
    // const url = accessToken
    //   ? `http://localhost:9001/api/forum/${props.data.topic_id}/createComment/authorized`
    //   : `http://localhost:9001/api/forum/${props.data.topic_id}/createComment/unauthorized`;
    if (inputText !== "") {
      const response = await fetch(url, {
        method: "POST",
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          topic_id: props.data.topic_id,
          usernameShort: props.data.usernameShort,
          iconBackgroundColor: iconBackgroundColor ? iconBackgroundColor : "",
          content: inputText,
        }),
      });
      const data = await response.json();
      setInputText("");
      props.onCommentsUpdate();
      // navigate(".", { replace: true });
    }
    console.log(inputText);
  };
  return (
    <form className={classes["input-container"]} onSubmit={submitHandler}>
      <span
        className={classes["input-container__username-box"]}
        style={
          iconBackgroundColor
            ? { backgroundColor: iconBackgroundColor }
            : { backgroundColor: "#2baad7" }
        }
      >
        {usernameShort ? usernameShort : anonymous}
      </span>
      <textarea
        className={classes["input-container__input"]}
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className={classes["input-container__button"]} type="submit">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 448 512"
        >
          <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z" />
        </svg>
      </button>
    </form>
  );
};
export default AddComment;
