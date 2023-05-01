import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import Blog from "../../pages/blog/Blog";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children:[
        {
            path: "/blog",
            element: <Blog></Blog>
        }
      ]
    },
    {
        path: "/login",
        element: <div>this is log in path</div>
    }
  ]);

export default router;