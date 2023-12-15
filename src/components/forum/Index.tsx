import React from "react";
import Loader from "../ui/Loader";
import AddTopic from "./AddTopic.tsx";
import Headers from "./Headers.tsx";
import TopicBox from "./TopicBox.tsx";
import classes from "./forum.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getTopics } from "../../api/forum";
import { topics } from "forum";
const Forum: React.FC = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [topics, setTopics] = useState<topics>([
    {
      comments: [
        {
          date: "",
          iconBackgroundColor: "",
          time: "",
          usernameShort: "",
        },
      ],
      date: "",
      dateString: "",
      iconBackgroundColor: "",
      latestUpdate: "",
      timeString: "",
      topic: "",
      topic_id: "",
      username: "",
      usernameShort: "",
      _id: "",
    },
  ]);
  const [temporaryUpdateHelper, setTemporaryUpdateHelper] =
    useState<boolean>(false);
  const [loaderShown, setLoaderShown] = useState<boolean>(true);
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
      {topics[0].date !== "" &&
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
              key={item.topic_id}
              commentsArr={item.comments}
              type=""
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
