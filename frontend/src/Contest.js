import React, { useState, useEffect } from 'react'
import ContestService from './services/contest.service'
import { Card, ListGroup } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
//import Pbm from './Problem.js'



function Contest() {

    const [isLoading, setisLoading] = useState(false)
    const [cntt, setcntt] = useState(null)

    useEffect(() => {
        setisLoading(true)
        ContestService.getcontest().then((response) => {
            //console.log(response);
            setisLoading(false)
        }, (error) => {

        })
    }, [])

    useEffect(() => {
        console.log(cntt)
    }, [cntt])


    function handleClick(cont) {


        setcntt(cont);

        console.log(cntt)

    }

    if (cntt != null) {
        return (<div>
            here
        </div>)
    } else {

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
                        {localStorage.getItem("Contests") && JSON.parse(localStorage.getItem("Contests")).map(cont => <ListGroup.Item action onClick={() => handleClick({ cont })} disabled={isLoading} >{cont.title}</ListGroup.Item>)}
                    </ListGroup>
                </Card>


            </div >
        )
    }
}

export default Contest

