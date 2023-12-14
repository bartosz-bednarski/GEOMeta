import Loader from "../ui/Loader";
import AddTopic from "./AddTopic";
import Headers from "./Headers";
import TopicBox from "./TopicBox";
import classes from "./forum.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTopics } from "../../api/forum";
const Forum = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [topics, setTopics] = useState("");
  const [temporaryUpdateHelper, setTemporaryUpdateHelper] = useState(false);
  const [loaderShown, setLoaderShown] = useState(true);
  useEffect(() => {
    const setTopicsHandler = async () => {
      setTopics(await getTopics(accessToken));
      setLoaderShown(false);
    };
    setTopicsHandler();
  }, [temporaryUpdateHelper, accessToken]);
  if (loaderShown) {
    return <Loader />;
  }
  return (
    <div className={classes["forum-container"]}>
      {accessToken && (
        <AddTopic
          onUpdate={() => setTemporaryUpdateHelper(!temporaryUpdateHelper)}
        />
      )}

      <Headers />
      {topics !== "" &&
        topics.map((item) => {
          const {
            date,
            dateString,
            timeString,
            topic,
            topic_id,
            username,
            usernameShort,
          } = item;
          return (
            <TopicBox
              topic_id={item.topic_id}
              iconBackgroundColor={item.iconBackgroundColor}
              dateString={item.dateString}
              timeString={item.timeString}
              topic={item.topic}
              username={item.username}
              usernameShort={item.usernameShort}
              data={item}
              date={item.date}
              key={item.topic_id}
              commentsArr={item.comments}
              onClick={() =>
                navigate(item.topic_id, {
                  state: {
                    date: date,
                    dateString: dateString,
                    timeString: timeString,
                    topic: topic,
                    topic_id: topic_id,
                    username: username,
                    usernameShort: usernameShort,
                  },
                })
              }
            />
          );
        })}
    </div>
  );
};
export default Forum;
