import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Login from './components/Login'
import Browse from "./components/Browse.jsx"

const appRouter = createBrowserRouter([
  {
    path:"/" ,element: <App />, children: [
      {
        path:"/",element: <Login/>
      },
      {
        path:"/browse", element: <Browse/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={appRouter}/>
  </StrictMode>,
)
