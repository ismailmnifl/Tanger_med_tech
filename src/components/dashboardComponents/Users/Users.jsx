import React from 'react'
import userCSS from './users.module.css';
import axios from 'axios';

import { useState, useEffect } from 'react';
import Modal from '../Modal/Modal'

import { Link, NavLink } from "react-router-dom";


export default function Users() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getAllUSers = async () => {
      const res = await axios.get("http://localhost:3030/users/");
      console.log(res.data);
      setUsers(res.data);
    }
    getAllUSers();
  }, []);

  const handeleDelete = async (id) => {
   const res = await axios.delete(`http://localhost:3030/users/single/${id}`);
    const __users = users.filter(u=>u._id !== id);
    setUsers(__users);
  }

  console.log(users );
  return (

    <div className={userCSS.userManagement}>
      <div className={userCSS.spacer}></div>
      <div className={userCSS.wrappera}>
        <h3>User Management Section</h3>
        
      </div>
      <ul className={userCSS.responsiveTable}>
        <li className={userCSS.tableHeader}>
          <div className={[userCSS.col, userCSS.col1]}>Fullname</div>
          <div className={[userCSS.col, userCSS.col2]}>email</div>
          <div className={[userCSS.col, userCSS.col3]}>Phone Number</div>
          <div className={[userCSS.col, userCSS.col4]}>adresse</div>
          <div className={[userCSS.col, userCSS.col5]}>nationality</div>
          <div className={[userCSS.col, userCSS.col6]}>Role</div>
          <div className={[userCSS.col, userCSS.col7]}>Actions</div>
        </li>
        {users.map((user) => (
          <li className={userCSS.tableRow} key={user._id}>
            <div className={[userCSS.col, userCSS.col1]} data-label="Fullname">{user.Fullname}</div>
            <div className={[userCSS.col, userCSS.col2]} data-label="email">{user.email}</div>
            <div className={[userCSS.col, userCSS.col3]} data-label="Phone Number">{user.phoneNumber}</div>
            <div className={[userCSS.col, userCSS.col4]} data-label="adresse">{user.adresse}</div>
            <div className={[userCSS.col, userCSS.col5]} data-label="nationality">{user.nationality}</div>
            <div className={[userCSS.col, userCSS.col6]} data-label="Role">{user.role?.description}</div>
            <div className={[userCSS.col, userCSS.col7]} data-label="Actions">
              <i onClick={() => handeleDelete(user._id)} style={{ color: "red", marginRight: "10px", fontSize: "20px", cursor: "pointer" }}
                className="fas fa-trash icones"></i>
                <Link to={`/update/user/${user._id}`} className="linknav">
                <i style={{ color: "green", marginRight: "10px", fontSize: "22px", cursor: "pointer" }}
                className="fas fa-pen-square icones"></i>
                </Link>
              
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
