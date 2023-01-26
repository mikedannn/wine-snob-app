import React, {useEffect, useState} from "react";
import WineForm from "../components/WineForm";
import UserReviews from "../components/UserReviews"
import UserWines from "../components/UserWines"

function Account(){
    const [reviews, setReviews] = useState([]);
    const [wines, setWines] = useState([]);

    useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
            setWines(user.wines)
            setReviews(user.reviews)
        });
      }
    });
  }, []);

  const addNewWine = (formData) => {
    setWines((wines) => [formData, ...wines])
  }
    

    return(
        <div className="wines-container">
            <WineForm addNewWine={addNewWine}/>
            <div className="review-wine-container">
                <UserReviews reviews={reviews}/>
                <UserWines wines={wines}/>
            </div>
        </div>
    )
}

export default Account;