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
                <div className={"nb"}>

                </div>
                <FadeIn>

                    <Row>
                        <Col lg={4}></Col>
                        <Col lg={4}>
                            <h1 className={"centered nb"}>Thanks for checking out my website!</h1>
                            <h2 className={"centered"}>Contact Me!</h2>
                        </Col>
                        <Col lg={4}></Col>
                    </Row>
                    <Row>
                        <Col lg={5}></Col>
                        <Col lg={2}>
                            <div className={"text-center"}>
                                <a href="mailto:daviddu0425@gmail.com" target="_blank">
                                    <img src={gmail} alt="Gmail Link" className={"contactPhotos"}/>
                                </a>

                                <a href="https://www.linkedin.com/in/david-duu" target="_blank">
                                    <img src={linkedin} alt="LinkedIn Link" className={"contactPhotos2"} />
                                </a>
                            </div>


                        </Col>
                        <Col lg={5}></Col>
                    </Row>


                </FadeIn>
            </div>

        );
    }
}

export default Contact;
