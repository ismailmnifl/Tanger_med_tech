import React from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from 'react';
import { Link } from "react-router-dom";
import bg from '../assets/images/login.jpg';
import avatar from '../assets/images/loginAvatar.png';

import './styles/login.css';
export default function Login() {

    return (

        <div className='loginPage'>

            <div className="leftSide">
                <img className='imgBg' src={bg} alt="" /></div>
            <div className="rightSide">
                <Form className='formLogin'>
                    <img className='loginAvatar' src={avatar} alt="" />
                    <Form.Group className='hello' controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='mail' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className='hello' controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='pass' type="password" placeholder="Enter Password" />
                    </Form.Group>

                    <Button style={{ backgroundColor: "#0E185F", border: "none" }} className="mt-2" variant="primary btn-block" type="submit">
                        Login
                    </Button>
                    <div className='pt-2'>Dont have an account ! <Link to="/register" className="link">Register</Link></div>

                </Form>
            </div>

        </div>
    )
}


/* 
                            
*/