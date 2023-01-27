import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';


function LoginForm({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const handleLogin = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({ username, password })
        }).then(res => {
            if(res.ok){
                res.json().then((user) => onLogin(user))
            } else{
                res.json().then((err) => setError(`${Object.keys(err)}: ${Object.values(err)}`))
            }
        })
    }

    return (
        <div  className="loginForm">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        className="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    >
                    </input>
            </div>
                {
                error ? 
                <div className="errors-container">
                    <span id="error-message">{error}</span>
                </div> 
                : null 
                }
            <br />
                <input id="formButton" type="submit" value="Login" />
          </form>
        </div>
    );

}

export default LoginForm;