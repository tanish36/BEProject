import React, { useState, useEffect } from 'react'
import './AddContent.css'
import { Form, Row, Col, Button, Card, Alert, ListGroup } from 'react-bootstrap'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min'
import ContestService from './services/contest.service'
import Alertdism from './Alertdism';

function AddContest() {

    let msgform = null;

    const [contestID, setcontestID] = useState("")
    const [success, setsuccess] = useState(2);
    const [hide, sethide] = useState(false)

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
        var contest_timestamp = new Date(event.target[2].value)

        ContestService.addcontest(parseInt(contest_duration), contest_title, contest_timestamp).then((response) => {
            setcontestID(response.id)
            sethide(true);
            setsuccess(1);
        }, (error) => {
            setsuccess(0);
        })

    }

    return (
        <div className="AddContest">
            {
                localStorage.getItem("user") != undefined ?
                    <>

                        { success == 1 ? <Alertdism setsucess={setsuccess} theme={"success"} content={"Problem Sucessfully Added"} heading={"Success"} /> :

                            success == 0 ? <Alertdism setsucess={setsuccess} theme={"danger"} content={"Some error occured please try again"} heading={"Failure"} /> : null
                        }
                        <Card className="text-center">
                            <Card.Body>
                                <Card.Title>Contest</Card.Title>

                                <Card.Text>
                                </Card.Text>
                                <Form id="myForm" className="form" ref={form => msgform = form} onSubmit={handleClick}>

                                    <Form.Group as={Row} controlId="Form.SelectCustom">
                                        <Form.Label column sm={2} >Duration (in hrs)</Form.Label>
                                        <Col sm={10}>
                                            <Form.Control disabled={hide} as="select" custom >
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
                                            <Form.Control disabled={hide} type="text" placeholder="" />
                                        </Col>
                                    </Form.Group>

                                    <Form.Group as={Row} controlId="formHorizontalTimestamp">
                                        <Form.Label column sm={2}>
                                            Date
                                </Form.Label>

                                        <Col sm={10}>
                                            <Form.Control disabled={hide} type="datetime-local" />
                                        </Col>

                                    </Form.Group>

                                    <Form.Group as={Row}>
                                        <Col sm={{ span: 10 }}>
                                            <Button disabled={hide} type="submit">Submit</Button>
                                        </Col>
                                    </Form.Group>
                                </Form>

                            </Card.Body>
                        </Card>
                        <br />
                        <AddProblem hide={!hide} contestID={contestID} />
                        {/* {hide ?  : null} */}
                    </> : <Redirect to="/Signin" />
            }

        </div >
    )
}


const AddProblem = ({ hide, contestID }) => {


    let msgform = null

    const [success, setsuccess] = useState(2);
    const [problems, setproblems] = useState([])
    const [counter, setcounter] = useState(0)

    function handleClick(event) {

        event.preventDefault();

        console.log("ContestID : " + contestID);
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


    function finish() {
        console.log(contestID)

        for (var i = 0; i < problems.length; i++) {

            ContestService.addprobleminContest(contestID, problems[i].id).then((response) => {
                console.log(response)
                setcounter(prevCounter => prevCounter + 1)

            }, (error) => {

            })
        }
    }

    if (counter > 0 && counter == problems.length) {
        return <Alertdism setsucess={setsuccess} theme={"success"} content={"Contest Created Successfully"} heading={"Success"} />
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
                            {

                                <Col >
                                    <Button onClick={finish} >Finish </Button>
                                </Col>

                            }
                        </Form.Group>

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

export default AddContest
