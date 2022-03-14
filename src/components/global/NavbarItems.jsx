import React from 'react'
import { Link } from "react-router-dom";
export default function NavbarItems() {
  return (
    <ul className='sidebarItems'>
    <Link to="/dashboard/users" className="link">
        <li className='item'>
            <div className="icon">
                <i className="fa-solid fa-users"></i>
            </div>
            <div className="textLink">Users</div>
        </li>
    </Link>
    <Link to="/dashboard/reservations" className="link">
        <li className='item'>
            <div className="icon">
                <i className="fa-solid fa-cart-arrow-down"></i>
            </div>
            <div className="textLink">Reservations</div>
        </li>
    </Link>
    <Link to="/dashboard/roles" className="link">
        <li className='item'>
            <div className="icon">
                <i className="fa-solid fa-user-gear"></i>
            </div>
            <div className="textLink">Roles</div>
        </li>
    </Link>
    <Link to="" className="link">
        <li className='item logout'>
            <div className="icon">
                <i className="fa-solid fa-right-from-bracket fa-rotate-180"></i>
            </div>
            <div className="textLink">Logout</div>
        </li>
    </Link>
</ul>
  )
}
