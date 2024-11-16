 import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Pages/Layout';
import Hero from './Components/Hero';
import Blogs from './Components/Blogs';
import Bookmarks from './Components/Bookmarks';
import BlogDetails from './Components/BlogDetails';
import Content from './Components/Content';
import Author from './Components/Author';
import   { Toaster } from 'react-hot-toast';
import React from 'react';
let router=createBrowserRouter([
  {
     path:'/',
     element:<Layout></Layout>,
     children:[
      {
        path:'/',
        element:<Hero></Hero>
      },
      {
        path:'/blogs',
        loader:()=>fetch('https://dev.to/api/articles?per_page=200&top=7'),
        element:<Blogs></Blogs>
      },
      {
        path:'/blog/:id',
        loader:({params})=>fetch(`https://dev.to/api/articles/${params?.id}`),
        element:<BlogDetails></BlogDetails>,
        children:[
          {
         path:'',
         loader:({params})=>fetch(`https://dev.to/api/articles/${params?.id}`),
           element:<Content></Content>
          },
          {
            path:'author',
            loader:({params})=>fetch(`https://dev.to/api/articles/${params?.id}`),
            element:<Author></Author>
          }
        ]
      },
      {
        path:'/bookmarks',
        element:<Bookmarks></Bookmarks>
      }
     ]
  }
])
 

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Toaster />
    <RouterProvider router={router} />
  </React.StrictMode>
)
