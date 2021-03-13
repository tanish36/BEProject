import React, { useState } from 'react'
import './AddContent.css'
import { Form, Row, Col, Button, Card, Alert } from 'react-bootstrap'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import ContentService from './services/content.service'
import Alertdism from './Alertdism'

function AddContent() {

    let msgform = null;
    const [success, setsuccess] = useState(2);

    function handleClick(event) {
        event.preventDefault();
        //Section
        console.log(event.target[0].value)
        var topic_module = event.target[0].value
        //Topic
        console.log(event.target[1].value);
        var topic_name = event.target[1].value
        //vlink
        console.log(event.target[2].value);
        var topic_vlink = event.target[2].value
        //content
        console.log(event.target[3].value);
        var topic_content = event.target[3].value;

        ContentService.addcontent(topic_module, topic_name, topic_vlink, topic_content).then((response) => {
            setsuccess(1)
        }, (error) => {
            setsuccess(0)
        })

        msgform.reset();
    }

    return (
        <div className="AddContent">
            {
                localStorage.getItem("user") != undefined ?
                    <>
                        {success == 1 ? <Alertdism setsucess={setsuccess} theme={"success"} content={"Topic Successfully Added"} heading={"Success"} /> :

                            success == 0 ? <Alertdism setsucess={setsuccess} theme={"danger"} content={"Some error occured please try again"} heading={"Failure"} /> : null
                        }
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Content</Card.Title>

                                <Card.Text>
                                </Card.Text>
                                <Form id="myForm" className="form" ref={form => msgform = form} onSubmit={handleClick}>

                                    <Form.Group as={Row} controlId="Form.SelectCustom">
                                        <Form.Label column sm={2} >Section</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control as="select" custom>
                                                <option>DataStructures</option>
                                                <option>Algorithms</option>
                                                <option>Dynamic Programming</option>
                                                <option>Greedy</option>
                                                <option>Math</option>
                                                <option>Strings</option>
                                                <option>DFS and Similar</option>
                                                <option>Combinatorics</option>
                                                <option>Geometry</option>
                                                <option>Bitmasks</option>
                                                <option>Two Pointer</option>
                                                <option>Shortest Path</option>
                                                <option>Probability</option>
                                                <option>Number Theory</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>

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
                    </> : <Redirect to="/Signin" />
            }

        </div >
    )
}

export default AddContent
