import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/:pokeId',
    element: <h1>Detalle</h1>,
  }
])



ReactDOM.createRoot(document.getElementById('root'), HTMLElement).render(
  <RouterProvider router={router} />
);
