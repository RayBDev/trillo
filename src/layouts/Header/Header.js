import React from 'react'

import logo from '../../assets/img/logo.png'
import user from '../../assets/img/user.jpg'

import IconMagnifyingGlass from '../../assets/icons/SVG/magnifying-glass.svg'
import IconBookmark from '../../assets/icons/SVG/bookmark.svg'
import IconChat from '../../assets/icons/SVG/chat.svg'

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
        <IconMagnifyingGlass className="search__icon" />
      </button>
    </form>
    <nav className="user-nav">
      <div className="user-nav__icon-box">
        <IconBookmark className="user-nav__icon" />
        <span className="user-nav__notification">7</span>
      </div>
      <div className="user-nav__icon-box">
        <IconChat className="user-nav__icon" />
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
