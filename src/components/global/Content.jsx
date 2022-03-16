import React from 'react'
import '../styles/content.css'
import { Outlet } from "react-router-dom";
import Ticket from '../dashboardComponents/Ticket/Ticket'
import BarChart from '../dashboardComponents/Charts/BarChart/BarChart';
import DoghnutCHart from '../dashboardComponents/Charts/DoghnutCHart/DoghnutCHart';
export default function Content() {
  return (
    <div className='content'>
      <div className="ticketWrapper">
        <Ticket header="Users" icon="fa-solid fa-users" data="56" color ="rgb(239 68 68)"/>
        <Ticket header="Reservations" icon="fa-solid fa-cart-arrow-down" data="261" color="rgb(249 115 22)"/>
        <Ticket header="Roles" icon="fa-solid fa-user-gear" data="3" color="rgb(236 72 153)"/>
        <Ticket header="Container" icon="fa-solid fa-box" data="2541" color ="rgb(14 165 233)"/>
      </div>
          <div className="contentWrapper">
          
          <BarChart />
          <DoghnutCHart />
            </div>
            <Outlet  className="outlet"/>
   
        
    </div>
  )
}