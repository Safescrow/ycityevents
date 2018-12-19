import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">yCity Events</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#featured">Featured Events</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#upcoming">Upcoming Events</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Categories
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <a className="dropdown-item" href="/">Comedy</a>
                <a className="dropdown-item" href="/">Music</a>
                <a className="dropdown-item" href="/">Fashion</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">Create an Event</a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/login" className="nav-link">Log In</a>
            </li>
            <li className="nav-item">
              <a href="/signup" className="nav-link">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
