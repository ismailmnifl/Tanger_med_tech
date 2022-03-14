import React from 'react';
import './styles/updateUser.css';
import { useLocation } from 'react-router-dom';
import { Button, Col, Container, Form, Row, Select } from "react-bootstrap";
import { useState, useEffect } from 'react';
import bg from '../assets/images/updateUser.jpg'
import avatar from '../assets/images/update.png'
import { Link } from "react-router-dom"
import axios from 'axios';

export default function UpdateUser() {
  const location = useLocation();
  const [user, setUser] = useState({
  

  });
  const userId = location.pathname.split("/")[3];


  useEffect(() => {
    const getSingleUser = async () => {
      const res = await axios.get(`http://localhost:3030/users/single/${userId}`);
      console.log(res.data);
      setUser(res.data);
    }
    getSingleUser();
  }, []);


  const handeleSubmit = () => {

  }
  console.log(userId);
  return (
    <div className="updateUser">
      <div className="updateLeftSide">
        <img className='registerImage' src={bg} alt="" />
      </div>
      <div className="updateRightSide">

        <Form className='registerForm' >
          <img className='registerAvatar' src={avatar} alt="" />

          <Row className="mb-3">
            <Form.Group className='hello' as={Col} controlId="formGridFullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control  name='Fullname' type="text" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control name='email' value={user.email} type="text" placeholder="Enter Email" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
          <Form.Group as={Col} controlId="formBasicRole">
              <Form.Label>Role</Form.Label>
              <Form.Select aria-label="Default select example">
                <option style={{color:"red"}}>Current role </option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control name='phoneNumber' value={user.Fullname} type="text" placeholder="Enter Phone Number" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group as={Col} controlId="formBasicAdresse">
              <Form.Label>adresse</Form.Label>
              <Form.Control name='adresse' value={user.adresse} type="text" placeholder="Enter adresse" />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicNationality">
              <Form.Label>nationality</Form.Label>
              <Form.Control name='nationality' value={user.nationality} type="text" placeholder="Enter nationality" />
            </Form.Group>
            
          </Row>
         
          <div className="d-grid gap-2">
            <Button style={{ backgroundColor: "#0E185F", border: "none" }} className="mt-2 btn-block" variant="primary btn-block" type="submit">
              Register
            </Button>
          </div>
        </Form>

      </div>
    </div>
  )
}
