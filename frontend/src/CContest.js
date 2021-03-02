import React, { useState, useEffect } from 'react'
import ContestService from './services/contest.service'
import { Card, ListGroup } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import Pbm from './Problem.js'

function CContest({ ccid }) {

    const [isLoading, setisLoading] = useState(false)
    const [problem, setproblem] = useState(null)

    var cp_id = ccid;
    console.log(cp_id);
    useEffect(() => {
        setisLoading(true)
        ContestService.getcproblem(cp_id).then((response) => {
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

       if( problem != null)
       {
        return <Pbm name={problem.cont.problem_name} tags={problem.cont.problem_tags}  statement={problem.cont.problem_statement} exampl={problem.cont. problem_io} constraints={problem.cont.problem_con} txtcase={problem.cont.problem_test}/>
    
       }
       else{
        return (
            <div>
                {
                    isLoading ?
                        <div className="Loader">
                            <CircularProgress />
                        </div> : null
                }
                
                < Card >
               
                    <Card.Header> {ccid}</Card.Header>
                    
                </Card>
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
