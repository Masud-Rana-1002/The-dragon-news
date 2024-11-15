import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';
import Root from '../Root/Root';
import MineLayout from '../components/MainLayoute/MineLayout';
import News from '../components/MainLayoute/News';
import Signin from '../components/Authentication/Signin';
import SignUp from '../components/Authentication/SignUp';

const Routes =  createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
     
      {
        path: '/',
        element:  <MineLayout></MineLayout>,
        children:[
          {
            path:'',
            element: <Navigate to={"category/01"} ></Navigate>
          },
          {
            path:'/category/:id',
            element:<News></News>,
            loader: ({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
          }
        ]
      },{
       
    
      },
    ]
    
  }, {
    path:'*',
    element: <h1>eroor</h1>

  },{
    path:'/SignIn',
    element: <Signin></Signin>
  },
  {
    path:'/signUp',
    element: <SignUp></SignUp>
  }
]);

export default Routes;