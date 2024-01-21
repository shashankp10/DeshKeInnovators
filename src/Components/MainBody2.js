import React, { PureComponent } from 'react'
import '../css/mainbody2.css';
import CardGrid from './CardGrid';

export default class MainBody2 extends PureComponent {
  render() {
    return (
      <>
        <div className="main-body2">
            <div className="text">
                <h2>Connecting</h2>
                <h1>Talent, Colleges, <br/>Recruiters</h1>
                <div className="line"></div>
                <p>Explore opportunities from across the globe to learn, <br/>showcase skills,gain CV points, & get hired by your dream company.</p>
            </div>
            <div className='card-grid'>
              <div className='card'>
                <a href="/mentorships"><h6>Mentorships</h6></a>
                <img src={require('../assests/card1.webp')} alt="Teams" />
              </div>
              <div className='card'>
                <a href="/learn"><h6>Learn</h6></a>
                <img src={require('../assests/card2.webp')} alt="Teams" />
              </div>
              <div className='card'>
                <a href="/teams"><h6>Teams</h6></a>
                <img src={require('../assests/card3.webp')} alt="Teams" />
              </div>
              <div className='card'>
                <a href="/ideas"><h6>Ideas</h6></a>
                <img src={require('../assests/card4.webp')} alt="Teams" />
              </div>
              <div className='card'>
                <a href="/built"><h6>Built</h6></a>
                <img src={require('../assests/card5.webp')} alt="Teams" />
              </div>
              <div className='card'>
                <a href="/blogs"> <h6>Blogs</h6></a>
                <img src={require('../assests/card6.webp')} alt="Teams" />
              </div>
            </div>
        </div>
      </>
    )
  }
}
