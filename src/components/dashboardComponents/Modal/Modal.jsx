import React from 'react'
import { useState, useEffect } from 'react';
import './modal.css'
import * as reactBootstrap from 'react-bootstrap';
export default function Modal() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div className='modal'>

            <reactBootstrap.Button style={{backgroundColor: "#0E185F",border:"none"}} variant="primary" onClick={handleShow}>
                Launch demo modal
            </reactBootstrap.Button>

            <reactBootstrap.Modal show={show} onHide={handleClose}>
                <reactBootstrap.Modal.Header closeButton>
                    <reactBootstrap.Modal.Title>Modal heading</reactBootstrap.Modal.Title>
                </reactBootstrap.Modal.Header>
                <reactBootstrap.Modal.Body>Woohoo, you're reading this text in a modal!</reactBootstrap.Modal.Body>
                <reactBootstrap.Modal.Footer>
                    <reactBootstrap.Button variant="secondary" onClick={handleClose}>
                        Close
                    </reactBootstrap.Button>
                    <reactBootstrap.Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </reactBootstrap.Button>
                </reactBootstrap.Modal.Footer>
            </reactBootstrap.Modal>
        </div>
    )
}
