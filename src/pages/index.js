import React from 'react'

import StarIcon from '../components/UI/Icon/Icon'
import Button from '../components/UI/Button/Button'

import hotel1 from '../assets/img/hotel-1.jpg'
import hotel2 from '../assets/img/hotel-2.jpg'
import hotel3 from '../assets/img/hotel-3.jpg'

const IndexPage = () => (
  <div className="hotel-view">
    <div className="gallery">
      <figure className="gallery__item">
        <img src={hotel1} alt="Photo of hotel 1" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src={hotel2} alt="Photo of hotel 2" className="gallery__photo" />
      </figure>
      <figure className="gallery__item">
        <img src={hotel3} alt="Photo of hotel 3" className="gallery__photo" />
      </figure>
    </div>
    <div className="overview">
      <h1 className="overview__heading">Hotel Las Palmas</h1>
      <div className="overview__stars">
        <StarIcon clName="overview__icon-star" icName="star" />
        <StarIcon clName="overview__icon-star" icName="star" />
        <StarIcon clName="overview__icon-star" icName="star" />
        <StarIcon clName="overview__icon-star" icName="star" />
        <StarIcon clName="overview__icon-star" icName="star" />
      </div>
      <div className="overview__location">
        <StarIcon clName="overview__icon-location" icName="location-pin" />
        <Button clName="btn-inline">Albufeira, Portugal</Button>
      </div>
      <div className="overview__rating">
        <div className="overview__rating-average">8.6</div>
        <div className="overview__rating-count">429 votes</div>
      </div>
    </div>
  </div>
)

export default IndexPage
