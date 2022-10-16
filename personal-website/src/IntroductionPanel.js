import React, { Component } from 'react';
import Layout from "./Layout";
import {Link} from "react-router-dom";
import Button from "bootstrap/js/src/button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { TypeAnimation } from 'react-type-animation';
import FadeIn from "react-fade-in";

class IntroductionPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class={"code viewport100"} >
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

                    </Col>

                </Row>

            </div>

        );
    }
}
export default IntroductionPanel;