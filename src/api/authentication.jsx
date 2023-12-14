export const loginAuth = async (login, password) => {
  const response = await fetch(
    "https://geo-meta-rest-api.vercel.app/api/users/login",
    // "http://localhost:9001/api/users/login",
    {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: login, password: password }),
    }
  );
  const data = await response.json();
  return data;
};
export const registerAuth = async (login, email, password) => {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  const response = await fetch(
    "https://geo-meta-rest-api.vercel.app/api/users/register",
    {
      method: "POST",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: login,
        email: email,
        password: password,
        iconBackgroundColor: randomColor,
      }),
    }
  );
  const data = await response.json();
  return data;
};
