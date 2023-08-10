import { observer } from 'mobx-react-lite';
import React from 'react';
import { AppState } from '../AppState.js';
import FoodItemCard from '../components/FoodItemCard.jsx';

function Cart() {

  const cartItems = AppState.cartItems

  const cartItemCards = cartItems.map((item, index) => {
    return(
      <div key={item.name + index} className="col-md-4 mb-3">
        <FoodItemCard foodItem={item}/>
      </div>
    )
  })

  return (

    <div className="Cart">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1>Cart</h1>
          </div>
        </div>
        <div className="row">
          {cartItemCards}
        </div>
      </div>
    </div>
  )

}
export default observer(Cart)