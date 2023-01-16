import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from "./actions/auth";

const NavBar = ({ loggedIn, logOutCurrentUser }) => {


    const NavStyle = {
        color: 'white'
    };

    if(loggedIn) {
        return (
            <nav>
                <h1><Link className='homeLink' to='/'>WineSnob</Link></h1>
                    <ul className='nav-links'>
                        <Link style={NavStyle} to='/about'>
                            About
                        </Link>
                        <Link style={NavStyle} to='/'>
                            My Wines
                        </Link>
                        <Link style={NavStyle} to='/search'>
                            Search
                        </Link>
                        <Link style={NavStyle} to='/logout' onClick={(e) => logout(e, logOutCurrentUser)}>
                            Log Out
                        </Link>
                    </ul>
            </nav>
        )
    }

        return (
            <nav>
                 <h1><Link className='homeLink' to='/'>WineSnob</Link></h1>
                    <ul className='nav-links'>
                        <Link style={NavStyle} to='/login'>
                            Login
                        </Link>
                        <Link style={NavStyle} to='/signup'>
                            Create Account
                        </Link>
                    </ul>
            </nav>
        )
}

export default NavBar