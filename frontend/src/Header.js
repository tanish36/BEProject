import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Nav, Navbar, Button } from 'react-bootstrap'
import AuthService from './services/auth.service'
import { useHistory } from 'react-router-dom'

export default function Header({ logOut, loggedIn }) {

    function Logout() {
        loggedIn = false;
        AuthService.logout();
        logOut();
        window.location.href = "/";
    }



    return (

        <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="#home">CodeSchool</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
            </Nav>

            {loggedIn ?

                <Nav className="justify-content-end">
                    <Nav.Link href="/Signin">XYZ</Nav.Link>
                    <Button onClick={Logout}>Logout</Button>
                </Nav> :
                <Nav className="justify-content-end">
                    <Nav.Link href="/Signin">Signin</Nav.Link>
                    <Nav.Link href="/Signup">Signup</Nav.Link>
                </Nav>
            }
        </Navbar>


    );
}

