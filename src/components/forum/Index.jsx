import Loader from "../ui/Loader";
import AddTopic from "./AddTopic";
import Headers from "./Headers";
import TopicBox from "./TopicBox";
import classes from "./forum.module.scss";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Forum = () => {
  const accessToken = localStorage.getItem("accessToken");
  const navigate = useNavigate();
  const [topics, setTopics] = useState("");
  const [temporaryUpdateHelper, setTemporaryUpdateHelper] = useState(false);
  const [loaderShown, setLoaderShown] = useState(true);
  useEffect(() => {
    const getTopics = async () => {
      const response = await fetch(
        "https://geo-meta-rest-api.vercel.app/api/forum/getTopics",
        // "http://localhost:9001/api/forum/getTopics",
        {
          method: "GET",
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      setLoaderShown(false);
      console.log(data);
      setTopics(data);
    };
    getTopics();
  }, [temporaryUpdateHelper]);
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
        topics.data.toReversed().map((item) => {
          const {
            date,
            dateString,
            timeString,
            topic,
            topic_id,
            username,
            usernameShort,
          } = item;
          console.log(item);
          return (
            <TopicBox
              data={item}
              key={item.topic_id}
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
