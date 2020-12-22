import React from 'react'
import './AddContent.css'
import { Form, Row, Col, Button, Card } from 'react-bootstrap'

function AddContent() {
    return (
        <div className="AddContent">
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Content</Card.Title>

                    <Card.Text>
                    </Card.Text>
                    <Form>
                        <Form>
                            <Form.Group as={Row} controlId="Form.SelectCustom">
                                <Form.Label column sm={2} >Section</Form.Label>
                                <Col sm={10}>
                                    <Form.Control as="select" custom>
                                        <option>DataStructures</option>
                                        <option>Algorithms</option>
                                    </Form.Control>
                                </Col>
                            </Form.Group>
                        </Form>

                        <Form.Group as={Row} controlId="formHorizontalTopic">
                            <Form.Label column sm={2}>
                                Topic
                                                    </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="Binary Search" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalVideo">
                            <Form.Label column sm={2}>
                                VideoLink
                                </Form.Label>

                            <Col sm={10}>
                                <Form.Control type="link" placeholder="Video Link" />
                            </Col>
                        </Form.Group>


                        <Form.Group controlId="Form.ControlContent">
                            <Form.Label >Content</Form.Label>
                            <Form.Control as="textarea" rows={10} />
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10 }}>
                                <Button type="submit">Submit</Button>
                            </Col>
                        </Form.Group>
                    </Form>

                </Card.Body>
            </Card>

        </div >
    )
}

export default AddContent
