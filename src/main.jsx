import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import router from "./route/route/Route.jsx";
import AuthProvider, {
  AuthContext,
} from "./providers/authProvider/AuthProvider.jsx";
import '@smastrom/react-rating/style.css';
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </AuthProvider>
  </React.StrictMode>
);
