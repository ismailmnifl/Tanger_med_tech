import React from 'react'
import Sidebar from '../components/global/Sidebar'
import Content from '../components/global/Content'
import './styles/dashboard.css'
export default function Dashboard() {
  return (
    <div className="dashboard">
       <Sidebar/>
       <Content/>
    </div>
  )
}
