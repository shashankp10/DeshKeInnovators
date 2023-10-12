import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function SubmitForm() {
  return (
    <>
      <div className="logonPage">
        <div className="optionLogin">

          <div className="Form">
                <p>Submit your Idea</p>
                <div className="inputField">
                    <input type="text" name="" id="" placeholder='Name' />
                    <input type="text" name="" id="" placeholder='ID' />
                    <input type="file" name="" id="" />
                    <Link to="/Mentor"><button>Submit</button></Link>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}
