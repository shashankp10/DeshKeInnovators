import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AdminLogin() {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
      setSelectedOption(option);
    };

  return (
    <>
      <div className="logonPage">
        <div className="optionLogin">
        <div className="option">
            <Link to="/Login" style={{textDecoration:"none"}}>
            <h1
              className={selectedOption === 'User' ? 'selected' : ''}
              onClick={() => handleOptionClick('User')}
            >
              User
            </h1>
            </Link>
           
           <Link to="/Admin" style={{textDecoration:"none"}}>
            <h1
              className={selectedOption === 'Admin' ? 'selected' : ''}
              onClick={() => handleOptionClick('Admin')}
            >
              Admin
            </h1>
            </Link>
          </div>
          <div className="Form">
                <p>Admin Login</p>
                <div className="inputField">
                    <input type="text" name="" id="" placeholder='Name' />
                    <input type="text" name="" id="" placeholder='ID' />
                    <input type="file" name="" id="" />
                    <button>LOGIN</button>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}
