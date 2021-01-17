import React, { useState } from 'react'
import { Card, ListGroup, Form, Row, Col, Button } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import DiscussHeader from './DiscussHeader'
import DiscussResponse from './DiscussResponse'


function Discuss() {

    const [Clicked, setClicked] = useState(false)
    const [isLoading, setisLoading] = useState(false)

    function handleClick() {
        console.log("In Discuss handle Click")
        setisLoading(true);

        // Ask axios to get the data from the backend

        setisLoading(false);
        setClicked(true);


    }

    return (
        <div>{

            isLoading ?
                <div className="Loader">
                    <CircularProgress />
                </div> : <></>
        }
            {

                Clicked ? <>
                    <br />
                    <DiscussHeader Topic={"Binary Search"} firstname={"John"} lastname={"Doe"} Rank={"Pupil"} Content={"Hey Buddy How are you this is a sample content for test"} />
                    <br />
                    <DiscussResponse firstname={"XYZ"} lastname={"ABC"} Rank={"Newbie"} Title={"My Opinion"} Content={"Give your Opinion"} />
                    <DiscussResponse firstname={"PQR"} lastname={"ABC"} Rank={"Expert"} Title={"My Opinion"} Content={"Give your Opinion"} />
                    <DiscussResponse firstname={"STU"} lastname={"ABC"} Rank={"Candidate Master"} Title={"My Opinion"} Content={"Give your Opinion"} />
                </>
                    :
                    <>
                        <Card>
                            <Card.Header>Ask a Question</Card.Header>
                            <Card.Body>
                                <Form>
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
                                <ListGroup.Item action onClick={handleClick} disabled={isLoading} href="#link" >Title of the Discussion</ListGroup.Item>
                                <ListGroup.Item action onClick={handleClick} disabled={isLoading} href="#link" >Title of the Discussion</ListGroup.Item>
                                <ListGroup.Item action onClick={handleClick} disabled={isLoading} href="#link" >Title of the Discussion</ListGroup.Item>
                                <ListGroup.Item action onClick={handleClick} disabled={isLoading} href="#link" >Title of the Discussion</ListGroup.Item>
                                <ListGroup.Item action onClick={handleClick} disabled={isLoading} href="#link" >Title of the Discussion</ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </>
            }
        </div >
    )
}

export default Discuss
