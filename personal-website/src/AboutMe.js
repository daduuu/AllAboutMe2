import React, { Component } from 'react';
import Layout from "./Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FadeIn from "react-fade-in";
import bialigy from './img/bialigy.png'
import propic from './img/propic.jpg'
import ucla from './img/ucla.jpeg'
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

class AboutMe extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <div className={"nb"}>

                </div>
                <FadeIn delay={50}>


                    <Row>
                        <Col lg={4}></Col>
                        <Col lg={3}>
                            <h1 className="hp1">About Me</h1>
                            <p className="f2">I am currently pursuing a Computer Science B.S degree at UCLA. I love writing complex and intriguing programs that solve
                                various problems or tasks. I have a strong passion for both computer science and math and I love how
                                they go hand in hand in solving various problems. In my free time I like to cook and practice
                                Tennis.</p>
                        </Col>
                        <Col lg={5}>
                            <img src={propic} alt={"Profile Pic"} id={"propic"}/>
                        </Col>

                    </Row>
                    <Row className={"nb"}>
                        <Col lg={4}></Col>
                        <Col lg={3}>
                            <h1>What have I've been up to?</h1>
                        </Col>
                        <Col lg={5}></Col>
                    </Row>
                    <Row className={"nb"}>
                        <Col lg={4}></Col>
                        <Col lg={3}>
                            <p><img src={ucla} alt="Ucla Image" class="ucla" /></p>
                        </Col>
                        <Col lg={2}>
                            <p>UCLA</p>
                            <p>Computer Science B.S</p>
                            <p>I've taken CS111, CS180, CS35L, CS33, Math 115A, Math 131A, Math 61</p>
                        </Col>
                        <Col lg={3}></Col>

                    </Row>
                    <Row>
                        <Col lg={4}></Col>
                        <Col lg={3}><img src={bialigy} alt="bialigy image" /></Col>
                        <Col lg={2}>
                            <p>Bialigy.com</p>
                            <p>Full Stack Developer</p>
                            <p>Created a website based communication board using Javascript, NodeJS/React, and mySQL to facilitate communication between 500+ university students and the instructors at Bialigy. I also developed a website based chemical equation balancer tool for university students to use.
                            </p>
                        </Col>
                        <Col lg={3}></Col>

                    </Row>
                    <Row className={"nb"}>
                        <Col></Col>
                        <Col>
                            <Link to="/Projects" style={{color : "white"}} className={"d-flex justify-content-center"}>
                                <button type="button" className="btn btn-dark button">
                                    <span>Check Out My Projects!</span>
                                </button>
                            </Link>
                        </Col>
                        <Col></Col>

                    </Row>
                </FadeIn>
            </div>

        );
    }
}
export default AboutMe;