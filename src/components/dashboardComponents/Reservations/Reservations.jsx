import React from 'react'
import userCSS from './res.module.css';
import axios from 'axios';

import { useState, useEffect } from 'react';
import Modal from '../Modal/Modal';

import { Link, NavLink } from "react-router-dom";

import './reservation.css';

export default function Reservations() {

  const [reservations, setReservations] = useState([]);

  

  useEffect(() => {
    const getReservations = async () => {
      const res = await axios.get("http://localhost:3030/reservations/");
      setReservations(res.data);
    }
    getReservations();
  }, []);
  
  const handeleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3030/reservations/single/${id}`);
     const __reservations = reservations.filter(u=>u._id !== id);
     setReservations(__reservations);
   }
  return (

    <div className={userCSS.userManagement}>
      <div className={userCSS.spacer}></div>
      <div className={userCSS.wrappera}>
        <h3>Reservations Management Section</h3>
        <Modal />
      </div>
      <ul className={userCSS.responsiveTable}>
        <li className={userCSS.tableHeader}>
          <div className={[userCSS.col, userCSS.col1]}>referance</div>
          <div className={[userCSS.col, userCSS.col2]}>dateCheckIn</div>
          <div className={[userCSS.col, userCSS.col3]}>dateCheckOut</div>
          <div className={[userCSS.col, userCSS.col4]}>numberOfContainer</div>
          <div className={[userCSS.col, userCSS.col5]}>maxDays</div>
          <div className={[userCSS.col, userCSS.col6]}>Actions</div>
        </li>
        {reservations.map((reservation) => (
          <li className={userCSS.tableRow} key={reservation._id}>
            <div className={[userCSS.col, userCSS.col1]} data-label="referance">{reservation.referance}</div>
            <div className={[userCSS.col, userCSS.col2]} data-label="dateCheckIn">{reservation.dateCheckIn}</div>
            <div className={[userCSS.col, userCSS.col3]} data-label="dateCheckOut">{reservation.dateCheckOut}</div>
            <div className={[userCSS.col, userCSS.col4]} data-label="numberOfContainer">{reservation.numberOfContainer}</div>
            <div className={[userCSS.col, userCSS.col5]} data-label="maxDays">{reservation.maxDays}</div>
            <div className={[userCSS.col, userCSS.col6]} data-label="Actions">
              <i onClick={() => handeleDelete(reservation._id)} style={{ color: "red", marginRight: "10px", fontSize: "20px", cursor: "pointer" }}
                className="fas fa-trash icones"></i>

            </div>
          </li>
        ))}
      </ul>
    </div>

  )
}
