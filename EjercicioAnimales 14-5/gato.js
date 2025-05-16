"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gato = void 0;
var Gato = /** @class */ (function () {
    function Gato(pNombre, pRaza, pColor) {
        this.nombre = pNombre;
        this.raza = pRaza;
        this.color = pColor;
    }
    Gato.prototype.getNombre = function () {
        return this.nombre;
    };
    Gato.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Gato.prototype.getRaza = function () {
        return this.raza;
    };
    Gato.prototype.setRaza = function (pRaza) {
        this.raza = pRaza;
    };
    Gato.prototype.getColor = function () {
        return this.color;
    };
    Gato.prototype.setColor = function (pColor) {
        this.color = pColor;
    };
    Gato.prototype.hacerSonido = function () {
        console.log("Miau, miaaaaauuuuuuu");
    };
    Gato.prototype.mover = function () {
        console.log("El gato ".concat(this.nombre, " se revuelca mientras juega con un ovillo de lana"));
    };
    return Gato;
}());
exports.Gato = Gato;
