import React from 'react';
import * as reactBootstrap from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../styles/navbar.css';
export default function Navbar() {

    return (

        <reactBootstrap.Navbar 
        style=
        {    
            {boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px"}
        }
         bg="light" expand="lg">
            <reactBootstrap.Container>
                <reactBootstrap.Navbar.Brand className='navTitle'>Tanger Med Tech</reactBootstrap.Navbar.Brand>
                <reactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <reactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                    <reactBootstrap.Nav className="me-auto">
                        <reactBootstrap.Nav className='linknav' href="#home"><Link to="/" className="link">Home</Link></reactBootstrap.Nav>
                        <reactBootstrap.Nav className='linknav' href="#link"><Link to="/dashboard" className="link">Dashboard</Link></reactBootstrap.Nav>
                        <reactBootstrap.Nav className='linknav' href="#link"><Link to="/about" className="link">About</Link></reactBootstrap.Nav>
                        <reactBootstrap.Nav  href="#link"><Link to="/login" className="link"><reactBootstrap.Button style={{backgroundColor: "#0E185F",border:"none"}} variant="primary" >Login</reactBootstrap.Button></Link></reactBootstrap.Nav>
                    </reactBootstrap.Nav>
                </reactBootstrap.Navbar.Collapse>
            </reactBootstrap.Container>
        </reactBootstrap.Navbar>

    )
}
