import React, { useState, useEffect } from 'react'
import ContestService from './services/contest.service'
import { Card, ListGroup } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import Pbm from './Problem.js'
import RecommendService from './services/recommend-service';

function AllProblem() {

    const [isLoading, setisLoading] = useState(false)
    const [problem, setproblem] = useState(null)

    useEffect(() => {
        setisLoading(true)
        let email = JSON.parse(localStorage.getItem("user")).email;
        RecommendService.getData(email).then((response) => {
            setisLoading(false)
        }, (error) => {

        })
    }, [])

    useEffect(() => {
        console.log(problem)
    }, [problem])


    function handleClick(cont) {
        setproblem(cont);
    }

    if (problem != null) {
        return <Pbm pid={problem.cont.problem_id} isRunning={false} isContest={false}
            name={problem.cont.problem_name} tags={problem.cont.problem_tags} statement={problem.cont.problem_statement}
            constraints={problem.cont.problem_example} sample_case={problem.cont.problem_samplecase}
            input={problem.cont.problem_input} output={problem.cont.problem_output}
            score={problem.cont.problem_score}
            nos={problem.cont.problem_noofsubmission} />
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
                    <Card.Header>Recommendations</Card.Header>
                    <ListGroup variant="flush">
                        {localStorage.getItem("Problems") && JSON.parse(localStorage.getItem("Problems")).map(cont => <ListGroup.Item action onClick={() => handleClick({ cont })} disabled={isLoading} >{cont.problem_name}</ListGroup.Item>)}
                    </ListGroup>
                </Card>


            </div >
        )
    }

}

export default AllProblem
