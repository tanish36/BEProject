import React, { useState, useEffect } from 'react'
import { Card, ListGroup, Form, Row, Col, Button } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import DiscussHeader from './DiscussHeader'
import DiscussResponse from './DiscussResponse'
import DiscussService from './services/discuss.service';

function Discuss() {

    const [discussionId, setdiscussionId] = useState("")
    const [Clicked, setClicked] = useState(false)
    const [isLoading, setisLoading] = useState(false)


    useEffect(() => {
        setisLoading(true);

        DiscussService.getDiscussionTopics().then((response) => {
            setisLoading(false);
        }, (error) => {
            setisLoading(false);
        })

    }, [localStorage.getItem("Discuss")]);


    function handleClick(discussId) {

        setdiscussionId(discussId);

        console.log("In Discuss handle Click " + discussId)

        setisLoading(true);

        // Ask axios to get the data from the backend

        DiscussService.getDiscussion(discussId).then((response) => {
            console.log(response)
        }, (error) => {

        })

        setisLoading(false);
        setClicked(true);
    }

    function handleSubmit(event) {
        event.preventDefault();

        var topic = event.target[0].value;
        var content = event.target[1].value;
        var email = JSON.parse(localStorage.getItem("user")).email

        DiscussService.addDiscussion(email, topic, content).then((response) => {

        }, (error) => {

        })

    }

    return (
        <div>{

            isLoading ?
                <div className="Loader">
                    <CircularProgress />
                </div> : null
        }
            {

                Clicked ? <>
                    <Discussion discussId={discussionId} />
                </>
                    :
                    <>
                        <Card>
                            <Card.Header>Ask a Question</Card.Header>
                            <Card.Body>
                                <Form onSubmit={handleSubmit}>
                                    <Form.Group as={Row} controlId="formHorizontalVideo">
                                        <Form.Label column sm={2}>
                                            Topic
                                        </Form.Label>

                                        <Col sm={5}>
                                            <Form.Control type="link" placeholder="Topic of Question" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group controlId="Form.ControlContent">
                                        <Form.Label >Doubt/Question</Form.Label>
                                        <Form.Control as="textarea" rows={2} />
                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Col sm={{ span: 10 }}>
                                            <Button type="submit">Submit</Button>
                                        </Col>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card>

                        <br />

                        <Card>
                            <Card.Header>Discuss</Card.Header>
                            <ListGroup variant="flush">
                                {localStorage.getItem("Discuss") && JSON.parse(localStorage.getItem("Discuss")).map(dis => <ListGroup.Item action onClick={() => handleClick(dis.discussionId)} disabled={isLoading} >{dis.title}</ListGroup.Item>)}
                            </ListGroup>
                        </Card>
                    </>
            }
        </div >
    )
}

function Discussion({ discussId }) {

    const [discussion, setdiscussion] = useState([]);
    const [discussionResponses, setdiscussionResponses] = useState([])
    // const [user, setuser] = useState()

    useEffect(() => {

        setdiscussion(JSON.parse(localStorage.getItem(discussId)))
        //console.log(discussion);

        DiscussService.getDiscussionResponses(discussId).then((response) => {
            console.log(response);
            setdiscussionResponses([...response])
        }, (error) => {

        })
    }, [])

    return <>
        <br />

        <DiscussHeader Topic={JSON.parse(localStorage.getItem(discussId))[0].title} discussId={JSON.parse(localStorage.getItem(discussId))[0].discussionId} email={JSON.parse(localStorage.getItem(discussId))[0].email} Content={JSON.parse(localStorage.getItem(discussId))[0].content} />
        <br />
        {discussionResponses && discussionResponses.map(dis => <DiscussResponse email={dis.email} Title={dis.title} Content={dis.content} />)}
    </>
}

export default Discuss
