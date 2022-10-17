import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TypeAnimation } from 'react-type-animation';
import FadeIn from "react-fade-in";
import Container from "react-bootstrap/Container";


class IntroductionPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class={"code viewport100"} >
                <Container fluid className={"px-5"}>
                    <FadeIn>
                        <Row className={"align-items-center viewport100"}>
                            <Col>
                                <FadeIn>
                                    <TypeAnimation
                                        sequence={[
                                            'Hello! My Name Is David Du',
                                            200
                                        ]}
                                        wrapper="div"
                                        cursor={true}
                                        repeat={1}
                                        style={{ fontSize: '2em'}}
                                    />
                                </FadeIn>
                                <FadeIn delay={1700}>
                                    <p>Student Developer</p>
                                </FadeIn>
                                <FadeIn delay={2000}>
                                    <Link to="/AboutMe" style={{color : "white"}} className={"d-flex justify-content-center"}>
                                        <button type="button" className="btn btn-dark button">
                                            <span>Learn More About Me!</span>
                                        </button>
                                    </Link>

                                </FadeIn>

                            </Col>

                        </Row>
                    </FadeIn>
                </Container>

            </div>

        );
    }
}
export default IntroductionPanel;