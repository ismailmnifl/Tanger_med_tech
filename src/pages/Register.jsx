import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from 'react';
import { Link } from "react-router-dom"
import axios from 'axios'
import bg from '../assets/images/register.webp'
import avatar from '../assets/images/Signup.png'

import './styles/register.css'
//var axios = require('axios');

export default function Register() {

    const [Fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [adresse, setAdresse] = useState("");
    const [nationality, setNationality] = useState("");
    const [error, setError] = useState(false);
    const [signUp,setSignUp] = useState(false);

    const handelSubmit = async (e) => {
        setError(false);
        e.preventDefault();
        try {
            let roleId = "622caf5218b8f98eee6728b8"
            const res = await axios.post("http://localhost:3030/users/",
                {
                    Fullname,
                    email,
                    password,
                    phoneNumber,
                    adresse,
                    nationality,
                    roleId
                });
                console.log(res.data);
            res.data && setSignUp(true);
        } catch (err) {
            setError(true)
        }

    }
    return (

        <div className="registerPage">

            <div className="registerLeftSide">
                <img className='registerImage' src={bg} alt="" />
            </div>
            <div className="registerRightSide">
                <Form className='registerForm' onSubmit={handelSubmit}>
                    <img className='registerAvatar' src={avatar} alt="" />
                    {signUp && <div style={{backgroundColor: '#4ade80',color:"#14532d",padding:"5px",width:"90%", borderRadius:"5px", marginBottom:"5px"}}>Your information has been registered successfully</div>}
                    {error && <div style={{backgroundColor: '#f87171',color:"#7f1d1d",padding:"5px",width:"90%", borderRadius:"5px", marginBottom:"5px"}}>Something went wrong</div>}

                    <Row className="mb-3">
                        <Form.Group className='hello' as={Col} controlId="formGridFullName">
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
                            <Form.Control onChange={e => setPhoneNumber(e.target.value)} name='phoneNumber' type="text" placeholder="Enter Phone Number" />
                        </Form.Group>
                    </Row>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formBasicAdresse">
                            <Form.Label>adresse</Form.Label>
                            <Form.Control onChange={e => setAdresse(e.target.value)} name='adresse' type="text" placeholder="Enter adresse" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formBasicNationality">
                            <Form.Label>nationality</Form.Label>
                            <Form.Control onChange={e => setNationality(e.target.value)} name='nationality' type="text" placeholder="Enter nationality" />
                        </Form.Group>
                    </Row>
                    <div className="d-grid gap-2">
                        <Button style={{ backgroundColor: "#0E185F", border: "none" }} className="mt-2 btn-block" variant="primary btn-block" type="submit">
                            Register
                        </Button>
                    </div>
                    <div className='pt-2'>you already have an account ! <Link to="/login" className="link">Login</Link></div>
                </Form>
            </div>


        </div>

    )
}




/* 

 
                     
*/