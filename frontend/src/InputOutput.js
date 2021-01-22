import React from 'react'
import { Card } from 'react-bootstrap';

function InputOutput({ Input, Output }) {
    return (
        <div>
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
        </div>
    )
}

export default InputOutput
