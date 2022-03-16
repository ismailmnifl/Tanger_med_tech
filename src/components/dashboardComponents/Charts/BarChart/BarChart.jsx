import React from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './barchart.css';
import {data} from './Data.js'

import axios from 'axios';

import { useState, useEffect , useContext } from 'react';
import { Context } from '../../../../contexts/Context';
export default function BarGraf() {

  const {allReservations} = useContext(Context);

  return (
    <div className="barchart">
      <BarChart style={{backgroudColor: "white"}} width={500} height={250} data={allReservations}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="numberOfContainer" fill="#8884d8" />
        
      </BarChart>

    </div>
  )
}
