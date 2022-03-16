import React, { useContext } from 'react'
import './doghnut.css'

import axios from 'axios';

import { useState, useEffect } from 'react';

import { LineChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip, Line } from 'recharts';
import { Context } from '../../../../contexts/Context';



export default function DoghnutCHart() {


    const {allReservations} = useContext(Context);
    return (
        <div className='pieCHart'>
            <LineChart width={500} height={250} data={allReservations}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="dateCheckIn" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="numberOfContainer" stroke="#82ca9d" />
            </LineChart>
        </div>
    )
}
