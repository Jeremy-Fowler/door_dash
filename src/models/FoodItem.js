

export class FoodItem {
  constructor (data) {
    this.name = data.name
    this.restaurantId = data.restaurantId
    this.price = data.price
    this.imgUrl = data.imgUrl
    this.calories = data.calories
  }
}