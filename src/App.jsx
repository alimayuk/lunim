import React from 'react'
import {RouterProvider,createBrowserRouter,Outlet} from "react-router-dom";
import './App.css'
import Navbar from './Layout/Navbar/Navbar';
import Footer from './Layout/Footer/Footer';
import Home from "./components/Home"
import About from './components/About';
import Services from './components/Services';
import Projects from './components/projects';
import Testimonials from './components/Testimonials';




function App() {
  const Layout = ()=>{
    return (
      <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"about",
          element: <About/>
        },
        {
          path:"services",
          element: <Services/>
        },
        {
          path:"projects",
          element: <Projects/>
        },
        {
          path:"testimonials",
          element: <Testimonials/>
        },
      ]
    },
  ]);
 
  return (
    <>
    <RouterProvider router={router} />
     </>
  )
}

export default App
