import { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class Navigationbar extends Component {
    render() {
        return (
            <>
                <Navbar bg="primary" variant="dark" expand="lg">
                    <Container>
                        <Navbar.Brand>Char Dham Hari</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <LinkContainer to='/'>
                                    <Nav.Link>Home</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='/createagent'>
                                    <Nav.Link>Register Agent</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to='agent-list'>
                                    <Nav.Link>Agent List</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        );
    }
}