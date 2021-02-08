import React, { useState, useEffect } from 'react'
import ContestService from './services/contest.service'
import { Card, ListGroup } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import Pbm from './Problem.js'
function AllProblem() {

    const [isLoading, setisLoading] = useState(false)
    const [problem, setproblem] = useState(null)

    useEffect(() => {
        setisLoading(true)
        ContestService.getproblems().then((response) => {
            //console.log(response);
            setisLoading(false)
        }, (error) => {

        })
    }, [])

    useEffect(() => {
        console.log(problem)
    }, [problem])


    function handleClick(cont) {


        setproblem(cont);

        console.log(problem)

    }

    if (problem != null) {
        return <Pbm name={problem.cont.problem_name} tags={problem.cont.problem_tags}  statement={problem.cont.problem_statement} exampl={problem.cont. problem_io} constraints={problem.cont.problem_con} txtcase={problem.cont.problem_test}/>
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
                    <Card.Header>Problem Set</Card.Header>
                    <ListGroup variant="flush">
                        {localStorage.getItem("Problems") && JSON.parse(localStorage.getItem("Problems")).map(cont => <ListGroup.Item action onClick={() => handleClick({ cont })} disabled={isLoading} >{cont.problem_name}</ListGroup.Item>)}
                    </ListGroup>
                </Card>


            </div >
        )
    }

}

export default AllProblem
