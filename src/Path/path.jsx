import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Routes/Home";
import Register from "../Routes/Register";
import Login from "../Routes/Login";
import Details from "../Routes/Details";
import Private from "../Routes/Private";


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
            path:'/details/:id',
            element:<Private><Details></Details></Private>,
            loader: () => fetch('/public/poperty.json')
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;