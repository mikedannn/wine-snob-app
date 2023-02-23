import React from "react";
import NewReviewForm from "../components/NewReviewForm";
import UserReviews from "../components/UserReviews";
import UserWines from "../components/UserWines";

function Account({user}){

    return(
        <div className="wines-container">
            <NewReviewForm/>
            <div className="review-wine-container">
                <UserReviews reviews={user.reviews}/>
                <UserWines wines={user.wines}/>
            </div>
        </div>
    )
}

export default Account;