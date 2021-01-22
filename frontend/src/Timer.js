import React, { useState, useEffect } from 'react'
import { Row, ProgressBar } from 'react-bootstrap'
import { Countdown, useCountdown } from "react-time-sync";

const Timer = ({ until }) => {
    const timeLeft = useCountdown({ until });
    const [initialState, setInitialstate] = useState(100)

    useEffect(() => {
        setInitialstate(timeLeft);
    }, [])

    return (
        <>
            <Countdown until={until}>
                {({ timeLeft }) => (

                    <>
                        {Math.round((timeLeft / initialState) * 100) > 50 ? <ProgressBar animated now={Math.round((timeLeft / initialState) * 100)} /> : <>{Math.round((timeLeft / initialState) * 100) > 10 ? <ProgressBar variant="warning" animated now={Math.round((timeLeft / initialState) * 100)} /> : <ProgressBar variant="danger" animated now={Math.round((timeLeft / initialState) * 100)} />}</>}
                        <div>{timeLeft > 0 ? `${timeLeft} seconds left` : 'Done!'}</div>
                    </>
                )}
            </Countdown>
        </>

    );
}

export default Timer;