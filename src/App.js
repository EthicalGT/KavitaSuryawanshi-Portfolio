import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeaderInfo from './components/HeaderInfo';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';
import Qualification from './components/Qualification';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Contributions from './components/Contributions';
import ActivitiesContainer from './components/ActivitiesContainer';

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <HeaderInfo />
        )
      },
      {
        path: "contactme",
        element: <ContactMe />
      },
      {
        path: "Gallery",
        element: <Gallery />
      },
      {
        path: "aboutme",
        element: <AboutMe />
      },
      {
        path: "qualification",
        element: <Qualification />
      },
      {
        path: "contributions",
        element: <Contributions />
      },
      {
        path: "activities",
        element: <ActivitiesContainer />
      }
    ]
  }
]);


function App() {
  return <RouterProvider router={router} />;
}

export default App;
