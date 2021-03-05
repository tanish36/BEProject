import { Paper } from '@material-ui/core';
import React from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import DS from '../src/assets/img/Learn/DS.jpg';

function LearnEntry() {
    return (
        <div>
            {/* <Paper elevation={3}> */}

            {/* <CardDeck> */}
            <Row>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={DS} />
                        <Card.Body>
                            <Card.Title>Data Structures</Card.Title>
                            <Card.Text>
                                Learn Data Strucutres and Make yourself industry ready
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={DS} />
                        <Card.Body>
                            <Card.Title>Algorithms</Card.Title>
                            <Card.Text>
                                Learn Algorithms to solve complex problems. Participate in Contests and grow yourself.
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            {/* </CardDeck> */}
            {/* </Paper> */}
        </div>
    )
}

export default LearnEntry
