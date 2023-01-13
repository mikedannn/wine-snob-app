import React, { useState } from 'react';
import { login } from "./actions/auth";

function LoginForm() {

    const [loginInput, setLoginInput] = useState({
        username: '',
        password: ''
    })

    const handleChange = e => {
        setLoginInput({
          ...loginInput,
          [e.target.name]: e.target.value
        })
      }

      const handleSubmit = e => {
        e.preventDefault();
    
        login(loginInput)
      }

    return (
        <div  className="loginForm">
          <h1>Login</h1>
          <form onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="password">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        className="username" 
                        value={loginInput.username}
                        onChange={handleChange}
                        autoFocus={true}
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
                        className='password'
                        value={loginInput.password} 
                        onChange={handleChange}
                        required
                    >
                    </input>
            </div><br />
                <input id="formButton" type="submit" value="Login" />
          </form>
        </div>
    )

        

}

export default LoginForm