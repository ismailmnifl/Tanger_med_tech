import React from 'react';
import * as reactBootstrap from 'react-bootstrap';
import { useState, useEffect } from 'react';
import '../../styles/slider.css';
import tanger1 from '../../../assets/images/tanger1.jpg'
import tanger2 from '../../../assets/images/tanger2.jpg'
import tanger3 from '../../../assets/images/tanger3.jpg'
export default function Slider() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    }
  return (
    <div className="slider">
        <reactBootstrap.Carousel activeIndex={index} onSelect={handleSelect}>
      <reactBootstrap.Carousel.Item>
        <img
          className="d-block w-100"
          src={tanger1}
          alt="First slide"
        />
        <reactBootstrap.Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </reactBootstrap.Carousel.Caption>
      </reactBootstrap.Carousel.Item>
      <reactBootstrap.Carousel.Item>
        <img
          className="d-block w-100"
          src={tanger2}
          alt="Second slide"
        />

        <reactBootstrap.Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </reactBootstrap.Carousel.Caption>
      </reactBootstrap.Carousel.Item>
      <reactBootstrap.Carousel.Item>
        <img
          className="d-block w-100"
          src={tanger3}
          alt="Third slide"
        />

        <reactBootstrap.Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </reactBootstrap.Carousel.Caption>
      </reactBootstrap.Carousel.Item>
    </reactBootstrap.Carousel>
    </div>
  )
}
