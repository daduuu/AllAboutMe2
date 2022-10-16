import { Outlet, Link, useNavigate, Redirect} from "react-router-dom";
import React, {Component} from "react";

import {Navbar, NavLink, Container, Nav, Button} from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';


class Layout extends Component {
    state = {
        menuShow: false

    }
    constructor(props) {
        super(props);

    }

    handleClose = () => {
        this.setState({menuShow: false})
    };
    handleShow = () => {
        this.setState({menuShow: true})
    };



    render(){
        return(
            <>
                <Navbar key="lg" bg="black" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand as={Link} to="/">David Du</Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" onClick={this.handleShow}/>

                        <Navbar.Offcanvas
                            id="offcanvasNavbar-expand-lg"
                            aria-labelledby="offcanvasNavbarLabel-expand-lg"
                            placement="end"
                            restoreFocus={false}
                            show={this.state.menuShow}
                            onHide={this.handleClose}
                        >
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title id="offcanvasNavbar-expand-lg">
                                        David Du
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body className="justify-content-end">
                                    <Nav >
                                        <Nav.Link as={Link} onClick={this.handleClose} to="/">Home</Nav.Link>
                                        <Nav.Link as={Link} onClick={this.handleClose} to="/AboutMe">About Me</Nav.Link>
                                        <Nav.Link as={Link} onClick={this.handleClose} to="/Projects">Projects</Nav.Link>
                                        <Nav.Link as={Link} onClick={this.handleClose} to="/Contact">Contact Me</Nav.Link>
                                    </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
                <Outlet />
            </>
        );
    }

};

export default Layout;