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
        path:'/bookmarks',
        element:<Bookmarks></Bookmarks>
      }
     ]
  }
])
 

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>

 </RouterProvider>
)
