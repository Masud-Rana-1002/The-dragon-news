import React from 'react';
import Navbar from '../components/Header/Navbar';
import Marquee from '../components/Header/Marquees';
import Marquees from '../components/Header/Marquees';

const Root = () => {
  return (
    <div>
     <div className='container w-11/12 mx-auto'>
     <Navbar></Navbar>
     <Marquees></Marquees>
     </div>
    
    </div>
  );
};

export default Root;