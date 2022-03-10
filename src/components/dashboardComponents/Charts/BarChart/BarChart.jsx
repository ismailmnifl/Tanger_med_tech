import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './barchart.css';
import {data} from './Data.js'
export default function BarGraf() {
 
  return (
    <div className="barchart">
      <BarChart style={{backgroudColor: "white"}} width={800} height={370} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" />
        <Bar dataKey="uv" fill="#82ca9d" />
      </BarChart>

    </div>
  )
}
