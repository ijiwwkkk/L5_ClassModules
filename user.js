export class User {
  constructor(id, name, isAdmin) {
    this._id = id;
    this._name = name;
    this._isAdmin = isAdmin;
  }
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  get isAdmin() {
    return this._isAdmin;
  }
  set isAdmin(value) {
    this._isAdmin = value;
  }
  show() {
    console.log(`ID: ${this._id}, Имя: ${this._name}, Админ: ${this._isAdmin}`);
  }
  delete() {
    this._id = null;
    this._name = null;
    this._isAdmin = null;
  }
  copy() {
    return this;
  }
  #grantAdmin() {
    this._isAdmin = true;
  }
  static clone(user) {
    return new User(user.id, user.name, user.isAdmin);
  }
}