"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(pMarca, pModelo, pAnio) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.anio = pAnio;
    }
    Car.prototype.acelerar = function (pAcelerarando) {
        console.log("El conductor acelera hasta llegar a " + pAcelerarando);
    };
    Car.prototype.frenar = function () {
        console.log("El conductor detiene la marcha del vehículo");
    };
    return Car;
}());
exports.Car = Car;
