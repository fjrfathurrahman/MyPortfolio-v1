import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'

const RouterPage = createBrowserRouter([
  { path: '/', element: <HomePage/> },
  { path: '/*', element: null }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={RouterPage} />
  </React.StrictMode>,
)
