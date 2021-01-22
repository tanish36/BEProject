import React from 'react';
import { Card, Row, Col, Form, Button, Container } from 'react-bootstrap';
import './Profile.css';
import DoughnutGraph from './Dougnut'
import LineGraph from './Line'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function Profile() {

    return (
        <div className="Profile">
            {
                localStorage.getItem("user") ?
                    <Container>
                        <div className="Profile__details">
                            <Row>

                                <Col>
                                    <Card className="text-center">
                                        <Card.Body>
                                            <Card.Title>Submissions</Card.Title>

                                            <Card.Text>
                                                <DoughnutGraph />
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>

                                <Col>
                                    <Card>
                                        <Card.Header>Profile</Card.Header>
                                        <Card.Body>

                                            <Form>
                                                <fieldset disabled>

                                                    <Form.Row>
                                                        <Form.Group as={Col} >
                                                            <Form.Label>FirstName</Form.Label>
                                                            <Form.Control type="text" placeholder={JSON.parse(localStorage.getItem("user")).firstname} />
                                                        </Form.Group>

                                                        <Form.Group as={Col} >
                                                            <Form.Label>Lastname</Form.Label>
                                                            <Form.Control type="text" placeholder={JSON.parse(localStorage.getItem("user")).lastname} />
                                                        </Form.Group>
                                                    </Form.Row>

                                                    <Form.Group>
                                                        <Form.Label>Username</Form.Label>
                                                        <Form.Control placeholder={JSON.parse(localStorage.getItem("user")).email} />
                                                    </Form.Group>

                                                    <Form.Group>
                                                        <Form.Label>Rank</Form.Label>
                                                        <Form.Control placeholder={JSON.parse(localStorage.getItem("user")).rank} />
                                                    </Form.Group>

                                                </fieldset>
                                            </Form>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{ height: '200px' }}>
                                    <Card className="text-center">
                                        <Card.Body>
                                            <Card.Title>Performance</Card.Title>

                                            <Card.Text>
                                                <LineGraph />
                                            </Card.Text>

                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </Container> : <Redirect to="/Signin" />
            }
        </div>
    )
}

export default Profile
