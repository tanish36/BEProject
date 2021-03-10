import React, { useState } from 'react'
import { Nav } from 'react-bootstrap'

export default function Sidebar(isLoggedIn) {

    const [key, setkey] = useState("/Welcome")

    return (
        <>
            {
                isLoggedIn ?

                    < Nav justify variant="pills" activeKey={key} onSelect={(selectedKey) => setkey(selectedKey)} className="flex-column" >
                        < Nav.Item >
                            < Nav.Link href="/Welcome" > Profile</Nav.Link >
                        </Nav.Item >
                        <Nav.Item>
                            <Nav.Link href="/Contest" >Contests</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/Learn" >Learn</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/AllProblem" >Practice</Nav.Link>
                        </Nav.Item>

                        {
                            JSON.parse(localStorage.getItem("user")).isadmin == "True" ? <>
                                <Nav.Item>
                                    <Nav.Link href="/AddContent" >Add Content</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/AddContest" >AddContest</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link href="/AddProblem" >AddProblem</Nav.Link>
                                </Nav.Item>
                            </> : <></>

                        }

                        <Nav.Item>
                            <Nav.Link href="/Discuss" >Discuss</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link href="/Recommendation" >Recommendation</Nav.Link>
                        </Nav.Item>


                    </Nav >

                    : <></>
            }
        </>
    )
}
