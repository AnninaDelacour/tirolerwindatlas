import React from 'react';
import './navheader.css';
import {Navbar} from 'react-bootstrap';

function NavHeader() {
    return (
        <Navbar className="nav-bg-color navbar">
            <Navbar.Brand className="navbar-brand">
                Windatlas Tirol
            </Navbar.Brand>
        </Navbar>
    );
}

export default NavHeader;