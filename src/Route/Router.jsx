import React from 'react';
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu';
import Blog from '../Pages/Blogs/Blog';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Sidebar from '../Components/Sidebar/Sidebar';
import SinglePost from '../Pages/SinglePost/SinglePost';
import Reservation from '../Pages/Reservation/Reservation';


 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
            {
              path: '/',
              element: <Home></Home>,  
            },
            {
              path: '/menu',
              element: <Menu></Menu>,  
            },
            {
              path: '/blogs',
              element: <Blog></Blog>,  
            },
            {
              path: '/about',
              element: <About></About>,  
            },
            {
              path: '/contact',
              element: <Contact></Contact>,  
            },
            {
              path: '/singlePost',
              element: <SinglePost></SinglePost>,  
            },
            {
              path: '/sidebar',
              element: <Sidebar></Sidebar>,  
            },
            {
              path: '/reservation',
              element: <Reservation></Reservation>,  
            },
      ]
    },
  ]);