"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compuBuilder_1 = require("./compuBuilder");
var computadora_1 = require("./computadora");
var computadora = new computadora_1.Computadora("Ryzen 200", 580, 256, "Optimus");
var compuNueva = new compuBuilder_1.CompuBuilder().setAlmacenamiento(512).setRam(64).setProcesador("AMD Ryzen").build();
console.log(compuNueva.showInfo());
