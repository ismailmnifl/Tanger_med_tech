import React, { useContext, useEffect, useRef ,useState} from 'react';
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg from '../assets/images/login.jpg';
import avatar from '../assets/images/secure.gif';

import './styles/login.css';

import { Context } from '../contexts/Context';
import axios from 'axios';

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState(false);

    const {dispatch, isFetching} = useContext(Context);

    const [allReservations, setReservations] = useState([]);
    useEffect(() => {
        const getReservations = async () => {
          const reservationsRes = await axios.get("http://localhost:3030/reservations/");
          setReservations(reservationsRes.data);
        }
        getReservations();
      }, []);

    const handeleSubmit = async (e) => {
        setError(false);
        e.preventDefault();
        dispatch({type: "LOGIN_START"});
        try {
            const userRes = await axios.post("http://localhost:3030/auth/login/",{
                email: userRef.current.value,
                password: passwordRef.current.value,
            });

            dispatch({type: "LOGIN_SUCCESS", payload: {user: userRes.data,allReservations: allReservations}});
            
        } catch (err) {
            dispatch({type: "LOGIN_FAILURE"});
            setError(true)

        }
    }
    return (

        <div className='loginPage'>

            <div className="leftSide">
                <img className='imgBg' src={bg} alt="" /></div>
            <div className="rightSide">

                <Form className='formLogin' onSubmit={handeleSubmit}>
                    <img className='loginAvatar' src={avatar} alt="" />
                    {error && <div style={{backgroundColor: '#f87171',color:"#7f1d1d",padding:"5px",width:"90%", borderRadius:"5px", marginBottom:"5px"}}>Wrong login credentials ! </div>}
                    <Form.Group className='hello' controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='mail' type="email" placeholder="Enter email" ref={userRef} />
                    </Form.Group>

                    <Form.Group className='hello' controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='pass' type="password" placeholder="Enter Password"   ref={passwordRef} />
                    </Form.Group>

                    <Button style={{ backgroundColor: "#0E185F", border: "none" }} className="mt-2 btnLogin" variant="primary btn-block" type="submit" disabled={isFetching}>
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