import React from 'react'
import { Card } from 'react-bootstrap'

function DiscussResponse({ email, Title, Content }) {
    return (
        <>
            <Card border="success">
                <Card.Header>{email}</Card.Header>
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
