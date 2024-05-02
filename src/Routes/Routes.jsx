import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Layout/MainRoute";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        }
      ]
    },
  ]);

  export default router;