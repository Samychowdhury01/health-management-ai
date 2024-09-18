import MainLayout from "@/components/layouts/MainLayout";
import Auth from "@/pages/Auth/Auth";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children: [
        {
            path: "/",
            element: <Home/>,
        }, 
        {
            path: "/auth",
            element: <Auth/>,
        }, 
      ]
    },
  ]);