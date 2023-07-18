import { makeAutoObservable } from "mobx";
import { UserType } from "../@types";

class UserStore {
  user: UserType[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addToUser(user: UserType) {
    this.user.push(user);
  }

  removeFromUser() {
    this.user = [];
  }
}

const store = new UserStore();

export default store;
