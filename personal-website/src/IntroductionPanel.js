import React, { Component } from 'react';
import Layout from "./Layout";
import {Link} from "react-router-dom";
import Button from "bootstrap/js/src/button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class IntroductionPanel extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Row>
                    <Col></Col>
                    <Col>
                        <h1>Hello! My name is David Du</h1>
                        <p>Student Developer</p>
                    </Col>
                    <Col></Col>
                </Row>



            </div>

        );
    }
}
export default IntroductionPanel;