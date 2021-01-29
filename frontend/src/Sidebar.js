import React from 'react'
import { Nav } from 'react-bootstrap'

export default function Sidebar(isLoggedIn) {
    return (
        <>
            {
                isLoggedIn ?

                    < Nav justify variant="pills" defaultActiveKey="/Welcome" className="flex-column" >
                        < Nav.Item >
                            < Nav.Link href="/Welcome" > Profile</Nav.Link >
                        </Nav.Item >
                        <Nav.Item>
                            <Nav.Link href="/Contest" eventKey="link-1">Contests</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Learn" eventKey="link-2">Learn</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="link-3">Practice</Nav.Link>
                        </Nav.Item>

                        {
                            JSON.parse(localStorage.getItem("user")).isadmin == "True" ? <>
                                <Nav.Item>
                                    <Nav.Link href="/AddContent" eventKey="link-4">Add Content</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                            <Nav.Link href="/AddContest" eventKey="link-6">AddContest</Nav.Link>
                        </Nav.Item>
                            </> : <></>

                        }

                        <Nav.Item>
                            <Nav.Link href="/Discuss" eventKey="link-5">Discuss</Nav.Link>
                        </Nav.Item>
                        

                    </Nav >

                    : <></>
            }
        </>
    )
}
