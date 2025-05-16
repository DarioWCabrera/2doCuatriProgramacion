
import { CompuBuilder } from "./compuBuilder";
import { Computadora } from "./computadora";

let computadora = new Computadora("Ryzen 200", 580, 256, "Optimus")

let compuNueva = new CompuBuilder().setProcesador("AMD Ryzen").setRam(64).setAlmacenamiento(512).build();


console.log(compuNueva.showInfo());
