import AddMedicine from "@/components/dashboard/AddMedicine";
import DashboardLayout from "@/components/layouts/DashboardLayout";
import MainLayout from "@/components/layouts/MainLayout";
import Auth from "@/pages/Auth/Auth";
import Chat from "@/pages/Chat/Chat";
import Profile from "@/pages/Dashboard/Profile";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/auth",
        element: <Auth />,
      },
      {
        path: "/chat",
        element: <Chat />,
        
      },
      {
        path: "/chat/:id",
        element: <Chat />,
        
      },
      
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile/>,
      },
      {
        path: "/dashboard/add-medicine",
        element: <AddMedicine/>,
      },
    ],
  },
]);
