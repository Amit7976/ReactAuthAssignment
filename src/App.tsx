import './App.css'
import Auth from './auth/Auth'
import Login from './auth/Login'
import Profile from './auth/Profile'
import Register from './auth/Register'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

////////////////////////////////////////////////////////////////////////////////////////////

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Auth />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '/register',
      element: <Register />
    }
  ])

  ////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div className='bg-[#FAFAFA]'>
      <div className='w-sm mx-auto h-screen py-3'>
        <div className='bg-[#F7F8F9] w-sm border border-slate-200 rounded-2xl mx-auto h-full relative'>
          <RouterProvider router={router} />
        </div>
      </div>
    </div>
  )
}

export default App
