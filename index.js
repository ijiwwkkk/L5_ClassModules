import { AdminUser } from "./adminUser.js";

const admin1 = new AdminUser(1, "Иван", true, "full");
const admin2 = new AdminUser(2, "Анна", false, "limited");
const users = [admin1, admin2];
users.forEach(user => user.show());
const clonedUser = AdminUser.clone(admin1);
console.log("Клон создан:", clonedUser);
console.log("Сравнение === :", clonedUser === admin1); 