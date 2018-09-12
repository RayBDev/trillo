import React from 'react'

import Button from '../UI/Button/Button'

const CTA = props => (
  <div className="cta">
    <h2 className="cta__book-now">
      Good news! We have 4 rooms left for your selected dates!
    </h2>
    <Button btnType="cta" textStart="Book now" textEnd="Only 4 rooms left" />
  </div>
)

export default CTA
