import { useParams, useLocation, useLoaderData } from "react-router-dom";
import { useState, useEffect } from "react";
import classes from "./topic.module.scss";
import TopicBox from "../TopicBox";
import Comment from "./Comment";
import AddComment from "./AddComment";
const Topic = (props) => {
  let { topicId } = useParams();
  const location = useLocation();
  const loader = useLoaderData();
  const [comments, setComments] = useState(loader.data);
  const [commentsUpdated, setCommentsUpdated] = useState(false);
  useEffect(() => {
    if (commentsUpdated === true) {
      const refreshComments = async () => {
        const response = await fetch(
          `https://geo-meta-rest-api.vercel.app/api/forum/${topicId}/getComments`,
          { mode: "cors" }
        );
        const data = await response.json();
        setComments(data.data);
        return data;
      };
      refreshComments();
      setCommentsUpdated(false);
    }
  }, [commentsUpdated]);

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
          <Comment data={comment} />
        ))}
      </div>
      <AddComment
        data={location.state}
        onCommentsUpdate={() => setCommentsUpdated(true)}
      />
    </div>
  );
};
export default Topic;
