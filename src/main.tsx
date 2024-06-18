import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomePage from './pages/HomePage'
import { MenuContextProvider } from './hooks/MenuContext'
import ErrorPage from './components/layouts/ErrorPage'

const RouterPage = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/*', element: <ErrorPage/> }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuContextProvider>
      <RouterProvider router={RouterPage} />
    </MenuContextProvider>
  </React.StrictMode>,
)
