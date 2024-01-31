import React from 'react'
import './row2.css';

export default function Row2() {
  return (
      <div className='row2'>
        <div className='widget1'>
            <div className='heading'>
                <div className='customers'></div>
                <div className='sort'></div>
            </div>
            <div className='list'></div>
            <div className='button'></div>
        </div>
        <div className='widget2'>
          <div className='growth'>

          </div>
          <div className='frame1'>
            <div className='month'></div>
            <div className='year'></div>
            <div className='buyer'></div>
          </div>
        </div>
      </div>
  )
}
