import React, { useState } from 'react';

function SignUpForm({ onLogin }) {
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [birth_date, setBirthdate] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([])

    const handleSignup = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: "POST",
            headers: { "Content-Type":"application/json"},
            body: JSON.stringify({ name, username, password, passwordConfirmation, birth_date, email})
        }).then((r) => {
            if (r.ok) {
              r.json().then((user) => onLogin(user));
            } else {
              r.json().then((err) => setErrors(err.errors));
            }
          });
    }

    return (
        <div className="signUpForm">
          <h1 >Create Account</h1>
          <form onSubmit={handleSignup}>
            <div>
                <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    >
                    </input>
            </div>
                <br />
            <div>
                <label htmlFor="confirm-password">Confirm Password: </label>
                    <input 
                        type="password" 
                        id="password_confirmation" 
                        name="password_confirmation" 
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                        value={birth_date}
                        onChange={(e) => setBirthdate(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    >
                    </input>
            </div>

            {
            errors ? 
            <div className="errors-container">
            {errors.map((err) => (
                    <span id="error-message" key={err}>{`Invalid: ${err}`}</span>))}
                </div> 
            : null 
            }
                <br />
                <input id='formButton' type="submit" value="Create Account" />
          </form>
        </div>
    )

}

export default SignUpForm