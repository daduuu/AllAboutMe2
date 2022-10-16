import { Outlet, Link, useNavigate, Redirect} from "react-router-dom";
import React, {Component} from "react";
import {Navbar, NavLink, Container, Nav, Button} from "react-bootstrap";


class Layout extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <>
                <Navbar bg="dark" variant="dark">
                    <Container id="leftnavbar">
                        <Navbar.Brand as={Link} to="/">David Du</Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/AboutMe">About Me</Nav.Link>
                        </Nav>
                    </Container >
                </Navbar>
                <Outlet />
            </>
        );
    }

};

export default Layout;