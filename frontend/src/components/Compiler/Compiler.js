import React, { useState, useEffect } from 'react'
import { Card, Form, Button, Row, Col } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import Alertdism from '../../Alertdism';
import CompilerService from '../../services/compiler.service'
import AuthService from '../../services/auth.service'

function Compiler({ input, output, score, nos, pid, cid, isContest, isRunning }) {

    const [hide, sethide] = useState(false)
    const [isLoading, setisLoading] = useState(false)
    const [success, setsuccess] = useState(3)
    const [message, setmessage] = useState("")


    console.log(pid + " " + cid + " " + isContest + " " + isRunning)

    let email = JSON.parse(localStorage.getItem("user")).email;

    function handleClick(event) {

        let outputt = document.getElementById("Form.ControlOutput");

        sethide(true);

        event.preventDefault();
        var lang_id = event.target[0].value
        var source = event.target[1].value

        //var input = event.target[2].value || input;

        console.log(lang_id);
        console.log(source);
        console.log(input);
        console.log(output)

        outputt.innerHTML = "";

        setisLoading(true);

        CompilerService.run_code(lang_id, source, input, output).then((response) => {

            localStorage.setItem("token", response.token);

            outputt.innerHTML += "Code is Submitted Sucessfully ! \n";

            setisLoading(false);

            sethide(false);


        }, (error) => {

        })


    }

    function b64DecodeUnicode(str) {
        // Going backwards: from bytestream, to percent-encoding, to original string.
        return decodeURIComponent(atob(str).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    }


    const Submit = async () => {

        let outputt = document.getElementById("Form.ControlOutput");


        var token = localStorage.getItem("token");

        sethide(true);

        setisLoading(true);


        while (1) {

            await CompilerService.getSolution(token).then((resp) => {

                console.log(resp)

                setsuccess(2)
                setmessage("In Queue")

                if (resp.status.description !== "Queue" && resp.status.description !== "Processing") {

                    setisLoading(false);
                    sethide(false);


                    if (resp.compile_output != null) {

                        outputt.innerHTML = outputt.innerHTML + b64DecodeUnicode(resp.compile_output) + "\n";

                    } else if (resp.stderr != null) {

                        outputt.innerHTML = outputt.innerHTML + b64DecodeUnicode(resp.stderr) + "\n";

                    } else {

                        outputt.innerHTML = outputt.innerHTML + resp.status.description + "\n";

                        if (resp.status.description === "Wrong Answer" || resp.status.description === "Compilation Error" || resp.status.description === "Time Limit Exceeded") {

                            setsuccess(0)
                            setmessage(resp.status.description);

                            if (resp.status.description === "Wrong Answer" || resp.status.description === "Compilation Error") {
                                AuthService.saveGraph(email, "wa").then((resp) => {
                                    console.log(resp)
                                }, (err) => {
                                    console.log(err)
                                })
                            } else {
                                AuthService.saveGraph(email, "tle").then((resp) => {
                                    console.log(resp)
                                }, (err) => {
                                    console.log(err)
                                })
                            }

                        } else if (resp.status.description === "Accepted") {
                            setsuccess(1)
                            setmessage(resp.status.description);


                            AuthService.saveGraph(email, "ac").then((resp) => {
                                console.log(resp)
                            }, (err) => {
                                console.log(err)
                            })


                        } else {
                            setsuccess(2);
                            setmessage(resp.status.description);
                        }

                        outputt.innerHTML = outputt.innerHTML + b64DecodeUnicode(resp.stdout) + "\n";
                    }
                }

            }, (error) => {

            })

            if (hide == false) {
                break;
            }
        }

    }

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

                    <Form id="myForm" className="form" onSubmit={handleClick}>

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

                        <Form.Group as={Row}>
                            <Col sm={{ span: 1 }}>
                                <Button disabled={hide} onClick={Submit} >Submit</Button>
                            </Col>
                        </Form.Group>


                    </Form>

                </Card.Body>
            </Card>
        </div >
    )
}

export default Compiler
