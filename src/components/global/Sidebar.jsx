import '../styles/sidebar.css'
import { NavLink } from "react-router-dom";
import * as reactBootstrap from 'react-bootstrap';
import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';
export default function Sidebar() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <reactBootstrap.Button variant="primary"
                style={
                    {
                        float: "left",
                        backgroundColor: "#0E185F",
                        border: "none",
                        borderRadius: "50%",
                        height: "50px",
                        width: "50px",
                        position: "absolute",
                        top: "25px",
                        left: "20px",
                        zIndex: "100"
                    }
                } onClick={handleShow}>

                <i className="fa-solid fa-bars"></i>
            </reactBootstrap.Button>

            <reactBootstrap.Offcanvas show={show} onHide={handleClose}>
                <reactBootstrap.Offcanvas.Header closeButton>
                    <reactBootstrap.Offcanvas.Title>Tanger Med Tech</reactBootstrap.Offcanvas.Title>
                </reactBootstrap.Offcanvas.Header>
                <reactBootstrap.Offcanvas.Body>
                    <ul className='sidebarItems'>
                        <Link to="/dashboard/users" className="link">
                            <li className='item'>
                                <div className="icon">
                                    <i className="fa-solid fa-users"></i>
                                </div>
                                <div className="textLink">Users</div>
                            </li>
                        </Link>
                        <Link to="/dashboard/reservation" className="link">
                            <li className='item'>
                                <div className="icon">
                                    <i className="fa-solid fa-cart-arrow-down"></i>
                                </div>
                                <div className="textLink">Reservations</div>
                            </li>
                        </Link>
                        <Link to="/dashboard/roles" className="link">
                            <li className='item'>
                                <div className="icon">
                                    <i className="fa-solid fa-user-gear"></i>
                                </div>
                                <div className="textLink">Roles</div>
                            </li>
                        </Link>
                        <Link to="/" className="link">
                            <li className='item logout'>
                                <div className="icon">
                                    <i className="fa-solid fa-right-from-bracket fa-rotate-180"></i>
                                </div>
                                <div className="textLink">Logout</div>
                            </li>
                        </Link>
                    </ul>
                </reactBootstrap.Offcanvas.Body>
            </reactBootstrap.Offcanvas>
        </>
    )
}
