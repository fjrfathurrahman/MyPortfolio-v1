import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { MenuContextProvider } from './hooks/MenuContext'

const RouterPage = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/*', element: null }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuContextProvider>
      <RouterProvider router={RouterPage} />
    </MenuContextProvider>
  </React.StrictMode>,
)
