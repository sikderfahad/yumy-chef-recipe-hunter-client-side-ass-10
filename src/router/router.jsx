import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Root from "../layout/Root/Root";
import AnimatedBackground from "../components/AnimatedBackground/AnimatedBackground";
import Register from "../pages/Register/Register";
import TestPage from "../pages/TestPage/TestPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/exp",
        element: <TestPage></TestPage>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
