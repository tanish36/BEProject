import React, { useState, useEffect } from 'react'
import ContestService from './services/contest.service'
import { Button, Card, CardColumns, ListGroup } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import Cct from './CContest.js'
import { duration } from '@material-ui/core';



function Contest() {

    const [isLoading, setisLoading] = useState(false);


    /*
    
    useState(null)
    
    */
    const [ccid, setccid] = useState("");

    useEffect(() => {
        setisLoading(true)
        ContestService.getcontest().then((response) => {
            //console.log(response);
            setisLoading(false)
        }, (error) => {

        })
    }, [])

    // ccid != null 
    if (ccid != undefined && ccid != "") {
        return <Cct ccid={ccid} />
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
                                return <RegisterUserForContest setccid={setccid} contestId={cont.contestid} topic={cont.title} timestamp={cont.timestamp} />

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
                                return <RegisterUserForContest setccid={setccid} contestId={cont.contestid} topic={cont.title} timestamp={cont.timestamp} />
                        }

                        )
                        }
                    </ListGroup>
                </Card>


            </div >
        )
    }

}

const RegisterUserForContest = ({ contestId, topic, timestamp, setccid }) => {

    const [show, setshow] = useState(true)
    const [isRegistered, setisRegistered] = useState(false);

    useEffect(() => {

        var dt = new Date();
        var gt = new Date(timestamp);

        if (dt.getTime() > gt.getTime()) {
            setshow(false);
        }

    }, [])

    function handleClick(contestId) {

        // abhi wala timestamp  < timestamp
        var dt = new Date();
        var gt = new Date(timestamp);

        console.log(dt.getTime() + " " + gt.getTime())

        /*
         var obj = {

            ...
         }

         setccid(obj);
        */


        /*
        var obj = {

            ...
         }
          
         localStorage.setItem("Temporary Storage", JSON.stringify(obj));
        
        */

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

    return (
        < ListGroup.Item action onClick={() => handleClick(contestId)}  > {show ? <Button disabled={isRegistered} onClick={() => register(contestId)}> Register </Button> : null}   {topic} </ListGroup.Item>
    )
}


export default Contest

