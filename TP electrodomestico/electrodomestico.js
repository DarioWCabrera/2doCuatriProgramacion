"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Electrodomestico = void 0;
var Electrodomestico = /** @class */ (function () {
    function Electrodomestico(pMarca, pModelo, pEncendido) {
        this.marca = pMarca;
        this.modelo = pModelo;
        this.estaEncendido = pEncendido;
    }
    Electrodomestico.prototype.encender = function () {
        if (!this.estaEncendido) {
            this.estaEncendido = true;
            console.log("El dispositivo ".concat(this.marca, " fue encendido"));
        }
        else {
            console.log("El dispositivo ".concat(this.marca, " ya estaba encendido"));
        }
    };
    Electrodomestico.prototype.apagar = function () {
        if (this.estaEncendido) {
            this.estaEncendido = false;
            console.log("El dispositivo ".concat(this.marca, " fue apagado"));
        }
        else {
            console.log("El dispositivo ya estaba apagado");
        }
    };
    Electrodomestico.prototype.mostrarInfo = function () {
        console.log("Electrodom\u00E9stico marca ".concat(this.marca, ", modelo ").concat(this.modelo));
    };
    return Electrodomestico;
}());
exports.Electrodomestico = Electrodomestico;
