import React from 'react'
import '../css/mainbody.css'
import image from '../assests/flag-divider.png'

export default function MainBody() {
  return (
    <>
        <div className='Heading'>
            <h1>Students have started their mentoring journey.<br/>Find your mentee now and start the journey!</h1>
        </div>
        <div className='vision'>
            <h1> Our Vision</h1>
            <div className='vision-card'>
                <p>Building a community of youth who are part of the culture of volunteering, working to create spaces for students to have an open dialogue about their careers, opinions and everyday choices.</p>
            </div>
        </div>
        <div className='mission'>
            <h1> Our Mission</h1>
            <div className='mission-card'>
                <li>To make students aware of the diverse set of careers to choose from.</li>
                <li>To guide and support students in their initial career planning stages.</li>
                <li>To develop the aptitude to handle personal and professional challenges.</li>
                <li>To enhance philanthropic outlook in the community of youth for nation-building.</li>
            </div>
        </div>
        <div className="image">
            <img src={image} alt="Image"></img>
        </div>
        
    </>
  )
}
