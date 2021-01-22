import React, { useState } from 'react'
import { Card, ListGroup, Button, Row, Col } from 'react-bootstrap'

// Check whether user is registered or not if yes then go ahead

function Contest() {

    const [isRegistered, setisRegistered] = useState(false)

    return (
        <>
            <Card>
                <Card.Header>Current Contest</Card.Header>
                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            <ListGroup.Item action disabled href="#link" >Title of the Discussion</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>
                {/* <Timer until={Date.now() + 60000} /> */}
            </Card>
            <br />
            <Card>
                <Card.Header>Past Contest</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item action disabled href="#link" >Title of the Discussion</ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}

export default Contest

