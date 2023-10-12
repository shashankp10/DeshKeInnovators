import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import imageUrl from '../assests/image1.jpeg';
import imageUrl1 from '../assests/image2.jpeg';
import imageUrl2 from '../assests/image3.jpeg';
import imageUrl3 from '../assests/image4.jpeg';
import imageUrl4 from '../assests/image5.jpeg';
import imageUrl5 from '../assests/slider1.jpg';


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
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl5} style={{ height: '400px', objectFit: 'cover', width:'60%', margin: '10 auto'}}/>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={imageUrl3} style={{ height: '400px', objectFit: 'cover', width:'60%', margin: '10 auto'}}/>
      </Carousel.Item> <Carousel.Item>
        <img className="d-block w-100" src={imageUrl4} style={{ height: '400px', objectFit: 'cover', width:'60%', margin: '10 auto'}}/>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;