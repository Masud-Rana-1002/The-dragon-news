import React from 'react';
import LeftSideBar from './leftSideBar';
import RightSideBar from './RightSideBar';
import FindUsOn from './FindUsOn';
import { Outlet } from 'react-router-dom';

const MineLayout = () => {
  return (
    <div className='grid grid-cols-12  gap-3'>
      <div className='col-span-3 '> 
        <LeftSideBar></LeftSideBar>
        
      </div>
      <div  className='col-span-6 '>
    <Outlet></Outlet>
      </div>
      <div  className='col-span-3  space-y-6'>
     <RightSideBar></RightSideBar>
     <FindUsOn></FindUsOn>
      </div>
    </div>
  );
};

export default MineLayout;