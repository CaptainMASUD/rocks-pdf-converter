import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Feature from './Components/Features/Feature';
import About from './Components/About/About';

const router = createBrowserRouter([
{
  path : '/',
  element : <Layout/>,
  children : [
    {
      path:'',
      element : <Home/>
    },
    {
      path:'features',
      element : <Feature/>
    },
    {
      path:'about',
      element : <About/>
    },
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)