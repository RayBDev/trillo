import React from 'react'

import FeatureList from '../components/FeatureList/FeatureList'
import Review from '../components/Review/Review'

import StarIcon from '../components/UI/Icon/Icon'
import Button from '../components/UI/Button/Button'

import hotel1 from '../assets/img/hotel-1.jpg'
import hotel2 from '../assets/img/hotel-2.jpg'
import hotel3 from '../assets/img/hotel-3.jpg'
import friend1 from '../assets/img/user-3.jpg'
import friend2 from '../assets/img/user-4.jpg'
import friend3 from '../assets/img/user-5.jpg'
import friend4 from '../assets/img/user-6.jpg'
import reviewer1 from '../assets/img/user-1.jpg'
import reviewer2 from '../assets/img/user-2.jpg'

const featureListItems = [
  'Close to the beach',
  'Breakfast included',
  'Free airport shuttle',
  'Free wifi in all rooms',
  'Air conditioning and heating',
  'Pets allowed',
  'We speak all languages',
  'Perfect for families',
]

const reviews = {
  reviewer1: {
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi, totam, itaque officia ex.',
    reviewerPhoto: reviewer1,
    reviewerPhotoAlt: 'Reviewer 1 Photo',
    reviewerName: 'Nick Smith',
    reviewDate: 'Feb 23rd, 2017',
    reviewRating: '7.8',
  },
  reviewer2: {
    reviewText:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga doloremque architecto dicta animi.',
    reviewerPhoto: reviewer2,
    reviewerPhotoAlt: 'Reviewer 2 Photo',
    reviewerName: 'Mary Thomas',
    reviewDate: 'Sept 13th, 2017',
    reviewRating: '9.3',
  },
}

let reviewList = []
for (let key in reviews) {
  reviewList.push(
    <Review
      reviewText={reviews[key].reviewText}
      reviewerPhoto={reviews[key].reviewerPhoto}
      reviewerPhotoAlt={reviews[key].reviewerPhotoAlt}
      reviewerName={reviews[key].reviewerName}
      reviewDate={reviews[key].reviewDate}
      reviewRating={reviews[key].reviewRating}
    />
  )
}

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

    <div className="detail">
      <div className="description">
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
          dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas,
          ut corporis incidunt deserunt quae architecto voluptate.
        </p>
        <p className="paragraph">
          Accusantium cumque, quas, ut corporis incidunt deserunt quae
          architecto voluptate delectus, inventore iure aliquid aliquam.
        </p>
        <ul className="list">
          {featureListItems.map(listItem => (
            <FeatureList key={listItem} content={listItem} />
          ))}
        </ul>
        <div className="recommend">
          <p className="recommend__count">
            Lucy and 3 other friends recommend this hotel.
          </p>
          <div className="recommend__friends">
            <img src={friend1} alt="Friend 1" className="recommend__photo" />
            <img src={friend2} alt="Friend 2" className="recommend__photo" />
            <img src={friend3} alt="Friend 3" className="recommend__photo" />
            <img src={friend4} alt="Friend 4" className="recommend__photo" />
          </div>
        </div>
      </div>

      <div className="user-reviews">
        {reviewList}
        <Button clName="btn-inline">
          Show all <span>&rarr;</span>
        </Button>
      </div>
    </div>
  </div>
)

export default IndexPage
