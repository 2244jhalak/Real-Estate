import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Layout/Root';
import Home from './components/Home/Home';
import PropertyDetails from './components/PropertyDetails/PropertyDetails';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './provider/AuthProvider';
import PrivateRoute from './Routes/PrivateRoute';
import UserDetails from './components/UserDetails/UserDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Contact from './components/Contact/Contact';
import UserProfile from './components/UserProfile/UserProfile';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import Agents from './components/Agents/Agents';
import ReportChart from './components/ReportChart/ReportChart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      {
        path:"/details/:id",
        
        element:<PrivateRoute><PropertyDetails></PropertyDetails></PrivateRoute>,
        loader:()=>fetch("/Residential.json")
      },
      {
        path:"/UserDetails",
        element:<PrivateRoute><UserDetails></UserDetails></PrivateRoute>
      },
      {
        path:"/reportChart",
        element:<ReportChart></ReportChart>
      },
      {
        path:"/userProfile",
        element:<PrivateRoute><UserProfile></UserProfile></PrivateRoute>
      },
      {
        path:"/updateProfile",
        element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
      },
      {
        path:"/agents",
        element:<PrivateRoute><Agents></Agents></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
