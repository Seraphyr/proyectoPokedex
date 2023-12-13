import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home';
import Detalle from './components/Detalle';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/detalle/:id',
    element: <Detalle/>,
  }
])



ReactDOM.createRoot(document.getElementById('root'), HTMLElement).render(
  <RouterProvider router={router} />
);
