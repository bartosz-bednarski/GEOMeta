import AddTopic from "./AddTopic";
import Headers from "./Headers";
import Topic from "./Topic";
import classes from "./forum.module.scss";
import { useState, useEffect } from "react";
const Forum = () => {
  const accessToken = localStorage.getItem("accessToken");
  const [topics, setTopics] = useState("");
  const [temporaryUpdateHelper, setTemporaryUpdateHelper] = useState(false);
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
      setTopics(data);
    };
    getTopics();
  }, [temporaryUpdateHelper]);

  return (
    <div className={classes["forum-container"]}>
      {accessToken && (
        <AddTopic
          onUpdate={() => setTemporaryUpdateHelper(!temporaryUpdateHelper)}
        />
      )}

      <Headers />
      {topics !== "" &&
        topics.data.toReversed().map((topic) => {
          return <Topic data={topic} key={topic._id} />;
        })}
    </div>
  );
};
export default Forum;
