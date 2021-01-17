import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import DiscussAnswer from './DiscussAnswer'

function DiscussHeader({ Topic, firstname, lastname, Rank, Content }) {

    const [clicked, setclicked] = useState(false)
    // TO - DO : Implement this function;
    function handleOnclick(event) {
        setclicked(true);
    }

    return (
        <>
            {
                clicked ?
                    <>
                        <DiscussAnswer Title={Topic} Content={Content} />
                    </> :
                    <Card>
                        <Card.Header>{firstname} {lastname} , {Rank}</Card.Header>
                        <Card.Body>
                            <Card.Title>{Topic}</Card.Title>
                            <Card.Text>
                                {Content}
                            </Card.Text>
                            <Button variant="primary" onClick={handleOnclick}>Answer</Button>
                        </Card.Body>
                    </Card>
            }
        </>

    )
}

export default DiscussHeader
