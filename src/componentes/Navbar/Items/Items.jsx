import './Items.css'
import React from 'react'

const Items = (props) => {
  const {titulo} = props;

  return (
    <li className='items'> 
      {titulo}
    </li>
  )
}

export default Items