import React from "react";
// import React, { useContext } from "react";
// import { UserContext } from "./context/user";


const Home = ({currentUser}) => {

    // const user = useContext(UserContext);

    if (currentUser) {
        return (
            <div>
                <div>
                    <h1 className="welcome-header">Welcome to WineSnob, {currentUser.name}!</h1>
                </div>

                <div>
                    <h2>My Wines:</h2>
                    <div>
                        {'Wines Listed'}
                    </div>
                </div>
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