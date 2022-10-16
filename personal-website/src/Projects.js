import React, { Component } from 'react';
import Layout from "./Layout";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FadeIn from "react-fade-in";

class Projects extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <FadeIn>


                    <Row>
                        <Col></Col>
                        <Col>
                            <h2> AllAboutMe <a target="_blank" href="https://github.com/daduuu/AllAboutMe">
                                <img src="img/link.png" alt="Github Link"/>
                            </a></h2>
                            <p>The code for this website!</p>
                        </Col>
                        <Col>
                            <h2> Hanoi_The_N_Towers <a target="_blank"
                                                       href="https://github.com/daduuu/collection_of_algorithms/blob/master/hanoi.cpp">
                                <img src="img/link.png" alt="Github Link"/>
                            </a></h2>
                            <p>A project to implement the currently unproven solution to the problem of
                                the towers of Hanoi, with there being n towers. Uses DP and recursion to implement the
                                solution where you find k optimal towers to move to the next tower, then move the rest.</p>

                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <h2> compassTracking <a target="_blank" href="https://github.com/daduuu/compassTracking">
                                <img src="img/link.png" alt="Github Link"/>
                            </a></h2>
                            <p>A Minecraft Plugin that allows compass to track players for games like
                                manhunt or for spectator use. Even works in the nether!</p>


                        </Col>
                        <Col>
                            <h2> deathSwapMultiple <a target="_blank" href="https://github.com/daduuu/deathSwapMultiple">
                                <img src="img/link.png" alt="Github Link" />
                            </a></h2>
                            <p> A Minecraft Plugin that shuffles mulitple player's positions with each
                                other randomly after 5 minutes. Originally written for games like Minecraft Death Swap!</p>


                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <h2> Floyd's Algorithm <a target="_blank" href="https://github.com/daduuu/collection_of_algorithms/blob/master/floyd.cpp">
                                <img src="img/link.png" alt="Github Link"/>
                            </a></h2>
                            <p>A project to determine if a linked list has a cycle, when does that
                                cycle start, and how long the cycle is using a fast pointer and a slow pointer, Floyd’s
                                algorithm</p>


                        </Col>
                        <Col>
                            <h2> 2sat <a target="_blank" href="https://github.com/daduuu/collection_of_algorithms/blob/master/2sat.cpp">
                                <img src="img/link.png" alt="Github Link"/>
                            </a></h2>
                            <p>Code to determine if a boolean statement is satisfiable, specifically one in conjunctive normal form with each clause a disjunction with 2 variables which can be negated if so chosen. Uses strongly connected component method developed by Kosaraju in order to solve the problem, specifically determining the condensation of the strongly connected components then reverse topologically sorting, assigning truth values and seeing if it is satisfiable, then printing the truth values of the the variables if satisfiable in O(n) time.</p>

                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <h2> Josepheus <a target="_blank" href="https://github.com/daduuu/collection_of_algorithms/blob/master/josephus.cpp">
                                <img src="img/link.png" alt="Github Link"/>
                            </a></h2>
                            <p>A small project to see who survives in the classic Josephus problem,
                                where every k person dies. Utilises a circular linked list</p>


                        </Col>
                        <Col>
                            <h2> Tetrominoes_placer_2d <a target="_blank" href="https://github.com/daduuu/collection_of_algorithms/blob/master/tetrominoes_placer_2d.cpp">
                                <img src="img/link.png" alt="Github Link"/>
                            </a></h2>
                            <p>Tetrominoes_placer_2d is to find if tetrominoes can be placed on a x by
                                y board using “dancing links” from Knuth</p>


                        </Col>
                        <Col></Col>
                    </Row>

                </FadeIn>

            </div>

        );
    }
}
export default Projects;