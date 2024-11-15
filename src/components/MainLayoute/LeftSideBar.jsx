import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftSideBar = () => {
  const [newsCategories, setNewsCategorise] = useState([])
  useEffect(()=>{
    fetch( 'https://openapi.programming-hero.com/api/news/categories')
    .then(res => res.json())
    .then(data => setNewsCategorise(data.data.news_category))
  },[])
 
  console.log(newsCategories)
  // {category_id: '01', category_name: 'Breaking News'
  return (
    <div>
      <h4 className="text-3xl font-bold mb-4">All Categories</h4>
    
    {
      newsCategories.map(category => <div className=' mb-3 category'><NavLink to={'category/'+category.category_id} className='text-[#9F9F9F] font-medium text-xl block py-2  pl-3 w-full'>{category.category_name}</NavLink></div>)
    }

    </div>
  );
};

export default LeftSideBar;