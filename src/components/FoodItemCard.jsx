import React from 'react';
import { FoodItem } from '../models/FoodItem.js';
import  PropTypes  from 'prop-types';
import { foodItemsService } from '../services/FoodItemsService.js';
import { useLocation } from 'react-router-dom';
import Pop from '../utils/Pop.js';

/**@param {{foodItem: FoodItem}} props*/ 
export default function FoodItemCard({foodItem}) {

  function addItemToCart(){
    foodItemsService.addItemToCart(foodItem)
  }

  async function removeItemFromCart(){
    const wantsToRemove = await Pop.confirm()
    if(!wantsToRemove){return}
    foodItemsService.removeItemFromCart(foodItem)
  }

  const location = useLocation()


  
  const removeButton = (
    <button onClick={removeItemFromCart} className="btn btn-danger" title={`Remove ${foodItem.name} from your cart!`}>
      <i className='mdi mdi-close'></i>
      <i className='mdi mdi-cart'></i>
    </button>
  )
  
  const addButton = ( 
    <button onClick={addItemToCart} className="btn btn-success" title={`Add ${foodItem.name} to your cart!`}>
      <i className='mdi mdi-plus'></i>
      <i className='mdi mdi-cart'></i>
    </button>
  )

  return (

    <div className="FoodItemCard">
      <div className="card">
        <img src={foodItem.imgUrl} className="card-img-top card-image" alt={foodItem.name}/>
        <div className="card-body d-flex justify-content-between align-items-center">
          <h3 className="card-title">{foodItem.name}</h3>
          {location.pathname == '/cart' ? removeButton : addButton}
        </div>
      </div>
    </div>
  )

}

FoodItemCard.propTypes = {
  foodItem: PropTypes.instanceOf(FoodItem)
}