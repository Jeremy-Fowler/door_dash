import { AppState } from "../AppState.js";

export class Restaurant {
  constructor (data) {
    this.id = data.id || AppState.restaurants.length + 1
    this.name = data.name
    this.imgUrl = data.imgUrl
    this.location = data.location
    this.bio = data.bio
  }
}