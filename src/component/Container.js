import React from 'react'
import Row1 from './Row1'
import './container.css';
import Row3 from './Row3';
import Row2 from './Row2';

export default function Container() {
  return (
    <div className='container'>
      <Row1/>
      <Row2/>
      <Row3/>
    </div>
  )
}
