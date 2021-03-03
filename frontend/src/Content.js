import React from 'react'
import { Row, Col, Card } from 'react-bootstrap';
import ReactPlayer from 'react-player'
import './Content.css';
import "../node_modules/video-react/dist/video-react.css";

function Content({ topic, content, vlink }) {

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
                                    {/* <Player playsInline fluid={false} width={700} height={300}>
                                        <source src={vlink} />
                                        <ControlBar>
                                            <PlaybackRateMenuButton rates={[2, 1.5, 1]} order={7.1} />
                                            <VolumeMenuButton disabled />
                                        </ControlBar>
                                    </Player> */}
                                    <ReactPlayer
                                        width='700px'
                                        height='300px'
                                        controls
                                        url={vlink}

                                    />
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
