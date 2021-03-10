import React, { useState, useEffect } from 'react'
import ContestService from './services/contest.service'
import { Card, ListGroup } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import Pbm from './Problem.js'

function CContest({ ccid, isRunning }) {

    const [isLoading, setisLoading] = useState(false)
    const [problem, setproblem] = useState(null)

    var cp_id = ccid;

    useEffect(() => {
        setisLoading(true)
        ContestService.getcproblem(cp_id).then((response) => {
            setisLoading(false)
        }, (error) => {

        })
    }, [])

    useEffect(() => {
        // console.log(problem)
    }, [problem])


    function handleClick(cont) {


        setproblem(cont);

        //   console.log(problem)

    }

    if (problem != null) {
        return <Pbm cid={ccid} pid={problem.cont.problem_id} isRunning={isRunning} isContest={true}
            name={problem.cont.problem_name} tags={problem.cont.problem_tags} statement={problem.cont.problem_statement}
            constraints={problem.cont.problem_example} sample_case={problem.cont.problem_samplecase}
            input={problem.cont.problem_input} output={problem.cont.problem_output}
            score={problem.cont.problem_score}
            nos={problem.cont.problem_noofsubmission} />
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

                <br></br>
                < Card >
                    <Card.Header>Problem Set</Card.Header>
                    <ListGroup variant="flush">
                        {localStorage.getItem(cp_id) && JSON.parse(localStorage.getItem(cp_id)).map(cont => <ListGroup.Item action onClick={() => handleClick({ cont })} disabled={isLoading} >{cont.problem_name}</ListGroup.Item>)}
                    </ListGroup>
                </Card>


            </div >
        )
    }

}

export default CContest
