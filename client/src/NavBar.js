import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {


    const NavStyle = {
        color: 'white'
    };

  return (
    <nav>
        <h1><Link className='homeLink' to='/'>WineSnob</Link></h1>
            <ul className='nav-links'>
                <Link style={NavStyle} to='/'>
                    About
                </Link>
                <Link style={NavStyle} to='/'>
                    My Wines
                </Link>
                <Link style={NavStyle} to='/'>
                    Search
                </Link>
                <Link style={NavStyle} to='/'>
                    Log Out
                </Link>
            </ul>
    </nav>
  )
}

export default NavBar


{/* <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/signup">Create Account</NavLink></li>
      <li><NavLink to="/login">Login</NavLink></li>
      <li><NavLink to="/logout">Logout</NavLink></li> */}