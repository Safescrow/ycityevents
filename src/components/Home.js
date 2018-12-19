import React, { Component } from 'react'

export default class Home extends Component {
	render() {
		return (
			<div>
				<div className="position-relative text-center p-3 p-md-5 bg-light">
					<div className="col-md-8 p-lg-5 mx-auto my-5">
						<h1 className="display-4">Find Events in and around Yenagoa</h1>
						<p className="lead font-weight-normal">Buy and Sell Event Tickets</p>
						<a className="btn btn-outline-secondary" href="/#featured">View Featured Events</a>
					</div>
				</div>
				<div className="container mt-4" id="featured">
					<h3>Featured Events</h3>
					<a href="/events">See all events</a>
					<div className="upcoming">
						<div className="card" style={{width: '22rem'}}>
							<img className="card-img-top" src="/images/concert.jpeg" alt="concert"/>
							<div className="card-body">
								<h5 className="card-title"><small>Saturday, December 22, 10:00 AM</small><br/>Concert</h5>
								<div className="mt-2 d-flex flex-row">
									<img className="img-fluid avatar mr-2" src="/images/concert.jpeg" alt="host avatar"/>
									<div className="flex-column">
										<h6>Hosted by:</h6>
										<p>FrendzyEnt</p>
									</div>
								</div>
							</div>
							<div className="card-footer d-flex flex-row">
								<a href="/events/concert" className="btn btn-primary mr-2">&#8358;2500 - &#8358;5000</a>
								<p className="my-auto"></p>
							</div>
						</div>
					</div>
				</div>
				<div className="container mt-4" id="upcoming">
					<h3>Upcoming Events</h3>
					<div className="upcoming">
						<div className="card mr-2" style={{width: '18rem'}}>
							<img className="card-img-top" src="/images/concert.jpeg" alt="concert"/>
							<div className="card-body">
								<h5 className="card-title"><small>Saturday, December 22, 10:00 AM</small><br/>Concert</h5>
								<div className="mt-2 d-flex flex-row">
									<img className="img-fluid avatar mr-2" src="/images/concert.jpeg" alt="host avatar"/>
									<div className="flex-column">
										<h6>Hosted by:</h6>
										<p>FrendzyEnt</p>
									</div>
								</div>
							</div>
							<div className="card-footer d-flex flex-row">
								<a href="/events/concert" className="btn btn-primary mr-2">&#8358;2500 - &#8358;5000</a>
								<p className="my-auto"></p>
							</div>
						</div>
						<div className="card mr-2" style={{width: '18rem'}}>
							<img className="card-img-top" src="/images/concert1.jpeg" alt="concert"/>
							<div className="card-body">
								<h5 className="card-title"><small>Sunday, December 23, 11:00 PM</small><br/>Maroon 5 Live in Concert</h5>
								<div className="mt-2 d-flex flex-row">
									<img className="img-fluid avatar mr-2" src="/images/concert1.jpeg" alt="host avatar"/>
									<div className="flex-column">
										<h6>Hosted by:</h6>
										<p>Bloom Entertainment</p>
									</div>
								</div>
							</div>
							<div className="card-footer d-flex flex-row">
								<a href="/events/concert" className="btn btn-primary mr-2">&#8358;25000 - &#8358;500000</a>
								<p className="my-auto"></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
