import React from 'react'
import './styles/home.css'
import { useState, useEffect } from 'react';
import * as reactBootstrap from 'react-bootstrap';

import Slider from '../components/homeComponents/Slider/Slider';
export default function Home() {
 
  return (
    <div className="home">
  
      <Slider />
        </div>
  )
}
