import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Layout/MainRoute";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        }
      ]
    },
  ]);

  export default router;