import App from "@/App";
import AdminLayout from "@/layout/AdminLayout";
import AddService from "@/pages/admin/AddService";
import Dashboard from "@/pages/admin/Dashboard";
import ServiceList from "@/pages/admin/ServiceList";
import Home from "@/pages/home";
import About from "@/pages/home/About";
import { Navigate, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index:true,
        element:<Navigate to={"/admin/dashboard"}/>
      },
      {
        path: "dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "addservice",
        element: <AddService></AddService>,
      },
      {
        path: "servicelist",
        element: <ServiceList></ServiceList>,
      },
    ],
  },
]);
    export default router; 