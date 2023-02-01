import React, {useState} from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Review({review, user, handleReviewEdit, handleReviewDestroy}){
    const [canEdit, setCanEdit ] = useState(false)
    const [content, setContent] = useState(review.content)
    const [rating, setRating] = useState(review.rating)

    return(
        <div className="review">
            <div className="review-card-header">
            <span className="review-rating">{`"${review.rating}"`}</span>

            {user.id === review.user.id ?
                <div className="review-button-container">

                    { !canEdit ? 
                        <Button
                            variant="outline-info" className="me-2"
                            onClick={() => {
                                setCanEdit(!canEdit)
                                }}
                            > edit
                        </Button>
                    : 
                        <Button
                            variant="warning" className="me-2"
                            onClick={() => {
                                setCanEdit(!canEdit)
                                handleReviewEdit(review.id, rating, content)
                                }}
                            > save edits
                        </Button>
                    }

                    { !canEdit && (
                        <Button 
                            variant="dark"
                            onClick={()=> {handleReviewDestroy(review.id)}}>
                            ✕
                        </Button> 
                    )}
                    
                </div> 
            : null}
            </div>

            <div className="horizontal-separator"></div>

            {(canEdit && review.user.id === user.id) ? 
                <Form className="can-edit-review">
                    <Form.Label htmlFor="rating"></Form.Label>
                    Rating:
                    <Form.Control
                        as="textarea"
                        rows="5"
                        name="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        />
                    Review:
                    <Form.Control
                        as="textarea"
                        rows="5"
                        name="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        />
                </Form>
            : <p>{review.content}</p>}
                        


            <span className="review-username">
                <b>{`@${review.user.username}`}</b>
            </span>
        </div>

    )
}

export default Review;