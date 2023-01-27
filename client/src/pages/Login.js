import React, {useState} from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';



function Login({ onLogin }){
    const [showLogin, setShowLogin] = useState(true)

    return(
        <Card style={{ width: '25rem', paddingTop: '1rem' }} bg='light' className="mx-auto mt-5 p-4">
            <Card.Title>
                { showLogin ? "Welcome back" : "Create an account"}
            </Card.Title>
                {
                showLogin ? <LoginForm onLogin={onLogin} /> : <SignUpForm onLogin={onLogin} />
                }       
        
            <Button 
                onClick={() => setShowLogin(!showLogin)}
                variant="outline-dark"
                >
                { showLogin ? "or sign up" : "or log in"}
            </Button>
        </Card>
    );
}

export default Login;