import Navbar from "react-bootstrap/Navbar";
import React from "react";
import {NavLink} from 'react-router-dom';
import Container from "react-bootstrap/Container";
import Nav from 'react-bootstrap/Nav';

export default function MainNav() {
    return (
        <>
            <>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <NavLink
                            className={'navbar navbar-brand px-2'}
                            to={`/`}>
                            STARTER
                        </NavLink>
                        <Nav className="me-auto">

                            <NavLink className={'nav-link'} to={'/test'}>Test Server</NavLink>
                        </Nav>

                    </Container>
                </Navbar>


            </>

        </>
    );
}