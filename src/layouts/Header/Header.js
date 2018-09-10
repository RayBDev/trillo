import React from 'react'

import logo from '../../assets/img/logo.png'
import user from '../../assets/img/user.jpg'

import Icon from '../../components/UI/Icon/Icon'

const Header = () => (
  <header className="header">
    <img src={logo} alt="trillo logo" className="logo" />
    <form action="#" className="search">
      <input
        type="text"
        className="search__input"
        placeholder="Search hotels"
      />
      <button className="search__button">
        <Icon clName="search__icon" icName="magnifying-glass" />
      </button>
    </form>
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <Icon clName="user-nav__icon" icName="bookmark" />
        <span className="user-nav__notification">7</span>
      </div>
      <div className="user-nav__icon-box">
        <Icon clName="user-nav__icon" icName="chat" />
        <span className="user-nav__notification">13</span>
      </div>
      <div className="user-nav__user">
        <img src={user} alt="User photo" className="user-nav__user-photo" />
        <span className="user-nav__user-name">Jonas</span>
      </div>
    </nav>
  </header>
)

export default Header
