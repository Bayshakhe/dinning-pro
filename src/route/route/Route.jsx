import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/home/Home";
import Blog from "../../pages/blog/Blog";
import Login from "../../pages/login/Login";
import Register from "../../pages/register/Register";
import HomeLayout from "../../layouts/homeLayout/HomeLayout";
import RecipeDetails from "../../pages/recipeDetails/RecipeDetails";
import ErrorPage from "../../components/errorPage/ErrorPage";
import PrivateRoute from "../privateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`https://dining-pro-server-bayshakhe.vercel.app/chef`),
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <RecipeDetails></RecipeDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://dining-pro-server-bayshakhe.vercel.app/chef/${params.id}`
          ),
      },
      {
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
    ],
  },
]);

export default router;
