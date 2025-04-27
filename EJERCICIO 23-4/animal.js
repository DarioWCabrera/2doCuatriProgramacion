"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.animal = void 0;
var animal = /** @class */ (function () {
    function animal(pNombre) {
        this.nombre = pNombre;
    }
    animal.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    animal.prototype.getNombre = function () {
        return this.nombre;
    };
    animal.prototype.emitirSonido = function () {
    };
    animal.prototype.moverse = function () {
        console.log("".concat(this.nombre, " se mueve"));
    };
    return animal;
}());
exports.animal = animal;
