import React from 'react'
import { Link } from "react-router-dom";
import "./Header.css";


const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">DHBVN</Link>
      </nav>
    </header>
  )
}

export default Header