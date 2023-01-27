import React, {useState} from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';



function Login({ onLogin }){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <Card>
                {
                showLogin ? <LoginForm onLogin={onLogin} /> : <SignUpForm onLogin={onLogin} />
                }       

            <Button 
                onClick={() => setShowLogin(!showLogin)}
                className="formButton"
                >
                { showLogin ? "or sign up" : "or log in"}
            </Button>
        </Card>
    );
}

export default Login;