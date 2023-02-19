import React, { useState, useEffect } from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import Wines from "./pages/Wines";
import WineShowPage from "./pages/WineShowPage";
import NavBar from "./components/NavBar";
import WineForm from "./components/WineForm";
import Footer from "./components/Footer";
import Account from "./pages/Account";

function App() {
  const [user, setUser] = useState(null);
  const [allWines, setAllWines] = useState([]);

  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser({
          id: user.id,
          username: user.username
        }));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/wines/all")
      .then((response) => response.json())
      .then(setAllWines)
  }, []);

  const addNewWine = (formData) => {
    setAllWines((allWines) => [formData, ...allWines])
  }


  
  return (
    <div className="App" style={{paddingTop: "120px"}}>

      <div id='navbar'>
        <NavBar 
          user={user}
          setUser={setUser}
        />
      </div>
        
        { !user ? <Login onLogin={setUser} /> : 
        
        <Routes>
          <Route 
            path="/" 
            element={<Wines />} 
          />
          <Route 
            path="/account" 
            element={<Account />} 
          />
          <Route 
            path="account/wines/new" 
            element={<WineForm addNewWine={addNewWine}/>} 
          />   
          <Route 
            path="/wines/:id" 
            element={<WineShowPage user={user}/>} 
          />   
        </Routes>

        }

        {user ? <Footer /> : null}

    </div>
  );

  //   <Router>
  //     <div className="App">
  //       <NavBar loggedIn={loggedIn} logOutCurrentUser={logOutCurrentUser}/>
  //       <Routes>
  //         <Route exact path='/' element={<Home currentUser={currentUser} userWines={userWines} setUserWines={setUserWines}/>}/>
  //         <Route exact path='/login' element={<LoginForm handleCurrentUser={handleCurrentUser}/>}/>
  //         <Route exact path='/signup' element={<SignUpForm handleCurrentUser={handleCurrentUser}/>}/>
  //         {/* <Route exact path='/addwine' element={<WineForm/>}/> */}
  //         <Route exact path= '/wines/:id/review' element={<ReviewForm userReviews={userReviews} setUserReviews={setUserReviews}/>}/>
  //         <Route exact path='/about' element={<About/>}/>
  //       </Routes>
  //     </div>
  //   </Router>
  // );
}

export default App;
