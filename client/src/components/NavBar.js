import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar';

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
                    <Button variant="info" className="accountButton" href="/account">
                        Add New Review
                    </Button>
                    <Button 
                        className="logoutButton" variant="outline-info" 
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
                    <Navbar.Brand href="/" className='wineSnobLink'>
                        <p>WineSnob</p>
                    </Navbar.Brand>
                <Navbar.Collapse>
                    {renderNavbarButtons()}
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

    
}

export default NavBar;