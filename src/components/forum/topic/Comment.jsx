import classes from "./comment.module.scss";
const anonymous = (
  <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
    <path d="M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z" />
  </svg>
);
const Comment = ({
  username,
  iconBackgroundColor,
  usernameShort,
  content,
  dateString,
  timeString,
}) => {
  return (
    <div
      className={classes["comment-container"]}
      aria-label="comment-container"
    >
      <div className={classes["comment-container__username-box"]}>
        {username}
      </div>
      <div className={classes["comment-container__comment-box"]}>
        <span
          className={classes["comment-container__comment-box__username"]}
          style={{ backgroundColor: iconBackgroundColor }}
        >
          {usernameShort === "anonymous" ? anonymous : usernameShort}
        </span>
        <span className={classes["comment-container__comment-box__comment"]}>
          {content}
        </span>
      </div>
      <div className={classes["comment-container__date-box"]}>
        <div className={classes["comment-container__date-box__date"]}>
          {dateString}
        </div>
        <div className={classes["comment-container__date-box__time"]}>
          {timeString}
        </div>
      </div>
    </div>
  );
};
export default Comment;
