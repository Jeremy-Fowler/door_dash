import { observer } from 'mobx-react-lite';
import React from 'react';
import { useParams } from 'react-router-dom';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
import FoodItemCard from '../components/FoodItemCard.jsx';

function RestaurantPage() {

  const {restaurantId} = useParams()

  const restaurant = AppState.restaurants.find(r => r.id == restaurantId)

  const foodItems = AppState.foodItems.filter(f => f.restaurantId == restaurantId)


  const foodItemCards = foodItems.map(foodItem => {
    return (
      <div key={foodItem.name} className="col-md-3 mb-3">
        <FoodItemCard foodItem={foodItem} />
      </div>
    )
  })


  return (

    <div className="RestaurantPage">
      <div className="container">
        <div className="row my-3">
          <div className="col-12">
            <img src={restaurant.imgUrl} alt={restaurant.name} className='img-fluid restaurant-hero' />
            <h1>{restaurant.name}</h1>
            <h2>{restaurant.location}</h2>
            <p dangerouslySetInnerHTML={{__html:restaurant.bio}}></p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {foodItemCards}
        </div>
      </div>
    </div>
  )

}
export default observer(RestaurantPage)