import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Destination from './pages/Destination.jsx';

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
        element: <Home />
      },
      {
        path: 'technology',
        element: <Home />
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
