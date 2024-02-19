import React from 'react'
import App from "./App"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Abouts from "./components/About"
import Blogs from "./components/Blog"
import Shops from "./components/Shop"


export default function index() {
    const router = createBrowserRouter([
        {
          path : '/',
          element : <App />
        },
        {
          path:'/home',
          element:<App />
        },
        {
            path : '/about',
            element : <Abouts />
        },
        {
            path : '/blog',
            element : <Blogs />
        },
        {
            path : '/shop',
            element : <Shops />
        }
    ])

      return (
              <>
                <RouterProvider router={router} />
              </>
            
      );
    }
