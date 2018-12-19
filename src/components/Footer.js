import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div className="container">
        <nav className="nav flex-row- mx-auto">
          <a href="/about" className="nav-link">About yCity Events</a>
          <a href="/create" className="nav-link">Create an Event</a>
        </nav>
      </div>
    )
  }
}
