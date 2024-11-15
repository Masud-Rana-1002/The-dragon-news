import React from 'react';
import Navbar from '../components/Header/Navbar';
import Marquee from '../components/Header/Marquees';
import Marquees from '../components/Header/Marquees';
import NavMenu from '../components/Header/NavMenu';
import { Outlet } from 'react-router-dom';


const Root = () => {
  return (
    <div>
     <div className='container w-11/12 mx-auto'>
     <Navbar></Navbar>
     <Marquees></Marquees>
     <NavMenu></NavMenu>
    <Outlet></Outlet>
     </div>
    
    </div>
  );
};

export default Root;