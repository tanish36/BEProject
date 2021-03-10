import React, { useState } from 'react'
import { Card, Row, Col, Form, ListGroup, Button } from 'react-bootstrap'
import Alertdism from './Alertdism'
import ContestService from './services/contest.service'

const AddProblem = () => {


    let msgform = null

    const [success, setsuccess] = useState(2);
    const [problems, setproblems] = useState([])

    function handleClick(event) {

        event.preventDefault();
        //problem name
        console.log(event.target[1].value)
        var p_name = event.target[1].value
        //problem state
        console.log(event.target[2].value)
        var p_statement = event.target[2].value
        //problem tags
        console.log(event.target[3].value)
        var p_tags = event.target[3].value
        //problem eg 
        console.log(event.target[4].value)
        var p_constr = event.target[4].value
        //problem const
        console.log(event.target[5].value)
        var p_sample = event.target[5].value
        //problem test case
        console.log(event.target[6].value)
        var p_input = event.target[6].value

        console.log(event.target[7].value)
        var p_output = event.target[7].value

        console.log(event.target[8].value)
        var p_score = parseInt(event.target[8].value)


        ContestService.addproblem(p_name, p_statement, p_tags, p_constr, p_sample, p_input, p_output, p_score).then((response) => {
            console.log(response)
            setproblems(oldArray => [...oldArray, response])
            setsuccess(1)
        }, (error) => {
            setsuccess(0)
        })

        msgform.reset();
    }

    return (

        <>

            { success == 1 ? <Alertdism setsucess={setsuccess} theme={"success"} content={"Problem Sucessfully Added"} heading={"Success"} /> :

                success == 0 ? <Alertdism setsucess={setsuccess} theme={"danger"} content={"Some error occured please try again"} heading={"Failure"} /> : null
            }
            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Add Problem</Card.Title>

                    <Card.Text>
                    </Card.Text>

                    <Form id="myForm" className="form" ref={form => msgform = form} onSubmit={handleClick}>

                        <Form.Group as={Row} controlId="formHorizontalTitle">
                            <Form.Label column sm={2}>
                                Problem  Name
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
                                <Form.Control as="textarea" rows={4} />
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
                                Constraints
                                </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="textarea" rows={4} placeholder="" />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} controlId="formHorizontalTitle">
                            <Form.Label column sm={2}>
                                Sample Case
                                </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="textarea" placeholder="" />
                            </Col>
                        </Form.Group>


                        <Form.Group as={Row} controlId="formHorizontalTitle">
                            <Form.Label column sm={2}>
                                Input
                                </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="textarea" rows={4} placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalTitle">
                            <Form.Label column sm={2}>
                                Output
                                </Form.Label>
                            <Col sm={10}>
                                <Form.Control as="textarea" rows={4} placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formHorizontalTitle">
                            <Form.Label column sm={2}>
                                Score
                                </Form.Label>
                            <Col sm={10}>
                                <Form.Control type="text" placeholder="" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 10 }}>
                                <Button type="submit">AddProblem</Button>
                            </Col>
                        </Form.Group>

                    </Form>


                </Card.Body>
            </Card>


            <br />
            < Card >
                <Card.Header>Added Problems</Card.Header>

                {
                    problems.map(problem =>
                        <ListGroup variant="flush">
                            < ListGroup.Item action onClick={() => handleClick()}  >  {problem.problem_name} </ListGroup.Item>

                        </ListGroup>
                    )
                }
            </Card>

        </>
    )
}

export default AddProblem