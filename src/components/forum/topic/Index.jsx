import { useParams, useLocation, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./topic.module.scss";
import Comment from "./Comment";
import AddComment from "./AddComment";
import { getComments } from "../../../api/forum";
const Topic = () => {
  let { topicId } = useParams();
  const location = useLocation();
  const loader = useLoaderData();
  const [comments, setComments] = useState(loader.data);
  const [commentsUpdated, setCommentsUpdated] = useState(false);
  useEffect(() => {
    if (commentsUpdated === true) {
      const refreshComments = async () => {
        setComments(await getComments(topicId));
      };
      refreshComments();
      setCommentsUpdated(false);
    }
  }, [commentsUpdated, topicId]);

  return (
    <div className={classes["topic-container"]}>
      <div className={classes["topic-box"]} id={location.state.topic_id}>
        <div className={classes["topic-box__user-container"]}>
          <div className={classes["topic-box__user-container__icon-box"]}>
            {location.state.usernameShort}
          </div>
          <div className={classes["topic-box__user-container__user-box"]}>
            <span
              className={
                classes["topic-box__user-container__user-box__username"]
              }
            >
              {location.state.username}
            </span>
            <span
              className={classes["topic-box__user-container__user-box__date"]}
            >
              {location.state.dateString}
            </span>
          </div>
        </div>
        <div className={classes["topic-box__question-box"]}>
          <div className={classes["topic-box__question-box__question"]}>
            {location.state.topic}
          </div>
        </div>
      </div>
      <div className={classes["topic-container__comments-section"]}>
        {comments.map((comment) => (
          <Comment
            data={comment}
            username={comment.username}
            iconBackgroundColor={comment.iconBackgroundColor}
            usernameShort={comment.usernameShort}
            content={comment.content}
            dateString={comment.dateString}
            timeString={comment.timeString}
          />
        ))}
      </div>
      <AddComment
        onCommentsUpdate={() => setCommentsUpdated(true)}
        topicId={location.state.topic_id}
      />
    </div>
  );
};
export default Topic;
