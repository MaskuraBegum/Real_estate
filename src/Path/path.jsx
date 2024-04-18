import {
    createBrowserRouter
  } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Routes/Home";
import Register from "../Routes/Register";
import Login from "../Routes/Login";
import Details from "../Routes/Details";
import Private from "../Routes/Private";
import Profile from "../Routes/Profile";
import Update from "../Routes/Update";
import Error from "../Routes/Error";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<Error></Error>,
      children:[
        {
            path:'/',
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
          path:'/profile',
          element:<Private><Profile></Profile></Private>
        },
        {
          path:'/update',
          element:<Private><Update></Update></Private>
        },
        {
            path:'/login',
            element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;