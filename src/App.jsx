import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useEffect } from "react";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ContinentsPage from "./pages/Continents";
import ForumPage from "./pages/Forum";
import IslandsPage from "./pages/Islands";
import QuizPage from "./pages/Quiz";
import TrekkersPage from "./pages/Trekkers";
import CountryPage from "./pages/Country";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import TopicPage from "./pages/Topic";
import QuizTypePage from "./pages/QuizType";
import ProfilePage from "./pages/Profile";
import { useSelector, useDispatch } from "react-redux";
import { checkAuth } from "./redux/auth-reducer";
import PrivacyPage from "./pages/Privacy";
const quizTypeLoader = async ({ params }) => {
  const url = `https://geo-meta-rest-api.vercel.app/api/quiz/get${
    params.quizType[0].toUpperCase() + params.quizType.slice(1)
  }`;
  // const url = `http://localhost:9001/api/quiz/get${
  //   params.quizType[0].toUpperCase() + params.quizType.slice(1)
  // }`;
  const response = await fetch(url, { mode: "cors" });
  const data = await response.json();
  return data;
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "continents",
        element: <ContinentsPage />,
      },
      {
        path: "continents/:countryId",
        element: <CountryPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://geo-meta-rest-api.vercel.app/api/countries/${params.countryId}`,
            { mode: "cors" }
          );
          const data = await response.json();
          return data;
        },
      },
      {
        path: "forum",
        element: <ForumPage />,
      },
      {
        path: "forum/:topicId",
        element: <TopicPage />,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://geo-meta-rest-api.vercel.app/api/forum/${params.topicId}/getComments`,
            { mode: "cors" }
          );
          const data = await response.json();
          return data;
        },
      },
      {
        path: "islands",
        element: <IslandsPage />,
      },
      {
        path: "quiz",
        element: <QuizPage />,
      },
      {
        path: "quiz/:quizType",
        element: <QuizTypePage />,
        loader: quizTypeLoader,
      },
      {
        path: "trekkers",
        element: <TrekkersPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "profile",
        element: <ProfilePage />,
      },
      {
        path: "privacy",
        element: <PrivacyPage />,
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.loggedIn);
  useEffect(() => {
    const username = localStorage.getItem("userName");
    if (username !== "" && !authStatus) {
      const iconBackgroundColor = localStorage.getItem("iconBackgroundColor");
      const email = localStorage.getItem("email");
      const usernameShort = localStorage.getItem("usernameShort");
      const accessToken = localStorage.getItem("accessToken");
      dispatch(
        checkAuth({
          accessToken: accessToken,
          email: email,
          iconBackgroundColor: iconBackgroundColor,
          userName: username,
          usernameShort: usernameShort,
        })
      );
    }
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
