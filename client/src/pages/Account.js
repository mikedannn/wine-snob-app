import React, {useEffect, useState} from "react";
import NewReviewForm from "../components/NewReviewForm";
import UserReviews from "../components/UserReviews";
import UserWines from "../components/UserWines";

function Account(){
    const [reviews, setReviews] = useState([]);
    const [wines, setWines] = useState([]);
    // const [allWines, setAllWines] = useState([]);

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

    // useEffect(() => {
    //   fetch("/wines/all")
    //     .then((response) => response.json())
    //     .then(setAllWines)
    // }, []);
    

    return(
        <div className="wines-container">
            <NewReviewForm />
            <div className="review-wine-container">
                <UserReviews reviews={reviews}/>
                <UserWines wines={wines}/>
            </div>
        </div>
    )
}

export default Account;