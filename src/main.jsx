import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Destination from './pages/Destination.jsx';
import Crew from './pages/Crew.jsx';
import Technology from './pages/Technology.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'destination',
        element: <Destination />
      },
      {
        path: 'crew',
        element: <Crew />
      },
      {
        path: 'technology',
        element: <Technology />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
