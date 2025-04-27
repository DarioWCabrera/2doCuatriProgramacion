import { IAnimal } from "./iAnimal";
import { animal } from "./animal";
import { Perro } from "./perro";
import { Gato } from "./gato";

let nuevoPerro:Perro = new Perro("Bart");

let nuevoGato:Gato = new Gato("Asrrael");

console.log(nuevoGato.getNombre());
nuevoGato.moverse();
nuevoGato.emitirSonido();
nuevoGato.tipoDeDieta();
console.log("----------------------------------------");
console.log(nuevoPerro.getNombre());
nuevoPerro.moverse();
nuevoPerro.emitirSonido();
nuevoPerro.tipoDeDieta();
