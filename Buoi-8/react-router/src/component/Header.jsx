import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul style={{display:"flex"}}>
      <li>
      <Link to='/'>Trang chu</Link>
    </li>

    <li>
      <Link to='/blog'>Trang tin tuc</Link>
    </li>

    <li>
      <Link to='/'>Trang chu</Link>
    </li>
    </ul>
  )
}

export default Header
