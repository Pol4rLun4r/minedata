import React from 'react'
import '../styles/nav.scss'
import iconLogo from '../assets/icons/icon-home.png'

import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <div>
      <div className='header'>
        <Link to={'/'}>
          <img src={iconLogo} alt="icon-home-log" />
          <div className='title'>minecraft database</div>
        </Link>
        <div className='date-hour'>fri 07:10am 1998</div>
      </div>
    </div>
  )
}
