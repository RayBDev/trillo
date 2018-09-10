import React, { Component } from 'react'

import Link from './Link/Link'

class Navigation extends Component {
  state = {
    links: [
      {
        name: 'Hotel',
        href: '#',
        icon: 'home',
        active: true,
      },
      {
        name: 'Flight',
        href: '#',
        icon: 'aircraft-take-off',
        active: false,
      },
      {
        name: 'Car Rental',
        href: '#',
        icon: 'key',
        active: false,
      },
      {
        name: 'Tours',
        href: '#',
        icon: 'map',
        active: false,
      },
    ],
  }

  linkClickHandler = index => {
    let oldState = [...this.state.links]
    let newState = oldState.map((el, i) => {
      if (index === i) {
        el.active = true
      } else {
        el.active = false
      }
      return el
    })
    this.setState({ links: newState })
    console.log(this.state.links)
  }

  render() {
    return (
      <nav className="sidebar">
        <ul className="side-nav">
          {this.state.links.map((details, index) => (
            <Link
              key={details.name}
              name={details.name}
              href={details.href}
              icon={details.icon}
              click={() => this.linkClickHandler(index)}
              active={details.active ? 'side-nav__item--active' : null}
            />
          ))}
        </ul>
        <div className="legal">&copy; 2017 by trillo. All rights reserved.</div>
      </nav>
    )
  }
}

export default Navigation
