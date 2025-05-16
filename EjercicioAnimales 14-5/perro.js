"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Perro = void 0;
var Perro = /** @class */ (function () {
    function Perro(pNombre, pRaza, pColor) {
        this.nombre = pNombre;
        this.raza = pRaza;
        this.color = pColor;
    }
    Perro.prototype.getNombre = function () {
        return this.nombre;
    };
    Perro.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Perro.prototype.getRaza = function () {
        return this.raza;
    };
    Perro.prototype.setRaza = function (pRaza) {
        this.raza = pRaza;
    };
    Perro.prototype.getColor = function () {
        return this.color;
    };
    Perro.prototype.setColor = function (pColor) {
        this.color = pColor;
    };
    Perro.prototype.hacerSonido = function () {
        console.log("Guau, guau");
    };
    Perro.prototype.mover = function () {
        console.log("El perro ".concat(this.nombre, " corre cada vez que una persona le lanza un palo"));
    };
    return Perro;
}());
exports.Perro = Perro;
