import React, {useState} from "react";
import Home from "./Home";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import './App.css';
import { UserProvider } from "./context/user";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from "./SignUpForm";

function App() {
  const [user, setUser] = useState(null);
  
  
  return (
    <Router >
      {/* wrap components that need access to context data in the provider*/}
      <NavBar/>
      <UserProvider>
        <Home />
      </UserProvider>
      <LoginForm/>
      <SignUpForm/>

    </Router>
  );
}

export default App;
