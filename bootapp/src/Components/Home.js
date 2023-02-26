import React from 'react'
import { Alert, Button, Col, Container, Row } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

export default function Home() {
    return (
        <>
            <Container className="mt-5 text-center">
                <Alert variant="success">CHAR DHAM</Alert>
            </Container>
            <Container className="mt-5 text-center">
                <Row>
                <Col lg={6}>
                    <LinkContainer to='/createagent'>
                <Button className="btn btn-primary w-100">Create Agent</Button>
                </LinkContainer>
                </Col>
                <Col lg={6}>
                    <LinkContainer to='/agent-list'>
                <Button className="btn btn-primary w-100">Agent List</Button>
                    </LinkContainer>
                </Col>
                </Row>
            </Container>
        </>
    )
}
