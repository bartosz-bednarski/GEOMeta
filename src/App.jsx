import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import ContinentsPage from "./pages/Continents";
import ForumPage from "./pages/Forum";
import IslandsPage from "./pages/Islands";
import OtherPage from "./pages/Other";
import TrekkersPage from "./pages/Trekkers";
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
        path: "forum",
        element: <ForumPage />,
      },
      {
        path: "islands",
        element: <IslandsPage />,
      },
      {
        path: "other",
        element: <OtherPage />,
      },
      {
        path: "trekkers",
        element: <TrekkersPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
