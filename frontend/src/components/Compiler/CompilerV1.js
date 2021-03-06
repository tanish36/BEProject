import React, { useState, useEffect } from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import Alertdism from '../../Alertdism';
import AuthService from '../../services/auth.service'
import ContestService from '../../services/contest.service'

function Compiler({ input, output, score, nos, pid, cid, isContest, isRunning }) {

    const [hide, sethide] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const [success, setsuccess] = useState(3)
    const [message, setmessage] = useState("")

    console.log(pid + " " + cid + " " + isContest + " " + isRunning)

    let email = JSON.parse(localStorage.getItem("user")).email;

    var submit = async (e) => {

        e.preventDefault();

        let outputText = document.getElementById("Form.ControlOutput");
        let lang_id = e.target[0].value
        let source = e.target[1].value
        outputText.innerHTML = "";
        outputText.innerHTML += "Creating Submission ...\n";

        sethide(true);
        setisLoading(true);


        const response = await fetch(
            "https://judge0-extra.p.rapidapi.com/submissions",
            {
                method: "POST",
                headers: {
                    "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                    "x-rapidapi-key": '25b83d73fdmshd6e3b06f9a2a67bp1bde7fjsnf4d0e16aa761',
                    "content-type": "application/json",
                    accept: "application/json",
                },
                body: JSON.stringify({
                    source_code: source,
                    stdin: input,
                    language_id: lang_id,
                    expected_output: output,
                }),
            }
        );
        outputText.innerHTML += "Submission Created ...\n";
        const jsonResponse = await response.json();

        let jsonGetSolution = {
            status: { description: "Queue" },
            stderr: null,
            compile_output: null,
        };

        while (
            jsonGetSolution.status.description !== "Accepted" &&
            jsonGetSolution.stderr == null &&
            jsonGetSolution.compile_output == null
        ) {
            outputText.innerHTML = `Creating Submission ... \nSubmission Created ...\nChecking Submission Status\nstatus : ${jsonGetSolution.status.description}`;

            if (jsonGetSolution.status.description === "Wrong Answer")
                break;

            if (jsonGetSolution.status.description === "Time Limit Exceeded")
                break;

            if (jsonResponse.token) {
                let url = `https://judge0-extra.p.rapidapi.com/submissions/${jsonResponse.token}?base64_encoded=true`;

                const getSolution = await fetch(url, {
                    method: "GET",
                    headers: {
                        "x-rapidapi-host": "judge0-ce.p.rapidapi.com",
                        "x-rapidapi-key": "25b83d73fdmshd6e3b06f9a2a67bp1bde7fjsnf4d0e16aa761",
                        "content-type": "application/json",
                    },
                });

                jsonGetSolution = await getSolution.json();
            }
        }

        if (jsonGetSolution.stdout) {
            const output = atob(jsonGetSolution.stdout);

            outputText.innerHTML = `Question Result : ${jsonGetSolution.status.description} \n`;

            if (jsonGetSolution.status.description === "Accepted") {
                ContestService.updatenos(pid).then((response) => {
                    console.log(pid + " " + response)
                }, (error) => {

                })
                setsuccess(1);
            } else if (jsonGetSolution.status.description === "Wrong Answer") {
                setsuccess(0);
            }

            outputText.innerHTML += `Results : ${output}\nExecution Time : ${jsonGetSolution.time} Secs\nMemory used : ${jsonGetSolution.memory} bytes`;
        } else if (jsonGetSolution.stderr) {
            const error = atob(jsonGetSolution.stderr);

            outputText.innerHTML = "";

            outputText.innerHTML += `\n Error :${error}`;


        } else {

            const compilation_error = atob(jsonGetSolution.compile_output);

            outputText.innerHTML = "";

            outputText.innerHTML += `\n Error :${compilation_error}`;

        }

        setisLoading(false);
        sethide(false);

    };


    return (
        <div>
            {

                isLoading ?
                    <div className="Loader">
                        <CircularProgress />
                    </div> : null
            }

            { success == 1 ? <Alertdism setsucess={setsuccess} theme={"success"} content={"Accepted"} heading={"Success"} /> :

                success == 0 ? <Alertdism setsucess={setsuccess} theme={"danger"} content={message} heading={"Failure"} /> :

                    success == 2 ? <Alertdism setsucess={setsuccess} theme={"primary"} content={message} heading={"In Queue"} /> : null
            }


            <Card className="text-center">
                <Card.Body>
                    <Card.Title>Compiler</Card.Title>

                    <Form id="myForm" className="form" onSubmit={submit}>

                        <Form.Group as={Row} controlId="Form.SelectCustom">
                            <Form.Label column sm={2} >Select Language</Form.Label>
                            <Col sm={10}>
                                <Form.Control disabled={hide} as="select" custom >
                                    <option value="52">C</option>
                                    <option value="52">C++</option>
                                    <option value="4">Java</option>
                                    <option value="10">Python</option>
                                </Form.Control>
                            </Col>
                        </Form.Group>


                        <Form.Group controlId="Form.ControlContent">
                            <Form.Label >Source</Form.Label>
                            <Form.Control as="textarea" rows={15} />
                        </Form.Group>
                        {/* 
                        <Form.Group controlId="Form.ControlContent">
                            <Form.Label >Input</Form.Label>
                            <Form.Control disabled={hide} as="textarea" rows={5} />
                        </Form.Group> */}

                        <Form.Group controlId="Form.ControlOutput">
                            <Form.Label >Output</Form.Label>
                            <Form.Control disabled={hide} as="textarea" rows={5} />
                        </Form.Group>

                        <Form.Group as={Row}>
                            <Col sm={{ span: 1 }}>
                                <Button disabled={hide} variant="danger" type="submit">Run</Button>
                            </Col>
                        </Form.Group>

                        {/* <Form.Group as={Row}>
                            <Col sm={{ span: 1 }}>
                                <Button disabled={hide} onClick={submit} >Submit</Button>
                            </Col>
                        </Form.Group> */}


                    </Form>

                </Card.Body>
            </Card>
        </div >
    )
}

export default Compiler
