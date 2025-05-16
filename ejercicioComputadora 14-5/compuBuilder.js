"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompuBuilder = void 0;
var computadora_1 = require("./computadora");
var CompuBuilder = /** @class */ (function () {
    function CompuBuilder() {
    }
    CompuBuilder.prototype.setProcesador = function (procesador) {
        this.procesador = procesador;
        return this;
    };
    CompuBuilder.prototype.setRam = function (ram) {
        this.ram = ram;
        return this;
    };
    CompuBuilder.prototype.setAlmacenamiento = function (almacenamiento) {
        this.almacenamiento = almacenamiento;
        return this;
    };
    CompuBuilder.prototype.build = function () {
        return new computadora_1.Computadora(this.procesador, this.ram, this.almacenamiento);
    };
    return CompuBuilder;
}());
exports.CompuBuilder = CompuBuilder;
