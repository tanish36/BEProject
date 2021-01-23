import React, { useState } from 'react'
import { Card, Row, Col, Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import DiscussService from './services/discuss.service';

function DiscussAnswer({ discussId, Title, Content }) {

    const [isSubmitted, setisSubmitted] = useState(false);

    //TO-DO : Implement the Submission of Answer;
    function handleSubmit(event) {

        console.log("in handle Submit")
        event.preventDefault();
        //Call the apis to answer a question

        var email = JSON.parse(localStorage.getItem("user")).email;

        //Remaining work is to get the content from the form rest work is done.
        var content = event.target[0].value

        DiscussService.addDiscussionResponse(discussId, email, content).then(() => {

        }, (error) => {

        })

        setisSubmitted(true);
    }

    return (
        < div >
            {
                isSubmitted ? <Redirect to="/Welcome" /> :
                    <Card>
                        <Card.Body>
                            <Card.Title>{Title}</Card.Title>

                            <Card.Text>
                                {Content}
                            </Card.Text>
                            <br />
                            <Form onSubmit={handleSubmit}>
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
