import React, { useState } from 'react'
import './AddContent.css'
import { Form, Row, Col, Button, Card, Alert } from 'react-bootstrap'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import ContestService from './services/contest.service'
import Alertdism from './Alertdism';

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
        var contest_timestamp =  new Date(event.target[2].value)
        //problem name
        console.log(event.target[3].value)
        var p_name = event.target[3].value
        //problem state
        console.log(event.target[4].value)
        var p_statement = event.target[4].value
        //problem tags
        console.log(event.target[5].value)
        var p_tags = event.target[5].value
        //problem eg 
        console.log(event.target[6].value)
        var p_example = event.target[6].value
        //problem const
        console.log(event.target[7].value)
        var p_constr = event.target[7].value
        //problem test case
        console.log(event.target[8].value)
        var p_txtcase = event.target[8].value

        ContestService.addcontest(parseInt(contest_duration),contest_title,contest_timestamp).then((response) => {
            setsuccess(1)
        }, (error) => {
            setsuccess(0)
        })
        ContestService.addproblem(p_name,p_statement,p_tags,p_example,p_constr,p_txtcase).then((response) => {
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
                        { success == 1 ? <Alertdism setsucess={setsuccess} theme={"success"} content={"Contest Sucessfully Added"} heading={"Success"} /> :

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
                                    
                                    <Form.Group as={Row} controlId="formHorizontalTitle">
                                        <Form.Label column sm={2}>
                                            Problem 1 Name
                                </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>


                                    <Form.Group as={Row} controlId="formHorizontalTitle">
                                        <Form.Label column sm={2}>
                                            Problem  Statement
                                </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control as="textarea" rows={4}  />
                                        </Col>
                                    </Form.Group>



                                    <Form.Group as={Row} controlId="formHorizontalTitle">
                                        <Form.Label column sm={2}>
                                            Problem Tags
                                </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>



                                    <Form.Group as={Row} controlId="formHorizontalTitle">
                                        <Form.Label column sm={2}>
                                            Example
                                </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control as="textarea" rows={4} placeholder="" />
                                        </Col>
                                    </Form.Group>


                                <Form.Group as={Row} controlId="formHorizontalTitle">
                                        <Form.Label column sm={2}>
                                            Constrains
                                </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control as="textarea" placeholder="" />
                                        </Col>
                                    </Form.Group>


                                    <Form.Group as={Row} controlId="formHorizontalTitle">
                                        <Form.Label column sm={2}>
                                            Test Case
                                </Form.Label>
                                        <Col sm={10}>
                                            <Form.Control as="textarea" rows={4} placeholder="" />
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
