import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios'
//var axios = require('axios');

export default function Register() {

    const [Fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [adresse, setAdresse] = useState("");
    const [nationality, setNationality] = useState("");
    const [error,setError] = useState(false);

    const handelSubmit = async (e) => {
        e.preventDefault();
        try {
            let roleId = "622caf5218b8f98eee6728b8"
            const res = await axios.post("http://localhost:3030/users/",
                {
                    Fullname,
                    email,
                    password,
                    phone,
                    adresse,
                    nationality,
                    roleId
                });
                res.data && window.location.replace('/login');
        } catch (err) {
            setError(true)
        }

    }
    return (

        <div className="register">
            <>
                <Container>
                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                            <h2 className='primary mb-3'>Register</h2>
                            <Form onSubmit={handelSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridFullName">
                                        <Form.Label>Full Name</Form.Label>
                                        <Form.Control onChange={e => setFullname(e.target.value)} name='Fullname' type="text" placeholder="Enter Full Name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control onChange={e => setEmail(e.target.value)} name='email' type="text" placeholder="Enter Email" />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formBasicPassword">
                                        <Form.Label>password</Form.Label>
                                        <Form.Control onChange={e => setPassword(e.target.value)} name='password' type="password" placeholder="Enter password" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formBasicPhone">
                                        <Form.Label>Phone Number</Form.Label>
                                        <Form.Control onChange={e => setPhone(e.target.value)} name='phoneNumber' type="text" placeholder="Enter Phone Number" />
                                    </Form.Group>
                                </Row>
                                <Form.Group controlId="formBasicAdresse">
                                    <Form.Label>adresse</Form.Label>
                                    <Form.Control onChange={e => setAdresse(e.target.value)} name='adresse' type="text" placeholder="Enter adresse" />
                                </Form.Group>

                                <Form.Group controlId="formBasicNationality">
                                    <Form.Label>nationality</Form.Label>
                                    <Form.Control onChange={e => setNationality(e.target.value)} name='nationality' type="text" placeholder="Enter nationality" />
                                </Form.Group>
                                <div className="d-grid gap-2">
                                    <Button style={{ backgroundColor: "#0E185F", border: "none" }} className="mt-2 btn-block" variant="primary btn-block" type="submit">
                                        Register
                                    </Button>
                                </div>
                                <div className='pt-2'>you already have an account ! <Link to="/login" className="link">Login</Link></div>
                            </Form>
                        </Col>
                    </Row>
                    <h6 className="mt-2 p-5 text-center text-secondary">Copyright © 2022 Tanger med Tech. All Rights Reserved.</h6>
                </Container>
            </>
        </div>

    )
}
