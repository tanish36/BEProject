import React, { useState } from 'react'
import { Card, Row, Col, Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

function DiscussAnswer({ Title, Content }) {

    const [isSubmitted, setisSubmitted] = useState(false);

    //TO-DO : Implement the Submission of Answer;
    function handleSubmit(event) {
        setisSubmitted(true);
    }

    return (
        < div >
            {
                isSubmitted ? <Redirect to="/Discuss" /> :
                    <Card>
                        <Card.Body>
                            <Card.Title>{Title}</Card.Title>

                            <Card.Text>
                                {Content}
                            </Card.Text>
                            <br />
                            <Form>

                                <Form.Group controlId="Form.ControlContent">
                                    <Form.Label >Answer</Form.Label>
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
            }
        </div >
    )
}

export default DiscussAnswer
