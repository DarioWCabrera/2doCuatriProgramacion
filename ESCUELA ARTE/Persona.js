"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(pNombre, pEdad) {
        this.nombre = pNombre;
        this.edad = pEdad;
    }
    Persona.prototype.getNombre = function () {
        return this.nombre;
    };
    Persona.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Persona.prototype.getEdad = function () {
        return this.edad;
    };
    Persona.prototype.setEdad = function (pEdad) {
        this.edad = pEdad;
    };
    Persona.prototype.presentarse = function () {
        return "Hola, soy ".concat(this.nombre, ", tengo ").concat(this.edad, " a\u00F1os.");
    };
    return Persona;
}());
exports.Persona = Persona;
