import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ContinentsPage from "./pages/Continents";
import ForumPage from "./pages/Forum";
import IslandsPage from "./pages/Islands";
import OtherPage from "./pages/Other";
import TrekkersPage from "./pages/Trekkers";
import CountryPage from "./pages/Country";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import TopicPage from "./pages/Topic";
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
        path: "others",
        element: <OtherPage />,
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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
