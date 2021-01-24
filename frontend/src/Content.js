import React, { useEffect } from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { Player, ControlBar, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react'
import './Content.css';
import "../node_modules/video-react/dist/video-react.css";

function Content({ topic, content, vlink }) {

    useEffect(() => {
        console.log(topic + " " + content + " " + vlink + "\n")
    }, [])

    return (

        <div className="Content__Text">
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">Topic</Card.Title>
                    <Col>
                        <Card >
                            <Card.Header>{topic}</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p>{content}</p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <div className="Content__Video">
                        <Col>
                            <Card>
                                <Card.Header> Video </Card.Header>
                                <div className="Content__VideoAlign">
                                    <Player playsInline fluid={false} width={700} height={300}>
                                        <source src={vlink} />
                                        <ControlBar>
                                            <PlaybackRateMenuButton rates={[2, 1.5, 1]} order={7.1} />
                                            <VolumeMenuButton disabled />
                                        </ControlBar>
                                    </Player>
                                </div>
                            </Card>
                        </Col>
                    </div>
                </Card.Body>
            </Card>
        </div>

    )
}

export default Content
