import React from 'react'
import '../../../assets/icons/sprite.svg'

const Icon = props => (
  <svg className={`${props.clName}`}>
    <use xlinkHref={`#sprite_icon-${props.icName}`} />
  </svg>
)

export default Icon
