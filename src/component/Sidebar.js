import React from 'react'
import logo from './logo.jpg';
import './sidebar.css';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='logo'>
            <img src={logo}/>
            <p>OrangeFarm</p>
        </div>
        <div className='menu'>
            <div className='searchbar'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" search w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
<input type='text' placeholder='search'/>
</div>

           
        </div>
        <div className='profile'></div>
      
    </div>
  )
}
