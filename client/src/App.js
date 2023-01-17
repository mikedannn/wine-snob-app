import React, {useState, useEffect} from "react";
import Home from "./Home";
import About from "./About";
import Wines from "./Wines";
import WineForm from "./WineForm";
import LoginForm from "./LoginForm";
import NavBar from "./NavBar";
import './App.css';
// import { UserProvider } from "./context/user";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUpForm from "./SignUpForm";
import { getCurrentUser } from "./actions/auth";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userWines, setUserWines] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleCurrentUser = (user) => {
    if(user.username) {
      setCurrentUser(user);
      setLoggedIn(true);
      setLoading(false);
      fetchUserWines();
    }
  }

  const logOutCurrentUser = () => {
    setCurrentUser(null); 
    setLoggedIn(false);
    setLoading(false);
  }

  useEffect(() => {
    getCurrentUser(handleCurrentUser )
  }, [])

  const fetchUserWines = () => {
    fetch('/wines')
    .then(res => res.json())
    .then(data => {
      setUserWines(data)
    })
  }

  
  return (
    <Router>
      <div className="App">
        <NavBar loggedIn={loggedIn} logOutCurrentUser={logOutCurrentUser}/>
        <Routes>
          <Route exact path='/' element={<Home currentUser={currentUser} userWines={userWines} setUserWines={setUserWines}/>}/>
          <Route exact path='/login' element={<LoginForm handleCurrentUser={handleCurrentUser}/>}/>
          <Route exact path='/signup' element={<SignUpForm handleCurrentUser={handleCurrentUser}/>}/>
          {/* <Route exact path='/addwine' element={<WineForm/>}/> */}
          <Route exact path='/about' element={<About/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
