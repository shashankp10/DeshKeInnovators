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
            <div className="cards">
                <CardGrid/>
            </div>
        </div>
      </>
    )
  }
}
