import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Pages/Layout';

let router=createBrowserRouter([
  {
     path:'/',
     element:<Layout></Layout>
  }
])
 

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>

 </RouterProvider>
)
