import React from 'react'
import userCSS from './users.module.css';
import axios from 'axios';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';
import Modal from '../Modal/Modal'
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
  return (

    <div className={userCSS.userManagement}>
      <div className={userCSS.spacer}></div>
      <div className={userCSS.wrappera}>
        <h3>User Management Section</h3> 
        <Modal />
      </div>
      <ul className={userCSS.responsiveTable}>
        <li className={userCSS.tableHeader}>
          <div className={[userCSS.col, userCSS.col1]}>Fullname</div>
          <div className={[userCSS.col, userCSS.col2]}>email</div>
          <div className={[userCSS.col, userCSS.col3]}>Phone Number</div>
          <div className={[userCSS.col, userCSS.col4]}>adresse</div>
          <div className={[userCSS.col, userCSS.col5]}>nationality</div>
          <div className={[userCSS.col, userCSS.col6]}>Role</div>
          {/* <div className={[userCSS.col, userCSS.col7]}>Actions</div> */}
        </li>
        {users.map((user) => (
          <li className={userCSS.tableRow} key={user._id}>
            <div className={[userCSS.col, userCSS.col1]} data-label="Fullname">{user.Fullname}</div>
            <div className={[userCSS.col, userCSS.col2]} data-label="email">{user.email}</div>
            <div className={[userCSS.col, userCSS.col3]} data-label="Phone Number">{user.phoneNumber}</div>
            <div className={[userCSS.col, userCSS.col4]} data-label="adresse">{user.adresse}</div>
            <div className={[userCSS.col, userCSS.col5]} data-label="nationality">{user.nationality}</div>
            <div className={[userCSS.col, userCSS.col6]} data-label="Role">{user.role["description"]}</div>
            {/*           <div className={[userCSS.col, userCSS.col7]} data-label="Actions"><i style={{color:'rgb(60, 141, 60)',fontSize:'19px'}} className="fas fa-trash"></i><i style={{color:'rgb(199, 69, 69)',fontSize:'22px',position:'relative',top:'1px'}} className="fas fa-pen-square"></i></div>*/}          </li>
        ))}
      </ul>
    </div>
  )
}
