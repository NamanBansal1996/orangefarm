import React from 'react'
import './row1.css';

export default function Row1() {
  return (
    
    <div className='row1'>
        <div className='revenue'>
          <div className='heading'>
            <h1>Revenues</h1></div>
          <div className='number'>
            <p>15%</p></div>
          <div className='compare'>
            <h3>Increased compared to last week</h3></div>
          <div className='report'>
            <p>Revenue report</p>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
            </div>
          </div>
        <div className='lostdeals'>
          <div className='heading'>
            <h2>Lost Deals</h2></div>
          <div className='number'>
            <p>4%</p></div>
          <div className='compare'>
            <h3>You closed 96 out of 100 deal</h3></div>
          <div className='report'>
            <h5>All Deals</h5>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
            </div>
            </div>
        <div className='deals'>
        <div className='heading'>
            <h2>Quarter Deals</h2></div>
          <div className='number'>
            <p>84%</p></div>
          <div className='report'>
            <h5>All goals</h5>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" /></svg>
            </div>

        </div>
        </div>
      
  )
}
