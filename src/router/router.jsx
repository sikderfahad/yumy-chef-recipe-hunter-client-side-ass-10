import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Root from "../layout/Root/Root";
import AnimatedBackground from "../components/AnimatedBackground/AnimatedBackground";
import LoginOption from "../pages/LoginOption/LoginOption";

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
        path: "/login-option",
        element: <LoginOption></LoginOption>,
      },
      {
        path: "/exp",
        element: <AnimatedBackground></AnimatedBackground>,
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

export default router;
