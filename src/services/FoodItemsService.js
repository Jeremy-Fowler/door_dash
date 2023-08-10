import { AppState } from "../AppState.js"

class FoodItemsService {
  removeItemFromCart(foodItem) {
    const cartItems = AppState.cartItems
    const itemIndex = cartItems.indexOf(foodItem)
    if (itemIndex == -1) {
      throw new Error('Invalid food item')
    }
    cartItems.splice(itemIndex, 1)
  }
  addItemToCart(foodItem) {
    AppState.cartItems.push(foodItem)
  }

}

export const foodItemsService = new FoodItemsService()