import React, { useState } from 'react'
import './AddContent.css'
import { Form, Row, Col, Button, Card, Alert } from 'react-bootstrap'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import ContestServive from './services/contest.servive'
import Alertdism from './Alertdism'

function AddContest() {

    let msgform = null;
    const [success, setsuccess] = useState(2);

    function handleClick(event) {
        event.preventDefault();
        //Duration
        console.log(event.target[0].value)
        var contest_duration = event.target[0].value
        //Title
        console.log(event.target[1].value);
        var contest_title = event.target[1].value
        //TimeStamp
        console.log(event.target[2].value);
        var ts = event.target[2].value
        var contest_timestamp = new Date(ts)
        console.log(contest_timestamp);

        ContestServive.addcontest(parseInt(contest_duration),contest_title,contest_timestamp).then((response) => {
            setsuccess(1)
        }, (error) => {
            setsuccess(0)
        })

        msgform.reset();
    }

    return (
        <div className="AddContest">
            {
                localStorage.getItem("user") != undefined ?
                    <>
                        {success == 1 ? <Alertdism setsucess={setsuccess} theme={"success"} content={"Contest Sucessfully Added"} heading={"Success"} /> :

                            success == 0 ? <Alertdism setsucess={setsuccess} theme={"danger"} content={"Some error occured please try again"} heading={"Failure"} /> : null
                        }
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Contest</Card.Title>

                                <Card.Text>
                                </Card.Text>
                                <Form id="myForm" className="form" ref={form => msgform = form} onSubmit={handleClick}>

                                    <Form.Group as={Row} controlId="Form.SelectCustom">
                                        <Form.Label column sm={2} >Duration</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control as="select" custom >
                                                <option>1</option>
                                                <option>2</option>
                                                <option>24</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formHorizontalTitle">
                                        <Form.Label column sm={2}>
                                            Title
                                </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formHorizontalTimestamp">
                                        <Form.Label column sm={2}>
                                            TimeStamp
                                </Form.Label>

                                        <Col sm={10}>
                                            <Form.Control type="date"  placeholder="DD/MM/YY" />
                                            </Col>
                                        
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

export default AddContest
