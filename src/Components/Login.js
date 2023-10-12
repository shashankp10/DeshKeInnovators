import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginPage from './LoginPage';

export default function Login() {

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
          <LoginPage/>

        </div>
    </div>
      
    </>
  )
}
