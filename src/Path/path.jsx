import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Routes/Home";
import Register from "../Routes/Register";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/home',
            element:<Home></Home>,
            loader: () => fetch('/poperty.json')
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

  export default router;