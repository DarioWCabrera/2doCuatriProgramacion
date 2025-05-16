
import { FabricaDeAnimales } from "./fabricaAnimales";


let fabrica = new FabricaDeAnimales();

let nuevoGato = fabrica.crearAnimales("gato", "Bola de Nieve", "Callejero", "Negro");

let nuevoPerro = fabrica.crearAnimales("perro","Ayudante de Santa", "Galgo", "Marron");

let nuevoPajaro = fabrica.crearAnimales("pajaro", "Twitty", "Canario", "Amarillo")

console.log(nuevoGato);
nuevoGato.hacerSonido();
nuevoGato.mover();
console.log("---------------------------------------------------------------------------");
console.log(nuevoPerro);
nuevoPerro.hacerSonido();
nuevoPerro.mover();
console.log("---------------------------------------------------------------------------");
console.log(nuevoPajaro);
nuevoPajaro.hacerSonido();
nuevoPajaro.mover();
