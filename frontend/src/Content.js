import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import { Player, ControlBar, PlaybackRateMenuButton, VolumeMenuButton } from 'video-react'
import './Content.css';
import "../node_modules/video-react/dist/video-react.css";

function Content() {
    return (

        <div className="Content__Text">
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">Topic</Card.Title>
                    <Col>
                        <Card >
                            <Card.Header>Binary Search</Card.Header>
                            <Card.Body>
                                <Card.Text>
                                    <p>Lorem ipsum How are you all</p>
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
                                        <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
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
