import React, { useContext } from 'react';
import * as reactBootstrap from 'react-bootstrap';
import { Link, NavLink } from "react-router-dom";
import { Context } from '../../contexts/Context';
import '../styles/navbar.css';
export default function Navbar() {

    const {user, dispatch} = useContext(Context);
    
    const handeleLogout = () => {
        dispatch({type: "LOGOUT"})
    }

    return (

        <reactBootstrap.Navbar
            style=
            {
                { boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px" }
            }
            bg="light" expand="lg">
            <reactBootstrap.Container>
                <reactBootstrap.Navbar.Brand className='navTitle'>Tanger Med Tech</reactBootstrap.Navbar.Brand>
                <reactBootstrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
                <reactBootstrap.Navbar.Collapse id="basic-navbar-nav">
                    <reactBootstrap.Nav className="me-auto">

                        <reactBootstrap.Nav className='linknav' ><Link to="/" className="linknav">HOME</Link></reactBootstrap.Nav>
                        <reactBootstrap.Nav className='linknav' ><Link to="/dashboard" className="linknav">DASHBOARD</Link></reactBootstrap.Nav>
                        <reactBootstrap.Nav className='linknav' ><Link to="/about" className="linknav">ABOUT</Link></reactBootstrap.Nav>
                        {!user ? (
                            <reactBootstrap.Nav>
                            <Link to="/login" className="linknav">
                                LOGIN
                            </Link>
                        </reactBootstrap.Nav>
                        ) : (
                            <reactBootstrap.Nav></reactBootstrap.Nav>)}
                             
                      
                            <reactBootstrap.Nav className='linknav logoutLink'
                                onClick={handeleLogout}
                                style={{cursor:"pointer"}}
                            >
                                {user && "LOGOUT"}

                            </reactBootstrap.Nav>
                    
                       

                    </reactBootstrap.Nav>
                </reactBootstrap.Navbar.Collapse>
            </reactBootstrap.Container>
        </reactBootstrap.Navbar>

    )
}
