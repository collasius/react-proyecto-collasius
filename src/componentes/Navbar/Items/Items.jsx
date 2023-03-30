import './Items.css'
import React from 'react'

const Items = ({titulo}) => {

  return (
    <li className='items'> 
      <a href="">{titulo}</a>
    </li>
  )
}

export default Items