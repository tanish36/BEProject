import React from 'react'
import Timer from './Timer'
import { Card } from 'react-bootstrap'

function Contest() {
    return (
        <Card>
            <Card.Body>
                <Timer until={Date.now() + 60000} />
            </Card.Body>
        </Card>
    )
}

export default Contest

