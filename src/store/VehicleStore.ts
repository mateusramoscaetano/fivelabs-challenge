import { makeAutoObservable } from "mobx";
import { MyComponentProps } from "../@types";

class VehicleStore {
  cart: MyComponentProps[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToCart(vehicle: MyComponentProps) {
    this.cart.push(vehicle);
  }

  removeFromCart() {
    this.cart = [];
  }
}

const storeVehicle = new VehicleStore();

export default storeVehicle;
