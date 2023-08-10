import { isObservable, makeAutoObservable } from "mobx"
import { isValidProp } from "./utils/isValidProp.js"
import { Restaurant } from "./models/Restaurant.js"
import { FoodItem } from "./models/FoodItem.js"


class ObservableAppState {

  user = null
  /** @type {import('./models/Account.js').Account} */
  account = null

  /** @type {Restaurant[]} */
  restaurants = [
    new Restaurant({
      id: 1,
      name: "Savannah's Bananas",
      bio: "You'll go <i>BANANAS</i> for our healthy menu!",
      location: 'Boise, ID',
      imgUrl: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=627&q=80'
    }),
    new Restaurant({
      id: 2,
      name: "Sammy's Sammies",
      bio: "You'll go <i>HAM</i> for our sandwiches!",
      location: 'Boise, ID',
      imgUrl: 'https://images.unsplash.com/photo-1642694358592-e4df77878e6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
    })
  ]

  /** @type {FoodItem[]} */
  foodItems = [
    new FoodItem({
      name: 'Banana',
      price: 3.50,
      calories: 105,
      imgUrl: 'https://images.unsplash.com/photo-1593280443077-ae46e0100ad1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80',
      restaurantId: 1
    }),
    new FoodItem({
      name: 'Club',
      price: 12,
      calories: 600,
      imgUrl: 'https://images.unsplash.com/photo-1567234669013-216f3a40e02e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      restaurantId: 2
    }),
    new FoodItem({
      name: 'Veggie',
      price: 15,
      calories: 450,
      imgUrl: 'https://images.unsplash.com/photo-1655279562015-047c3da9a271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=766&q=80',
      restaurantId: 2
    }),
    new FoodItem({
      name: 'Caprese',
      price: 9,
      calories: 400,
      imgUrl: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      restaurantId: 2
    }),
    new FoodItem({
      name: 'Reuben',
      price: 17.95,
      calories: 800,
      imgUrl: 'https://images.unsplash.com/photo-1614746526977-fac370353ae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
      restaurantId: 2
    }),
    new FoodItem({
      name: 'Banh Mi',
      price: 8,
      calories: 600,
      imgUrl: 'https://images.unsplash.com/photo-1600454309261-3dc9b7597637?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=626&q=80',
      restaurantId: 2
    }),
  ]

  /** @type {FoodItem[]} */
  cartItems = []

  constructor () {
    makeAutoObservable(this)
  }

}


// TODO replace old AppState with this
// eslint-disable-next-line no-undef
export const AppState = new Proxy(new ObservableAppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    if (!target[prop] || typeof target[prop] != 'object') {
      return target[prop]
    }
    return isObservable(target[prop]) ? target[prop] : makeAutoObservable(target[prop])
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    return true
  }
})