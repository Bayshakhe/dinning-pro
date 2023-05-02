import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import Blog from "../../pages/blog/Blog";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import HomeLayout from "../../layouts/homeLayout/HomeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },{
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ]
  },
  
]);

export default router;
