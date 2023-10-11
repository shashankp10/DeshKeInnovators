import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imageUrl from '../assests/slide1.jpg';
import imageUrl1 from '../assests/slide2.jpg';
import imageUrl2 from '../assests/slide3.jpg';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} controls={false}>
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl} style={{ height: '400px', objectFit: 'cover', width:'60%', margin: '10 auto'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl1} style={{ height: '400px', objectFit: 'cover', width:'60%', margin: '10 auto'}}/>
      </Carousel.Item> <Carousel.Item>
        <img className="d-block w-100" src={imageUrl2} style={{ height: '400px', objectFit: 'cover', width:'60%', margin: '10 auto'}}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;