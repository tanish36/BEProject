import React, { useState } from 'react'
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import Compiler from './components/Compiler/Compiler';

function Problem({ name, tags, statement, exampl, txtcase }) {

    return (

        <div>
            <Card >
                <Card.Body>
                    <Card.Title className="text-center">  <h2>{name}</h2>        <small>Tags {tags}</small>  <br></br>
                    </Card.Title>
                    <Card>
                        <Card.Header>Problem Statement</Card.Header>
                        <Card.Body>

                            <Card.Text>
                                {statement}

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
                        <Card.Header>Test Case</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {txtcase}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                </Card.Body>
            </Card>

            <Compiler />

        </div>
    )
}

export default Problem
