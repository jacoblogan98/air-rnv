import React from 'react'
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import Col from "react-bootstrap/Col"


function Review({ review, reviewList, setReviewList }) {

// need validation here to only delete Review if they are owner of that
  // if loggedIn.id === review.user_id then allow delete, else don't render button 

  // ERROR Unexpected End of JSON Input.  Still persists but gives this error

    const deleteReview = (id) => {
        console.log(id)
        fetch(`/reviews/${id}`, {method: "DELETE"})
        .then(res => res.json())
        .then(data => {
            
            console.log(data)
            const updatedReviewList = reviewList.filter(review => review.id !== id)
            setReviewList(updatedReviewList)
        })
      }
    

        const Arr = []

        for (let i = review.rating; i > 0; i--) {
            Arr.push("fa fa-star checked text-maple")
        }

        for (let i = (5 - review.rating); i > 0; i--) {
            Arr.push("fa fa-star-o text-maple")
        }

        const renderStars = Arr.map((starClass, i) => <span key={i} className={starClass}></span>)

        return (
            <Col>
                <Card
                    key={review.id}
                    style={{ width: '18rem' }}
                    className="mb-3 mx-auto"
                >
                    <Card.Header className="bg-sand">{renderStars}</Card.Header>
                    <Card.Body>
                        <Card.Title>{review.user_name}</Card.Title>
                        <Card.Text>{review.content}</Card.Text>
                        <Button onClick={() => deleteReview(review.id)}> Delete Review</Button>

                    </Card.Body>
                </Card>
            </Col>

        )
    }


export default Review