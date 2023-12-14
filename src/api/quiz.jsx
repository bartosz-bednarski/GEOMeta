export const postUserAnswers = async (accessToken, quizType, userAnswers) => {
  const url = accessToken
    ? `https://geo-meta-rest-api.vercel.app/api/quiz/post${
        quizType[0].toUpperCase() + quizType.slice(1)
      }/auth`
    : `https://geo-meta-rest-api.vercel.app/api/quiz/post${
        quizType[0].toUpperCase() + quizType.slice(1)
      }`;
  // const url = accessToken
  //   ? `http://localhost:9001/api/quiz/post${
  //       quizType[0].toUpperCase() + quizType.slice(1)
  //     }/auth`
  //   : `http://localhost:9001/api/quiz/post${
  //       quizType[0].toUpperCase() + quizType.slice(1)
  //     }`;
  const response = await fetch(url, {
    method: "POST",
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(userAnswers),
  });
  const data = await response.json();
  return data;
};
