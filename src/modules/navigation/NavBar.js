import React from 'react';
import {Container,Nav, Navbar} from "react-bootstrap";

const NavBar = () => {
    return (
        <div className={" mt-1"}>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/admin">Admin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;