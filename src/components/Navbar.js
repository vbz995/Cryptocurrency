import React from 'react'
import {Link} from 'react-router-dom'
import {Navbar, Nav} from 'react-bootstrap'

const Navbars = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand as ={Link} to ="/">Cryptocurrency</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">List</Nav.Link>
                <Nav.Link as={Link} to="/settings">Settings</Nav.Link>
            </Nav>
        </Navbar>
        
    )
}
export default Navbars
