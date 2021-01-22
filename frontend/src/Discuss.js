import React, { useState, useEffect } from 'react'
import { Card, ListGroup, Form, Row, Col, Button } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import DiscussHeader from './DiscussHeader'
import DiscussResponse from './DiscussResponse'
import DiscussService from './services/discuss.service';

function Discuss() {

    var DiscussionID = "";
    const [Clicked, setClicked] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    // useEffect(() => {
    //     setDidMount(true);
    //     return () => setDidMount(false);
    // }, [])

    useEffect(() => {
        setisLoading(true);
        DiscussService.getDiscussionTopics().then((response) => {
            setisLoading(false);
        }, (error) => {
        })

    }, [localStorage.getItem("Discuss")]);


    function handleClick(discussId) {
        DiscussionID = discussId;

        console.log("In Discuss handle Click")
        setisLoading(true);

        // Ask axios to get the data from the backend
        if (localStorage.getItem(discussId) != undefined) {

        } else {
            DiscussService.getDiscussion(discussId).then((response) => {

            }, (error) => {

            })
        }

        setisLoading(false);
        setClicked(true);
    }

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(event.target[0].value)
        // console.log(event.target[1].value)
        var topic = event.target[0].value;
        var content = event.target[1].value;
        var email = JSON.parse(localStorage.getItem("user")).email
        // addDiscussion(username, topic, doubt)
        console.log(topic + " " + content + " " + email)


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
                    <Discussion discussionId={DiscussionID} />
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

    const [discussion, setdiscussion] = useState([])

    useEffect(() => {
        DiscussService.getDiscussionResponses(discussId).then((response) => {
            console.log(response);
            //setdiscussion([...response])
        }, (error) => {

        })
    }, [])

    return <>
        <br />
        <DiscussHeader Topic={"Binary Search"} firstname={"John"} lastname={"Doe"} Rank={"Pupil"} Content={"Hey Buddy How are you this is a sample content for test"} />
        <br />
        <DiscussResponse firstname={"XYZ"} lastname={"ABC"} Rank={"Newbie"} Title={"My Opinion"} Content={"Give your Opinion"} />
        <DiscussResponse firstname={"PQR"} lastname={"ABC"} Rank={"Expert"} Title={"My Opinion"} Content={"Give your Opinion"} />
        <DiscussResponse firstname={"STU"} lastname={"ABC"} Rank={"Candidate Master"} Title={"My Opinion"} Content={"Give your Opinion"} />
    </>
}

export default Discuss
