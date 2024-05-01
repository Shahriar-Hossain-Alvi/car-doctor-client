import { createBrowserRouter } from "react-router-dom";
import MainRoute from "../Layout/MainRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainRoute></MainRoute>,
      children: [
        {
          path: "/",
        }
      ]
    },
  ]);

  export default router;