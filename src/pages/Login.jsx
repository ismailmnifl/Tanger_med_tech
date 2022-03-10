import React from 'react'
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useState } from 'react';
import { Link } from "react-router-dom"
var axios = require('axios');
export default function Login() {

    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    const authonticatUser = async (event) => {

       /*  let  {
            pass,
            mail
       } = event.target.elements;
       console.log();
        event.preventDefault();
        
        
        var data = JSON.stringify({
            "email":mail.value,
            "password" : pass.value
        });

        var config = {
            method: 'post',
            url: 'http://localhost:3030/auth/login',
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };
            
        const results  = await  axios(config).catch((error) => error);
        console.log(results); */
        /* if(results.data.error)
        {
            
            setError(results.data.error);
        } */
        let  {
            pass,
            mail
       } = event.target.elements;
       console.log();
        event.preventDefault();
        
        
var data = JSON.stringify({
    "email":mail.value,
    "password" : pass.value
});

var config = {
  method: 'post',
  url: 'http://localhost:3030/auth/login',
  headers: { 
    'Content-Type': 'application/json', 
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(response.data);
})
.catch(function (err) {
  console.log(err.message);
});
    }
    return (
        <div className="login">
            <>
                <Container>

                    <Row className="mt-5">
                        <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
                        <h2 className='primary mb-3'>Login</h2>
                            {error && <div > {error}</div>}
                            <Form onSubmit={authonticatUser} method='post'>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control name='mail' type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name='pass' type="password" placeholder="Password" />
                                </Form.Group>

                                <Button style={{backgroundColor: "#0E185F",border:"none"}} className="mt-2" variant="primary btn-block" type="submit">
                                    Login
                                </Button>
                                <div className='pt-2'>Dont have an account ! <Link to="/register" className="link">Register</Link></div>

                            </Form>
                        </Col>
                    </Row>
                    <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 Tanger med Tech. All Rights Reserved.</h6>
                </Container>
            </>
        </div>
    )
}
