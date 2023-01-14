import React, { useContext } from "react";
import { UserContext } from "./context/user";


const Home = ({currentUser}) => {

    // const user = useContext(UserContext);

    // console.log(user);

    if (currentUser) {
        return (
            <div>
                <h1 className="welcome-header">Welcome to WineSnob, {currentUser.name}!</h1>
            </div>
    ) 
    } else {
        return (
            <div>
                <h1 className="welcome-header">Please log in or sign up!</h1>
            </div>
        )
    }
}

export default Home