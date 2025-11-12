import { User } from "./user.js";

export class AdminUser extends User {
  constructor(id, name, isAdmin, accessLevel) {
    super(id, name, isAdmin);
    this._accessLevel = accessLevel; 
  }
  get accessLevel() {
    return this._accessLevel;
  }

  set accessLevel(value) {
    this._accessLevel = value;
  }
  show() {
    console.log(
      `ID: ${this._id}, Имя: ${this._name}, Админ: ${this._isAdmin}, Уровень доступа: ${this._accessLevel}`
    );
  }
}