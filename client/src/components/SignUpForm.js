import React, { useState } from 'react';
import { createAccount } from "../actions/auth";
import { useNavigate } from "react-router-dom";

function SignUpForm({ handleCurrentUser }) {

    const [newUserInfo, setNewUserInfo] = useState({
        name: '',
        username: '',
        password: '',
        birth_date: '',
        email: ''
    })

    let navigate = useNavigate();
        const handleCreateUserClick = (e) => {
        navigate('/');
    };

    const handleChange = e => {
        setNewUserInfo({
          ...newUserInfo,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = e => {
        e.preventDefault();
        createAccount(newUserInfo, handleCurrentUser)
        handleCreateUserClick();
      }

    return (
        <div className="signUpForm">
          <h1 >Create Account</h1>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={newUserInfo.name}
                        onChange={handleChange}
                        autoFocus={true}
                        required
                    >   
                    </input>
            </div> 
                <br />
            <div>
                <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={newUserInfo.username}
                        onChange={handleChange}
                        required
                    >
                    </input>
            </div> 
                <br />
            <div>
                <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={newUserInfo.password}
                        onChange={handleChange}
                        required
                    >
                    </input>
            </div>
                <br />
            <div>
                <label htmlFor="birth_date">Date of Birth: </label>
                    <input 
                        type="date" 
                        id="birth_date" 
                        name="birth_date" 
                        value={newUserInfo.birth_date}
                        onChange={handleChange}
                        required
                    >
                    </input>
            </div>
                <br />
            <div>
                <label htmlFor="email">Email: </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        value={newUserInfo.email}
                        onChange={handleChange}
                        required
                    >
                    </input>
            </div>
                <br />
                <input id='formButton' type="submit" value="Create Account" />
          </form>
        </div>
    )

        

}

export default SignUpForm