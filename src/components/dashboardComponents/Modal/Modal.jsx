import './modalStyle.css'
import * as reactBootstrap from 'react-bootstrap';

import React, { useContext, useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { Context } from '../../../contexts/Context';

export default function Modal() {

  /* submit reservation part of the code start */
  const [referance, setreferance] = useState("");
  const [dateCheckIn, setdateCheckIn] = useState("");
  const [dateCheckOut, setdateCheckOut] = useState("");
  const [numberOfContainer, setnumberOfContainer] = useState("");
  const [dock, setdock] = useState("");

  const {user} = useContext(Context);


  const handeleSubmit = async (e) => {
    e.preventDefault();
    console.log("susufu");
    try {
      const res = await axios.post(`http://localhost:3030/reservations/single/${user._id}`,{
        referance,
        dateCheckIn,
        dateCheckOut,
        numberOfContainer,
        dock
      })
    } catch (err) {
      console.log(err);
    }
  }

  /* submit reservation part of the code end */

  const referanceRef = useRef();
  const dateCheckInRef = useRef();
  const dateCheckOutRef = useRef();
  const numberOfContainerRef = useRef();
  const dockRef = useRef(); 

  const [error, setError] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [docks, setDocks] = useState([]);
  useEffect(() => {
    const getAllDocks = async () => {
      const res = await axios.get("http://localhost:3030/docks/");
      console.log(res.data);
      setDocks(res.data);
    }
    getAllDocks();
  }, []);

  const handeleCheck = async ()=> {
    setError(false);
   try {
    console.log("check is up");
    const res = await axios.post("http://localhost:3030/reservations/single",{
      dateCheckIn: dateCheckInRef.current.value,
      dateCheckOut: dateCheckOutRef.current.value, 
      dock: dockRef.current.value, 
    });
    console.log(res.data);
    
   } catch (err) {
    setError(true);
   }
  }
  return (
    <>
      <reactBootstrap.Button style={{ backgroundColor: "#0E185F", border: "none" }} variant="primary" onClick={handleShow}>
        add new Reservation
      </reactBootstrap.Button>

      <reactBootstrap.Modal show={show} onHide={handleClose} animation={false}>
        <reactBootstrap.Modal.Header closeButton>
          <reactBootstrap.Modal.Title>Add new reservation</reactBootstrap.Modal.Title>
        </reactBootstrap.Modal.Header>
        <reactBootstrap.Modal.Body>

        {error && <div style={{backgroundColor: '#f87171',color:"#7f1d1d",padding:"5px",width:"100%", borderRadius:"5px", marginBottom:"5px",display:"flex",alignItems:"center",justifyContent:"center"}}>This dock is not availible at this date </div>}

          <reactBootstrap.Form onSubmit={handeleSubmit} className='addReservation' >

            <reactBootstrap.Form.Group controlId="formBasicEmail">
              <reactBootstrap.Form.Label>referance</reactBootstrap.Form.Label>
              <reactBootstrap.Form.Control onChange={e => setreferance(e.target.value)} name='referance' type="text" placeholder="Enter referance" ref={referanceRef}/>
            </reactBootstrap.Form.Group>

            <reactBootstrap.Form.Group controlId="formBasicPassword">
              <reactBootstrap.Form.Label>date Check In</reactBootstrap.Form.Label>
              <reactBootstrap.Form.Control onChange={e => setdateCheckIn(e.target.value)} name='dateCheckIn' type="date" placeholder="Enter date Check In" ref={dateCheckInRef}/>
            </reactBootstrap.Form.Group>

            <reactBootstrap.Form.Group controlId="formBasicPassword">
              <reactBootstrap.Form.Label>date Check Out</reactBootstrap.Form.Label>
              <reactBootstrap.Form.Control onChange={e => setdateCheckOut(e.target.value)} name='dateCheckOut' type="date" placeholder="Enter date Check Out"  ref={dateCheckOutRef}/>
            </reactBootstrap.Form.Group>
            <reactBootstrap.Row />


            <reactBootstrap.Form.Group controlId="formBasicPassword">
              <reactBootstrap.Form.Label>number Of Container</reactBootstrap.Form.Label>
              <reactBootstrap.Form.Control onChange={e => setnumberOfContainer(e.target.value)} name='numberOfContainer' type="text" placeholder="Enter number Of Container" ref={numberOfContainerRef}/>
            </reactBootstrap.Form.Group>

            <reactBootstrap.Form.Group style={{ marginTop: "10px" }} controlId="formBasicNationality">
              <reactBootstrap.Form.Label>Docks</reactBootstrap.Form.Label>
              <reactBootstrap.Form.Select onChange={e => setdock(e.target.value)} ref={dockRef}>

                {docks.map((dock) => (

                  <option key={dock._id} value={dock._id}>{dock.referance}</option>
                ))}

              </reactBootstrap.Form.Select>
            </reactBootstrap.Form.Group>
            <reactBootstrap.Button className='mt-3' style={{backgroundColor: "#0E185F",border:"none"}} variant="primary" type='submit'>
            Submit Reservation
          </reactBootstrap.Button>
          
          </reactBootstrap.Form>

        </reactBootstrap.Modal.Body>
        <reactBootstrap.Modal.Footer>
        <reactBootstrap.Button style={{ backgroundColor: "#ef4444", border: "none" }} variant="secondary" >
            Close
          </reactBootstrap.Button>

        <reactBootstrap.Button onClick={handeleCheck} style={{ backgroundColor: "#0E185F", border: "none", marginLeft:"15px" }} variant="primary">
            Check Availibility
          </reactBootstrap.Button>
          
          


        </reactBootstrap.Modal.Footer>
      </reactBootstrap.Modal>
    </>
  )
}
