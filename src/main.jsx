import React from 'react';
import App from './App.jsx';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home.jsx';
import AboutUs from './components/About Us/AboutUs.jsx';
import Services from "./components/Services/Services.jsx";
import NotFound from './components/Not Found/NotFound.jsx';
import Projects from './components/Projects/Projects.jsx';
import IndividualProject from './components/Projects/IndividualProjects.jsx';
import ContactUs from './components/ContactUs/ContactUs.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: '/about-us', element: <AboutUs /> },
      { path: '/services', element: <Services /> },
      {
        path: '/projects', element: <Projects />, children: [
          { path: 'projects/:projectId', element: <IndividualProject /> }
        ]
      },
      { path: '/contact-us', element: <ContactUs /> },
    ],
  }, { path: "*", element: <NotFound /> }
]);

const root = document.getElementById('root');

const rootElement = createRoot(root);

rootElement.render(
  <RouterProvider router={router}/>
);
