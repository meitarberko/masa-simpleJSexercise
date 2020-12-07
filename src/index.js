import { Storage } from "./storage.js";
import { findFunc } from "./auxiliaryMethods.js";

const storage = new Storage();

const firstItem = 7;
const SecondItem = 4;
console.log(storage.create(firstItem));
console.log(storage.create(SecondItem));

console.log(storage.getAll());

console.log(storage.find(findFunc));

console.log(storage.getAll());

console.log(storage.remove(findFunc));

console.log(storage.create({name: "dan", city: "rehovot", age:50}));
console.log(storage.getAll());

console.log(storage.where({name: "dan", age: 50}));

