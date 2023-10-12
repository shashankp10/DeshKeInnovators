import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import '../css/project.css'
import image from '../assests/flag-divider.png'
export default class Project extends PureComponent {
  render() {
    return (
      <>
        <div className="project">
          <div className="text">
            <h2>Submit your Idea</h2>
          </div>
          <div className="submit">
            <a href="https://your-contact-us-url.com" target="_blank" rel="noopener noreferrer">
              <Link to="/Project"><button class="submit-button">Submit</button></Link>
            </a>
          </div>
        </div>
        <div className="divider">
            <img src={image} alt="Image"></img>
        </div>
      </>
    )
  }
}
