import classes from "./topic.module.scss";
const TopicBox = (props) => {
  console.log(props.data);
  return (
    <div
      className={classes["topic-container"]}
      id={props.data.topic_id}
      onClick={props.onClick}
    >
      <div className={classes["topic-container__user-container"]}>
        <div className={classes["topic-container__user-container__icon-box"]}>
          {props.data.usernameShort}
        </div>
        <div className={classes["topic-container__user-container__user-box"]}>
          <span
            className={
              classes["topic-container__user-container__user-box__username"]
            }
          >
            {props.data.username}
          </span>
          <span
            className={
              classes["topic-container__user-container__user-box__date"]
            }
          >
            {props.data.dateString}
          </span>
        </div>
      </div>
      <div
        className={classes["topic-container__question-box"]}
        style={props.type === "comments" ? { width: "100%" } : {}}
      >
        <div className={classes["topic-container__question-box__question"]}>
          {props.data.topic}
        </div>
      </div>
      {props.type !== "comments" && (
        <div className={classes["topic-container__answers-container"]}>
          <div
            className={
              classes["topic-container__answers-container__answers-box"]
            }
          >
            <div
              className={
                classes[
                  "topic-container__answers-container__answers-box__icons-box"
                ]
              }
            >
              <span
                className={
                  classes[
                    "topic-container__answers-container__answers-box__icons-box__icon"
                  ]
                }
              >
                BB
              </span>
              <span
                className={
                  classes[
                    "topic-container__answers-container__answers-box__icons-box__icon"
                  ]
                }
              >
                BB
              </span>
              <span
                className={
                  classes[
                    "topic-container__answers-container__answers-box__icons-box__icon"
                  ]
                }
              >
                BB
              </span>
            </div>
            <span
              className={
                classes[
                  "topic-container__answers-container__answers-box__number"
                ]
              }
            >
              +40
            </span>
          </div>
          <div
            className={
              classes["topic-container__answers-container__last-post-box"]
            }
          >
            <span
              className={
                classes[
                  "topic-container__answers-container__last-post-box__data"
                ]
              }
            >
              {props.data.dateString}
            </span>
            <span
              className={
                classes[
                  "topic-container__answers-container__last-post-box__data"
                ]
              }
            >
              {props.data.timeString}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopicBox;
