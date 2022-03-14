import '../styles/sidebar.css'
import { NavLink } from "react-router-dom";
import * as reactBootstrap from 'react-bootstrap';

import NavbarItems from './NavbarItems';

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
                <NavbarItems />
                </reactBootstrap.Offcanvas.Body>
            </reactBootstrap.Offcanvas>
        </>
    )
}
