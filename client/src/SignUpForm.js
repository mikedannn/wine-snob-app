import React, { useState } from 'react';

function SignUpForm() {

    const [newUserInfo, setNewUserInfo] = useState({
        name: '',
        username: '',
        password: '',
        birth_date: '',
        email: ''
    })

    return (
        <div>
          <h1>Create Account</h1>
          <form>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={newUserInfo.name}></input>
            </div> <br />
            <div>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" value={newUserInfo.username}></input>
            </div> <br />
            <div>
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" value={newUserInfo.password} />
            </div><br />
            <div>
                <label htmlFor="birth_date">Date of Birth: </label>
                <input type="date" id="birth_date" name="birth_date" value={newUserInfo.birth_date} />
            </div><br />
            <div>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" value={newUserInfo.email} />
            </div><br />
            
                <input type="submit" value="Login" />
          </form>
        </div>
    )

        

}

export default SignUpForm