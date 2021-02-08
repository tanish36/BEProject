import React, { useState, useEffect } from 'react'
import ContestService from './services/contest.service'
import { Button, Card, ListGroup } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
//import Pbm from './Problem.js'



function Contest() {

    const [isLoading, setisLoading] = useState(false)

    useEffect(() => {
        setisLoading(true)
        ContestService.getcontest().then((response) => {
            //console.log(response);
            setisLoading(false)
        }, (error) => {

        })
    }, [])


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
                        console.log(cur.getTime() + " " + myTime.getTime())

                        if (cur.getTime() < myTime.getTime())
                            return <RegisterUserForContest contestId={cont.contestid} topic={cont.title} timestamp={cont.timestamp} />

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
                        console.log(cur.getTime() + " " + myTime.getTime())

                        if (cur.getTime() > myTime.getTime())
                            return <RegisterUserForContest contestId={cont.contestid} topic={cont.title} />
                    }

                    )
                    }
                </ListGroup>
            </Card>


        </div >
    )

}

const RegisterUserForContest = ({ contestId, topic, timestamp }) => {

    const [show, setshow] = useState(false)
    const [isRegistered, setisRegistered] = useState(false);

    useEffect(() => {

        var dt = new Date();

        if (dt.getTime() < timestamp) {
            setshow(true);
        }

    }, [])

    function handleClick(contestId) {
        ContestService.getcproblem(contestId).then((response) => {

        }, (error) => {

        })
        console.log(contestId)
    }

    function register(contestid) {

        var email = JSON.parse(localStorage.getItem("user")).email;
        ContestService.registeruser(email, contestid).then(() => {

        }, (error) => {

        })

        setisRegistered(true);
    }

    return (
        < ListGroup.Item action onClick={() => handleClick(contestId)}  > {show == false ? <Button disabled={isRegistered} onClick={() => register(contestId)}> Register </Button> : null}   {topic} </ListGroup.Item>
    )
}


export default Contest

