import React, { Component } from 'react';
import Layout from "./Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FadeIn from "react-fade-in";
import bialigy from './img/bialigy.png'

class AboutMe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <FadeIn delay={50}>


                    <Row>
                        <Col></Col>
                        <Col>
                            <h1 className="hp1">About Me</h1>
                            <p className="f2">I am currently pursuing a Computer Science B.S degree at UCLA. I love writing complex and intriguing programs that solve
                                various problems or tasks. I have a strong passion for both computer science and math and I love how
                                they go hand in hand in solving various problems. In my free time I like to cook and practice
                                Tennis.</p>
                        </Col>
                        <Col></Col>

                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <h1>What have I've been up to?</h1>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <p>Image</p>
                        </Col>
                        <Col>
                            <p>UCLA</p>
                            <p>UCLA description</p>
                        </Col>
                        <Col></Col>

                    </Row>
                    <Row>
                        <Col></Col>
                        <Col><img src={bialigy} alt="bialigy image" /></Col>
                        <Col>
                            <p>Bialigy.com</p>
                            <p>Bialigy Description</p>
                        </Col>
                        <Col></Col>
                    </Row>
                </FadeIn>
            </div>

        );
    }
}
export default AboutMe;