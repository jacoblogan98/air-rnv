import React, {useState} from 'react'

function AddReviewForm({data, reviewList, setReviewList}) {

    // problem here is user_id is not available until we can specify the user creating the review.  For now I have them know their id number.
    const [formData, setFormData] = useState({
        content: "",
        rating: null,
        user_id: null,
        rv_id: data.id,
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch("/reviews", configObj)
        .then(r => r.json())
        .then((data) => {
            setReviewList({
                ...reviewList,
                data
            })
        })

    }

    const handleChange = (e) => {
        const key = e.target.name
        setFormData({
            ...formData,
            [key]: e.target.value
        })
    }


  return (

    <form onSubmit={(e) => handleSubmit(e)}>
        <input onChange={handleChange} type="number" name="user_id" placeholder="User_id number" />
        <input onChange={handleChange} type="number" min="1" max="5" name="rating"/>
        <input onChange={handleChange} type="text" name="content" placeholder="Write your comments here..."/>
        <input type="submit" />
    </form>
  )
}

export default AddReviewForm