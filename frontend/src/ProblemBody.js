import React, { useState } from 'react'
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputOutput from './InputOutput';

function ProblemBody({name ,tags ,statement ,exampl, constraints, txtcase}) {

    const [click, setclick] = useState(false)

    return (
        <div>
            <Card >
                <Card.Body>
                    <Card.Title className="text-center">{name}</Card.Title>
                    <Card>
                        <Card.Header>Problem Statement</Card.Header>
                        <Card.Body>

                            <Card.Text>
                                {statement}
                                {constraints}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Header>Example</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {exampl}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Header>Output</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {txtcase}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                   
                    <br />

                    <Form>
                        <Form.File id="formcheck-api-regular">
                            <Form.File.Label>Upload a file</Form.File.Label>
                            <Form.File.Input />
                        </Form.File>
                        <br />
                        <Form.Group as={Row}>

                            <Col sm={{ span: 2 }}>
                                {click ? <Button type="submit" disabled>Submit</Button> : <Button type="submit">Submit</Button>}
                            </Col>
                        </Form.Group>
                        {click ?
                            <div className="Loader">
                                <CircularProgress />
                            </div>

                            : <></>}
                    </Form>
                </Card.Body>
            </Card>

        </div>
    )
}

export default ProblemBody
