import React, { useState, useEffect } from 'react'
import ContentService from './services/content.service'
import { Card, ListGroup } from 'react-bootstrap'
import CircularProgress from '@material-ui/core/CircularProgress';
import Content from './Content';

function ContentEntry() {

    const [isLoading, setisLoading] = useState(false)
    const [topic, settopic] = useState(null)

    useEffect(() => {
        setisLoading(true)
        ContentService.getcontent().then((response) => {
            //console.log(response);
            setisLoading(false)
        }, (error) => {

        })
    }, [])

    useEffect(() => {
        console.log(topic)
    }, [topic])


    function handleClick(cont) {


        settopic(cont);

        console.log(topic)

    }

    if (topic != null) {
        return <Content topic={topic.cont.topic_name} content={topic.cont.topic_content} vlink={topic.cont.topic_vlink} />
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
                    <Card.Header>Learn</Card.Header>
                    <ListGroup variant="flush">
                        {localStorage.getItem("Content") && JSON.parse(localStorage.getItem("Content")).map(cont => <ListGroup.Item action onClick={() => handleClick({ cont })} disabled={isLoading} >{cont.topic_name}</ListGroup.Item>)}
                    </ListGroup>
                </Card>


            </div >
        )
    }

}

export default ContentEntry
