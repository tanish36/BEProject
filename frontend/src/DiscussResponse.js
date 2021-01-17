import React from 'react'
import { Card } from 'react-bootstrap'

function DiscussResponse({ firstname, lastname, Rank, Title, Content }) {
    return (
        <>
            <Card border="success">
                <Card.Header>{firstname}  {lastname} , {Rank}</Card.Header>
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        {Content}
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    )
}

export default DiscussResponse
