import App from "@/App";
import About from "@/pages/About";
import Home from "@/pages/home";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
      {
        path:"/",
        element:<App/>,
        children:[
            {
                  path:"/",
                  element:<Home></Home>
            },
            {
                  path:'about',
                  element:<About></About>
            }
        ]
      },
    ]);
    export default router; 