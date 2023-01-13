import React, { useState } from 'react';

function LoginForm() {

    const [loginInput, setLoginInput] = useState({
        username: '',
        password: ''
    })

    return (
        <div  className="loginForm">
          <h1>Login</h1>
          <form>
            <div>
                <label htmlFor="password">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        className="username" 
                        value={loginInput.username}
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