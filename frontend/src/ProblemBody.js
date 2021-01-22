import React, { useState } from 'react'
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import InputOutput from './InputOutput';

function ProblemBody({ Topic, Content, Input, Output }) {

    const [click, setclick] = useState(false)

    return (
        <div>
            <Card >
                <Card.Body>
                    <Card.Title className="text-center">{Topic}</Card.Title>
                    <Card>
                        <Card.Header>Problem Statement</Card.Header>
                        <Card.Body>

                            <Card.Text>
                                {Content}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Header>Input</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {Input}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Header>Output</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {Output}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                    <Card>
                        <Card.Header>Example</Card.Header>
                        <Card.Body>

                            <InputOutput Input={"Hello World"} Output={"Hello how are you ?"} />

                        </Card.Body>
                    </Card>
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
