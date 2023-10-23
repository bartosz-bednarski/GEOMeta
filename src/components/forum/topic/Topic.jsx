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
  }, [commentsUpdated]);

  return (
    <div className={classes["topic-container"]}>
      <TopicBox data={location.state} type="comments" />
      <div className={classes["topic-container__comments-section"]}>
        {comments.map((comment) => (
          <Comment data={comment} />
        ))}
      </div>
      <AddComment
        data={location.state}
        onCommentsUpdate={() => setCommentsUpdated(!commentsUpdated)}
      />
    </div>
  );
};
export default Topic;
