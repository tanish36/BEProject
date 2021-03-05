import React, { useState, useEffect } from 'react'
import ContestService from './services/contest.service'
import { Button, Card, CardColumns, ListGroup } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import Cct from './CContest.js'

function Contest() {

    const [isLoading, setisLoading] = useState(false);

    const [ccid, setccid] = useState("");
    const [isRunning, setisRunning] = useState(false)

    useEffect(() => {
        setisLoading(true)
        ContestService.getcontest().then((response) => {
            setisLoading(false)
        }, (error) => {

        })
    }, [])

    // ccid != null 
    if (ccid != undefined && ccid != "") {
        console.log("Running: " + isRunning)
        return <Cct isRunning={isRunning} ccid={ccid} />
    }
    else {
        return (
            <div>
                {
                    isLoading ?
                        <div className="Loader">
                            <CircularProgress />
                        </div> : null
                }


                < Card >
                    <Card.Header>Upcoming Contests</Card.Header>
                    <ListGroup variant="flush">
                        {localStorage.getItem("Contests") && JSON.parse(localStorage.getItem("Contests")).map(cont => {

                            let cur = new Date()
                            let myTime = new Date(cont.timestamp)


                            if (cur.getTime() <= myTime.getTime())
                                return <RegisterUserForContest setisRunning={setisRunning} setccid={setccid} duration={cont.duration} contestId={cont.contestid} topic={cont.title} timestamp={cont.timestamp} />

                        }
                        )
                        }
                    </ListGroup>
                </Card>

                <br />

                < Card >
                    <Card.Header>Past Contests</Card.Header>
                    <ListGroup variant="flush">
                        {localStorage.getItem("Contests") && JSON.parse(localStorage.getItem("Contests")).map(cont => {

                            let cur = new Date()
                            let myTime = new Date(cont.timestamp)


                            if (cur.getTime() > myTime.getTime())
                                return <RegisterUserForContest setisRunning={setisRunning} setccid={setccid} contestId={cont.contestid} topic={cont.title} duration={cont.duration} timestamp={cont.timestamp} />
                        }

                        )
                        }
                    </ListGroup>
                </Card>


            </div >
        )
    }

}

const RegisterUserForContest = ({ contestId, topic, timestamp, setccid, duration, setisRunning }) => {

    const [show, setshow] = useState(false)
    const [isRegistered, setisRegistered] = useState(false);
    const [running, setrunning] = useState(false)

    useEffect(() => {

        let email = JSON.parse(localStorage.getItem("user")).email;
        ContestService.isRegistered(contestId, email).then((response) => {
            console.log(response)
            if (response.message === "User Registered") {
                setisRegistered(true);
            }
        }, (error) => {

        })

        var dt = new Date();
        var gt = new Date(timestamp);
        var limit = new Date(gt.getTime() + (duration * 60 * 60 * 1000));

        if (dt.getTime() >= gt.getTime() && limit.getTime() >= dt.getTime()) {
            console.log("running")
            setrunning(true);
            setisRunning(true);
        } else {
            setisRunning(false);
        }

        if (dt.getTime() > gt.getTime()) {
            setshow(true);
        }



    }, [])

    function handleClick(contestId) {

        // abhi wala timestamp  < timestamp
        var dt = new Date();
        var gt = new Date(timestamp);

        console.log(dt.getTime() + " " + gt.getTime())

        setccid(contestId);
        console.log(contestId)
    }

    function register(contestid) {

        var email = JSON.parse(localStorage.getItem("user")).email;
        ContestService.registeruser(email, contestid).then(() => {

        }, (error) => {

        })

        setisRegistered(true);
    }

    if (running && isRegistered) {
        return (
            < ListGroup.Item action onClick={() => handleClick(contestId)} > <Button disabled={true} > Enter Now </Button> {topic} </ ListGroup.Item>
        )
    } else if (running && !isRegistered) {
        < ListGroup.Item  > <Button onClick={() => register(contestId)} > Register  </Button> {topic} </ ListGroup.Item>
    }

    if (show == false) {

        if (isRegistered) {

            return (
                < ListGroup.Item  > <Button disabled={true} > Registered </Button> {topic} </ ListGroup.Item>
            )
        }

        return < ListGroup.Item  > <Button onClick={() => register(contestId)} > Register  </Button> {topic} </ ListGroup.Item>
    }

    return (
        < ListGroup.Item action onClick={() => handleClick(contestId)}  > {topic} </ListGroup.Item>
    )
}


export default Contest

