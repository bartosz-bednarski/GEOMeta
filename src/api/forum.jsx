export const getTopics = async (accessToken) => {
  const response = await fetch(
    "https://geo-meta-rest-api.vercel.app/api/forum/getTopics",
    // "http://localhost:9001/api/forum/getTopics",
    {
      method: "GET",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
    }
  );
  const data = await response.json();
  const dataReversed = await data.data.toReversed();
  return dataReversed;
};
export const addTopics = async (
  accessToken,
  usernameShort,
  topicValue,
  iconBackgroundColor
) => {
  const response = await fetch(
    "https://geo-meta-rest-api.vercel.app/api/forum/createTopic",
    // "http://localhost:9001/api/forum/createTopic",
    {
      method: "POST",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        usernameShort: usernameShort,
        topic: topicValue,
        iconBackgroundColor: iconBackgroundColor,
      }),
    }
  );
  const data = await response.json();
  return data;
};
export const getComments = async (topicId) => {
  const response = await fetch(
    `https://geo-meta-rest-api.vercel.app/api/forum/${topicId}/getComments`,
    { mode: "cors" }
  );
  const data = await response.json();
  return data.data;
};
export const addComment = async (
  accessToken,
  topicId,
  usernameShort,
  iconBackgroundColor,
  inputText
) => {
  const url = accessToken
    ? `https://geo-meta-rest-api.vercel.app/api/forum/${topicId}/createComment/authorized`
    : `https://geo-meta-rest-api.vercel.app/api/forum/${topicId}/createComment/unauthorized`;
  // const url = accessToken
  //   ? `http://localhost:9001/api/forum/${topicId}/createComment/authorized`
  //   : `http://localhost:9001/api/forum/${topicId}/createComment/unauthorized`;
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      topic_id: topicId,
      usernameShort: usernameShort,
      iconBackgroundColor: iconBackgroundColor ? iconBackgroundColor : "",
      content: inputText,
    }),
  });
  const data = await response.json();
  return data;
};
