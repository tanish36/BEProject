import React from 'react'
import { Link } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap'


export default function Header() {
    return (

        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">CodeSchool</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
                <Nav.Link href="/Signin">Signin</Nav.Link>
                <Nav.Link href="/Signup">Signup</Nav.Link>
            </Nav>
        </Navbar>


    );
}

