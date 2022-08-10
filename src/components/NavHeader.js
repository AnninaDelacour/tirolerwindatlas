import React from 'react';
import './navheader.css';
import { Navbar, Container } from 'react-bootstrap';

function NavHeader(){
    return (
        <Navbar className="nav-bg-color" fixed="top">
            <Container>
                <Navbar.Brand className="brand">
                    Windatlas Tirol
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavHeader;