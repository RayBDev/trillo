import React from 'react'

import Aux from '../../hoc/Aux/Aux'

const Button = props => {
  let btnClass = ''
  let btnText = ''
  if (props.btnType === 'text') {
    btnClass = 'btn-inline'
    btnText = (
      <Aux>
        {props.btnText}
        <span>&rarr;</span>
      </Aux>
    )
  } else if (props.btnType === 'text-country') {
    btnClass = 'btn-inline'
    btnText = props.btnText
  } else if (props.btnType === 'cta') {
    btnClass = 'btn'
    btnText = (
      <Aux>
        <span className="btn__visible">{props.textStart}</span>
        <span className="btn__invisible">{props.textEnd}</span>
      </Aux>
    )
  }

  return <button className={btnClass}>{btnText}</button>
}

export default Button
