import React, { useState } from "react";
import { AppState } from "../AppState.js";
import { Link } from "react-router-dom";

export default function HomePage() {

  const restaurants = AppState.restaurants

  const restaurantCards = restaurants.map(restaurant => {
    return (
      <div key={restaurant.id} className="col-md-4">
        <div className="card">
          <img src={restaurant.imgUrl} alt={restaurant.name} className="card-img-top card-image restaurnt-card-img" />
          <div className="card-body">
            <h3 className="card-title">{restaurant.name}</h3>
            <Link to={`/restaurants/${restaurant.id}`}>
              <button className="btn btn-primary">See Details</button>
            </Link>
          </div>
        </div>
      </div>
    )
  })

  
  return (
    <div className="home-page">
      <div className="container-fluid">
        <div className="row hero align-items-center">
          <div className="col-8 m-auto">
            <div className="bg-white p-5 rounded text-center">
              <h1>Hungry?</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row my-3">
          <div className="col-12 mb-3">
            <h2>Restaurants</h2>
          </div>
          {restaurantCards}
        </div>
      </div>
    </div>
  )
}