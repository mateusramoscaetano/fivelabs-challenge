import { makeAutoObservable } from "mobx";
import { ICardCheckout } from "../@types";

class VehicleStore {
  cart: ICardCheckout[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(vehicle: ICardCheckout) {
    this.cart.push(vehicle);
  }

  removeFromCart() {
    this.cart = [];
  }
}

const storeVehicle = new VehicleStore();

export default storeVehicle;
