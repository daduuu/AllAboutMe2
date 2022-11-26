import React, { Component } from 'react';
import Layout from "./Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FadeIn from "react-fade-in";
import link from "./img/link.png"
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import Container from "react-bootstrap/Container";

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Container fluid className={"px-3"}>
                    <div className={"nb"}>

                    </div>
                    <FadeIn>

                        <Row>
                            <Col></Col>
                            <Col lg={4}>
                                <h2> AllAboutMe2 <a target="_blank" href="https://github.com/daduuu/AllAboutMe2">
                                    <img src={link} alt="Github Link" class="link"/>
                                </a></h2>
                                <p>The code for this website!</p>
                            </Col>
                            <Col lg={3}>
                                <h2> Sudokle <a target="_blank" href="https://github.com/daduuu/sudokle">
                                    <img src={link} alt="Github Link" className="link"/>
                                </a></h2>
                                <p>A Modernized Daily Sudokle Web Game. A new sudokle puzzle is created daily to challenge players. Players with the best times are displayed on the leaderboards. Players can practice by generating a puzzle and solving. Built using Node.js, React, Express.js, mySql, and Javascript. </p>
                            </Col>

                            <Col></Col>
                        </Row>
                        <Row className={"nb"}>
                            <Col></Col>
                            <Col lg={4}>
                                <h2> RadixTree <a target="_blank" href="https://github.com/daduuu/RadixTree">
                                    <img src={link} alt="Github Link" className="link"/>
                                </a></h2>
                                <p>RadixTree written in C++. Each Node stores a generic type so that the tree can be used for a hashmap that maps strings to a generic type.</p>



                            </Col>
                            <Col lg={3}>
                                <h2> Communication Board <a target="_blank" href="https://github.com/daduuu/communication_board">
                                    <img src={link} alt="Github Link" className="link"/>
                                </a></h2>
                                <p>Communication Board for students to communicate with instructors. Built using Node.js, Express.js, mySql, and Javascript.</p>

                            </Col>
                            <Col></Col>
                        </Row>
                        <Row className={"nb"}>
                            <Col></Col>
                            <Col lg={4}>
                                <h2> My FNN <a target="_blank" href="https://github.com/daduuu/myFNN">
                                    <img src={link} alt="Github Link" className="link"/>
                                </a></h2>
                                <p>My FNN (first neural network) implementation using PyTorch. A simple neural network that trains to the FashionMNIST dataset.</p>



                            </Col>
                            <Col lg={3}>
                                <h2> Tetrominoes_placer_2d <a target="_blank" href="https://github.com/daduuu/collection_of_algorithms/blob/master/tetrominoes_placer_2d.cpp">
                                    <img src={link} alt="Github Link" className="link"/>
                                </a></h2>
                                <p>Tetrominoes_placer_2d is program written in C++ which solves the exact cover problem, specificially it finds if tetrominoes can be placed on a x by
                                    y board using “dancing links” from David Knuth's Algorithm X. <a target="_blank" href="https://www.ocf.berkeley.edu/~jchu/publicportal/sudoku/0011047.pdf">
                                        <img src={link} alt="Github Link" className="linkSmall"/> </a></p>
                            </Col>
                            <Col></Col>
                        </Row>
                        <Row>
                            <Col></Col>
                            <Col lg={4}>
                                <h2> Hanoi_The_N_Towers <a target="_blank"
                                                           href="https://github.com/daduuu/collection_of_algorithms/blob/master/hanoi.cpp">
                                    <img src={link} alt="Github Link" className="link"/>
                                </a></h2>
                                <p>A C++ project to implement the currently unproven solution to the problem of
                                    the towers of Hanoi, with there being n towers. Uses DP and recursion to implement the
                                    solution where you find k optimal towers to move to the next tower, then move the rest.</p>


                            </Col>
                            <Col lg={3}>
                            </Col>

                            <Col></Col>
                        </Row>


                        <Row>
                                <Link to="/Contact" style={{color : "white"}} className={"d-flex justify-content-center"}>
                                    <button type="button" className="btn btn-dark button">
                                        <span>Contact Me!</span>
                                    </button>
                                </Link>


                        </Row>




                    </FadeIn>
                </Container>

            </div>

        );
    }
}
export default Projects;