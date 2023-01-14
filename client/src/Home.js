import React, { useContext } from "react";
import { UserContext } from "./context/user";


const Home = () => {

    // const { user } = useContext(UserContext);
  
    // console.log(user)
    return (
        <div>
            <h1 className="welcome-header">Welcome to WineSnob!</h1>
        </div>
    )
}

export default Home