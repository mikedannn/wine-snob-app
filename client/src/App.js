import React, {useState, useEffect} from "react";
import './App.css';
import { Route, Routes } from "react-router-dom";

import LoginForm from "./pages/LoginForm";
import Wines from "./pages/Wines";
import WineCard from "./pages/WineCard";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Account from "./pages/Account";

// import Home from "./Home";
// import About from "./About";
// import Wines from "./Wines";
// import WineForm from "./WineForm";
// import ReviewForm from "./ReviewForm";
// import LoginForm from "./LoginForm";
// import NavBar from "./NavBar";
// // import { UserProvider } from "./context/user";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SignUpForm from "./SignUpForm";
// import { getCurrentUser } from "./actions/auth";

function App() {
  const [user, setUser] = useState(null);

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

  // const handleCurrentUser = (user) => {
  //   if(user.username) {
  //     setCurrentUser(user);
  //     setLoggedIn(true);
  //     setLoading(false);
  //     fetchUserWines();
  //   }
  // }

  // const logOutCurrentUser = () => {
  //   setCurrentUser(null); 
  //   setLoggedIn(false);
  //   setLoading(false);
  // }

  // useEffect(() => {
  //   getCurrentUser(handleCurrentUser)
  // }, [])

  // const fetchUserWines = () => {
  //   fetch('/wines')
  //   .then(res => res.json())
  //   .then(data => {
  //     setUserWines(data)
  //   })
  // }

  // const fetchUserReviews = () => {
  //   fetch('/reviews')
  //   .then(res => res.json())
  //   .then(data => {
  //     setUserReviews(data)
  //   })
  // }

  
  return (
    <div className="App" style={{paddingTop: "120px"}}>

      <div id='navbar'>
        <NavBar 
          user={user}
          setUser={setUser}
        />
      </div>
        
        { !user ? <LoginForm onLogin={setUser} /> : 
        
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
            path="/wines/:id" 
            element={<WineCard user={user}/>} 
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
