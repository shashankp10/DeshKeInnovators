import React from 'react'
import DynamicSlider from '../Components/dynamicSlider'
import '../css/slider.css'
import { Link } from 'react-router-dom'

export default function Slider() {
  return (
    <>
      <div className='sliderMain'>
        <div className='dynamicSlider'>
        <DynamicSlider/> 
        </div>
        <div className="cardSlide">
            <h1>
               Looking for help with your idea?
            </h1>
            <p>
              Register if you are looking for a mentor or if you want to guide others... 
            </p>
            <Link to="/Loginpage" rel="noopener noreferrer">
              <button class="register-button">Register</button>
            </Link>
        </div>
      </div>
    </>
  )
}