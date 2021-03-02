import React, { useState } from 'react'
import { Card, Row, Col, Button, Form } from 'react-bootstrap'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import DiscussService from './services/discuss.service';
import Alertdism from './Alertdism'

function DiscussAnswer({ discussId, Title, Content }) {

    const [success, setsuccess] = useState(2);

    //TO-DO : Implement the Submission of Answer;
    function handleSubmit(event) {

        console.log("in handle Submit")
        event.preventDefault();
        //Call the apis to answer a question

        var email = JSON.parse(localStorage.getItem("user")).email;

        //Remaining work is to get the content from the form rest work is done.
        var content = event.target[0].value

        DiscussService.addDiscussionResponse(discussId, email, content).then(() => {
            setsuccess(1);
        }, (error) => {
            setsuccess(0);
        })

    }

    return (
        < div >

            {
                success == 1 ? <Alertdism setsucess={setsuccess} theme={"success"} content={"Topic Successfully Added Kindly Refresh the page to get changes"} heading={"Success"} /> :

                    success == 0 ? <Alertdism setsucess={setsuccess} theme={"danger"} content={"Some error occured please try again"} heading={"Failure"} /> : null
            }

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
        </div >
    )
}

export default DiscussAnswer
