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

  /* getting single user data */

  const location = useLocation();
  const [user, setUser] = useState({});


  const path = location.pathname.split("/")[3];

  useEffect(() => {
    const getSingleUser = async () => {
      const res = await axios.get(`http://localhost:3030/users/single/${path}`);
      setFullname(res.data.Fullname);
      setEmail(res.data.email);
      setRole(res.data.role);
      setPhoneNumber(res.data.phoneNumber);
      setAdresse(res.data.phoneNumber);
      setNationality(res.data.nationality);
      setUser(res.data);
    }
    getSingleUser();
  }, [path]);

  /* update the users data */

  const [Fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [adresse, setAdresse] = useState("");
  const [nationality, setNationality] = useState("");
  const [signUp,setSignUp] = useState(false);


    /* getting all roles */

    const [roles, setRoles] = useState([]);
    useEffect(() => {
      const getAllRoles = async () => {
        const res = await axios.get("http://localhost:3030/roles/");
        
        setRoles(res.data);
      }
      getAllRoles();
    }, []);

     /* getting all roles */
    const handelSubmit = async (e) => {
      
        e.preventDefault();
        try {
            
            const res = await axios.patch(`http://localhost:3030/users/single/${path}`,
                {
                    Fullname,
                    email,
                    phoneNumber,
                    adresse,
                    nationality,
                    role
                });
                
            res.data && setSignUp(true);

        } catch (err) {
            console.log(err);
        }

    }

  return (
    <div className="updateUser">
      <div className="updateLeftSide">
        <img className='registerImage' src={bg} alt="" />
      </div>
      <div className="updateRightSide">

        <Form onSubmit={handelSubmit} className='registerForm' >
        <img className='registerAvatar' src={avatar} alt="" />

          {signUp && <div style={{backgroundColor: '#4ade80',color:"#14532d",padding:"5px",width:"90%", borderRadius:"5px", marginBottom:"5px"}}>Your information has been registered successfully</div>}

          <Row className="mb-3">

            <Form.Group className='hello' as={Col} controlId="formGridFullName">
              
              <Form.Label>Full Name</Form.Label>
              <Form.Control value={Fullname} onChange={e => setFullname(e.target.value)} name='Fullname' type="text" placeholder="Enter Full Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control value={email}  onChange={e => setEmail(e.target.value)} name='email' type="text" placeholder="Enter Email" />
            </Form.Group>
            <Form.Group style={{ marginTop: "10px" }} controlId="formGridEmail" >
              <Form.Label>Phone</Form.Label>
              <Form.Control value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} name='phoneNumber' type="text" placeholder="Enter Phone Number" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formBasicAdresse">
              <Form.Label>adresse</Form.Label>
              <Form.Control value={adresse} onChange={e => setAdresse(e.target.value)} name='adresse' type="text" placeholder="Enter adresse" />
            </Form.Group>

            <Form.Group as={Col} controlId="formBasicNationality">
              <Form.Label>nationality</Form.Label>
              <Form.Control value={nationality} onChange={e => setNationality(e.target.value)} name='nationality' type="text" placeholder="Enter nationality" />
            </Form.Group>
            <Form.Group style={{ marginTop: "10px" }} controlId="formBasicNationality">
              <Form.Label>Roles</Form.Label>
              <Form.Select onChange={e => setRole(e.target.value)}>
                {roles.map((role) => (
                  
                  <option key={role._id} value={role._id}>{role.description}</option> 
                ))}
              </Form.Select>
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
