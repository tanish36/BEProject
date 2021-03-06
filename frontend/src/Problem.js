import React, { useState } from 'react'
import { Form, Card, Row, Col, Button } from 'react-bootstrap';
import CircularProgress from '@material-ui/core/CircularProgress';
import Compiler from './components/Compiler/CompilerV1';
import HoverRating from './Rating'

function Problem({ name, tags, statement, constraints, sample_case, input, output, score, nos, isContest, isRunning, cid, pid }) {

    return (

        <div>
            <Card >
                <Card.Body>
                    <Card.Title className="text-center">  <h2>{name}</h2> <small>Tags {tags}</small>  <br></br>
                        <HoverRating pid={pid} />
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
                        <Card.Header>Constraints</Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {constraints}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card>
                        <Card.Header>Sample Test Case</Card.Header>
                        <Card.Body>
                            <Card.Text id="SampleCase">
                                {sample_case}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <br />

                </Card.Body>
            </Card>

            <Compiler cid={cid} pid={pid} input={input} output={output} nos={nos} score={score} isContest={isContest} isRunning={isRunning} />

        </div>
    )
}

export default Problem
