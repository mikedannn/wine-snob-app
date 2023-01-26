import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/esm/Button";
import Navbar from 'react-bootstrap/Navbar';
// import WineLogo from '../wine-logo.svg';

// import { Link } from 'react-router-dom';
// import { logout } from "../actions/auth";

function NavBar({ user, setUser }) {

    const handleLogout = () => {
        fetch('/logout', {
            method: "DELETE"
        }).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        }).then(<redirect to="/" />)
    }

    const renderNavbarButtons = () => {
        if(user){
            return(
                <>
                    <Navbar.Text id="current-user-name">
                       <b>{`@${user.username}`}</b>
                    </Navbar.Text>
                    <Button variant="info" className="ms-3" href="/account">
                        My Account
                    </Button>
                    <Button 
                        className="ms-2 mt-3 mb-3" variant="outline-info" 
                        onClick={handleLogout}
                        >Logout
                    </Button>
                </>
            );
        }
    }

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                    {/* <img
                        id='nav-logo'
                        alt="wine logo"
                        src={LightLogo}
                        width="120"
                        className="d-inline-block align-top"
                    /> */}
                    <p>WineSnob</p>
                    </Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    {renderNavbarButtons()}
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

    
}

// const NavBar = ({ loggedIn, logOutCurrentUser }) => {


//     const NavStyle = {
//         color: 'white'
//     };

//     if(loggedIn) {
//         return (
//             <nav>
//                 <h1><Link className='homeLink' to='/'>WineSnob</Link></h1>
//                     <ul className='nav-links'>
//                         <Link style={NavStyle} to='/about'>
//                             About
//                         </Link>
//                         <Link style={NavStyle} to='/'>
//                             My Wines
//                         </Link>
//                         <Link style={NavStyle} to='/search'>
//                             Search
//                         </Link>
//                         <Link style={NavStyle} to='/logout' onClick={(e) => logout(e, logOutCurrentUser)}>
//                             Log Out
//                         </Link>
//                     </ul>
//             </nav>
//         )
//     }

//         return (
//             <nav>
//                  <h1><Link className='homeLink' to='/'>WineSnob</Link></h1>
//                     <ul className='nav-links'>
//                         <Link style={NavStyle} to='/login'>
//                             Login
//                         </Link>
//                         <Link style={NavStyle} to='/signup'>
//                             Create Account
//                         </Link>
//                     </ul>
//             </nav>
//         )
// }

export default NavBar