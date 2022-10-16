import React, {Component} from "react";
import './App.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FadeIn from "react-fade-in";
import gmail from "./img/gmaillogo.svg"
import linkedin from "./img/linkedinlogo.jpg"


class Contact extends Component {
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
                            <h1>Contact Me!</h1>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row>
                        <Col></Col>
                        <Col>
                            <a href="mailto:daviddu0425@gmail.com" target="_blank">
                                <img src={gmail} alt="Gmail Link" />
                            </a>

                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/in/david-duu" target="_blank">
                                <img src={linkedin} alt="LinkedIn Link" />
                            </a>
                        </Col>
                        <Col></Col>
                    </Row>

                </FadeIn>
            </div>

        );
    }
}

export default Contact;
