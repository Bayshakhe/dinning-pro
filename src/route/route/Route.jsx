import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import Blog from "../../pages/blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/login",
    element: <div>this is log in path</div>,
  },
  {
    path: "/blog",
    element: <Blog></Blog>,
  },
]);

export default router;
