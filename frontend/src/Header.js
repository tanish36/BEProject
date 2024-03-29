import React, { useState, useEffect } from 'react'
import { Nav, Navbar, Button } from 'react-bootstrap'
import AuthService from './services/auth.service'
import RecommendService from './services/recommend-service'


export default function Header({ logOut, loggedIn }) {

    const [userName, setuserName] = useState("")

    useEffect(() => {
        if (localStorage.getItem("user")) {
            var obj = JSON.parse(localStorage.getItem("user"));
            console.log(obj);
            setuserName(obj.firstname);
        } else {
            setuserName("");
        }
    }, [])

    function Logout() {
        loggedIn = false;
        let dt = new Date();
        let email = JSON.parse(localStorage.getItem("user")).email;

        RecommendService.loginEnd(email, dt).then((response) => {

        }, (error) => {

        })

        AuthService.logout();
        logOut();
        window.location.href = "/";
    }

    return (

        <Navbar bg="light" variant="light" fixed="top">
            <Navbar.Brand href="#home">
                CodeSchool
            </Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="./Homepage">Home</Nav.Link>
            </Nav>

            {loggedIn ?

                <Nav className="justify-content-end">
                    <Nav.Link href="/Signin">{userName}</Nav.Link>
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

