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
                            <p>A Modernized Daily Sudokle Web Game. A new sudokle puzzle is created daily to challenge players. Players with the best times are displayed on the leaderboards. Players can practice by generating a puzzle and solving. Built using NodeJS, React, Express, mySql, and Javascript. </p>
                        </Col>

                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col lg={4}>
                            <h2> Tetrominoes_placer_2d <a target="_blank" href="https://github.com/daduuu/collection_of_algorithms/blob/master/tetrominoes_placer_2d.cpp">
                                <img src={link} alt="Github Link" className="link"/>
                            </a></h2>
                            <p>Tetrominoes_placer_2d is program written in C++ which finds if tetrominoes can be placed on a x by
                                y board using “dancing links” from David Knuth</p>

                        </Col>
                        <Col lg={3}>
                            <h2> Hanoi_The_N_Towers <a target="_blank"
                                                       href="https://github.com/daduuu/collection_of_algorithms/blob/master/hanoi.cpp">
                                <img src={link} alt="Github Link" className="link"/>
                            </a></h2>
                            <p>A C++ project to implement the currently unproven solution to the problem of
                                the towers of Hanoi, with there being n towers. Uses DP and recursion to implement the
                                solution where you find k optimal towers to move to the next tower, then move the rest.</p>

                        </Col>

                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col lg={4}>
                            <h2> Floyd's Algorithm <a target="_blank" href="https://github.com/daduuu/collection_of_algorithms/blob/master/floyd.cpp">
                                <img src={link} alt="Github Link" className="link"/>
                            </a></h2>
                            <p>A C++ project to determine if a linked list has a cycle, when does that
                                cycle start, and how long the cycle is using a fast pointer and a slow pointer, Floyd’s
                                algorithm</p>


                        </Col>
                        <Col lg={3}>
                            <h2> 2sat <a target="_blank" href="https://github.com/daduuu/collection_of_algorithms/blob/master/2sat.cpp">
                                <img src={link} alt="Github Link" className="link"/>
                            </a></h2>
                            <p>A C++ program to determine if a boolean statement is satisfiable, specifically one in conjunctive normal form with each clause a disjunction with 2 variables which can be negated if so chosen. Uses strongly connected component method developed by Kosaraju in order to solve the problem, specifically determining the condensation of the strongly connected components then reverse topologically sorting, assigning truth values and seeing if it is satisfiable, then printing the truth values of the the variables if satisfiable in O(n) time.</p>

                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className={"nb"}>
                        <Col></Col>
                        <Col lg={4}>
                            <h2> Josepheus <a target="_blank" href="https://github.com/daduuu/collection_of_algorithms/blob/master/josephus.cpp">
                                <img src={link} alt="Github Link" className="link"/>
                            </a></h2>
                            <p>A small C++ project to see who survives in the classic Josephus problem,
                                where every k person dies. Utilises a circular linked list</p>


                        </Col>
                        <Col lg={3}>

                            <h2> compassTracking <a target="_blank" href="https://github.com/daduuu/compassTracking">
                                <img src={link} alt="Github Link" className="link"/>
                            </a></h2>
                            <p>A Java Minecraft Plugin that allows compass to track players for games like
                                manhunt or for spectator use. Even works in different dimensions!</p>


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

            </div>

        );
    }
}
export default Projects;