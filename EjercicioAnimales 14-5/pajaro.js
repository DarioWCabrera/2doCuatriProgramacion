"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pajaro = void 0;
var Pajaro = /** @class */ (function () {
    function Pajaro(pNombre, pRaza, pColor) {
        this.nombre = pNombre;
        this.raza = pRaza;
        this.color = pColor;
    }
    Pajaro.prototype.getNombre = function () {
        return this.nombre;
    };
    Pajaro.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Pajaro.prototype.getRaza = function () {
        return this.raza;
    };
    Pajaro.prototype.setRaza = function (pRaza) {
        this.raza = pRaza;
    };
    Pajaro.prototype.getColor = function () {
        return this.color;
    };
    Pajaro.prototype.setColor = function (pColor) {
        this.color = pColor;
    };
    Pajaro.prototype.hacerSonido = function () {
        console.log("Pipipi, piripipi");
    };
    Pajaro.prototype.mover = function () {
        console.log("El pajaro ".concat(this.nombre, " vuela haciendo volteretas sobre las personas"));
    };
    return Pajaro;
}());
exports.Pajaro = Pajaro;
