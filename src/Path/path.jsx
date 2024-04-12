import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Routes/Home";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:'/home',
            element:<Home></Home>,
            loader: () => fetch('/poperty.json')
        }
      ]
    },
  ]);

  export default router;