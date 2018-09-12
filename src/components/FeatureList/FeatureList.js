import React from 'react'

import Icon from '../UI/Icon/Icon'

const List = props => (
  <li className="list__item">
    <Icon clName="list__icon" icName="chevron-thin-right" />
    {props.content}
  </li>
)

export default List
