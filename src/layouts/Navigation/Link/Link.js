import React from 'react'

import Icon from '../../../components/UI/Icon/Icon'

const Link = props => (
  <li className={`side-nav__item ${props.active}`} onClick={props.click}>
    <a href={props.href} className="side-nav__link">
      <Icon clName="side-nav__icon" icName={props.icon} />
      <span>{props.name}</span>
    </a>
  </li>
)

export default Link
