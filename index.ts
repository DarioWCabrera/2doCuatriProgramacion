
import { Car } from "./car";

let auto = new Car("Peugeot", "3008", 2022);
let auto2 = new Car("Toyota", "Corolla", 2024);
let auto3 = new Car("Volkswagen", "Taos", 2025);



console.log(auto);
console.log(auto.acelerar(80));
console.log(auto.frenar());
console.log("----------------------");
console.log(auto2);
console.log(auto2.acelerar(110));
console.log(auto2.frenar());
console.log("----------------------");
console.log(auto3);
console.log(auto3.acelerar(160));
console.log(auto3.frenar());


