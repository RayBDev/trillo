import React from 'react'

const Review = props => (
  <figure className="review">
    <blockquote className="review__text">{props.reviewText}</blockquote>
    <figcaption className="review__user">
      <img
        src={props.reviewerPhoto}
        alt={props.reviewerPhotoAlt}
        className="review__photo"
      />
      <div className="review__user-box">
        <p className="review__user-name">{props.reviewerName}</p>
        <p className="review__user-date">{props.reviewDate}</p>
      </div>
      <div className="review__rating">{props.reviewRating}</div>
    </figcaption>
  </figure>
)

export default Review
