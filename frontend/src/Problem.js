import React, { useState } from 'react'
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';

function Problem() {

    const [click, setclick] = useState(true)

    return (
        <div>
            {/*Problem Header  */}
            {/*Problem Statement */}
            {/*Input */}
            {/*Sample Testcase*/}
            {/*Submit Button */}
            {click ?
                <div className="Loader">
                    <CircularProgress />
                </div>

                : <></>}
            <Card >
                <Card.Body>
                    <Card.Title className="text-center">Aise hi</Card.Title>

                    <Card.Text >
                        Yahi hai Content
                    </Card.Text>
                    <Card>
                        <Card.Title>Input/Output</Card.Title>
                        <Card.Body></Card.Body>

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
                    </Form>
                </Card.Body>
            </Card>

        </div>
    )
}

export default Problem
