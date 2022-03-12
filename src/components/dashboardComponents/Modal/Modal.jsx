import React from 'react'
import { useState, useEffect } from 'react';
import './modalStyle.css'
import * as reactBootstrap from 'react-bootstrap';
export default function Modal() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
        <reactBootstrap.Button style={{backgroundColor: "#0E185F",border:"none"}} variant="primary" onClick={handleShow}>
        Create new User
      </reactBootstrap.Button>

      <reactBootstrap.Modal size="lg" show={show} onHide={handleClose} animation={false}>
        <reactBootstrap.Modal.Header closeButton>
          <reactBootstrap.Modal.Title>Add new User</reactBootstrap.Modal.Title>
        </reactBootstrap.Modal.Header>
        <reactBootstrap.Modal.Body>here i will put the form inputs</reactBootstrap.Modal.Body>
        <reactBootstrap.Modal.Footer>
          <reactBootstrap.Button style={{backgroundColor: "#ef4444",border:"none"}} variant="secondary" onClick={handleClose}>
            Close
          </reactBootstrap.Button>
          <reactBootstrap.Button style={{backgroundColor: "#0E185F",border:"none"}} variant="primary">
            Save Changes
          </reactBootstrap.Button>
        </reactBootstrap.Modal.Footer>
      </reactBootstrap.Modal>
        </>
    )
}
