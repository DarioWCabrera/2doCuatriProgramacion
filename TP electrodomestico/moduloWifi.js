"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModuloWifi = void 0;
var ModuloWifi = /** @class */ (function () {
    function ModuloWifi(pVelocidad, pFrecuencia) {
        this.velocidadMbps = pVelocidad;
        this.frecuenciaGHz = pFrecuencia;
    }
    ModuloWifi.prototype.getVelocidadMbps = function () {
        return this.velocidadMbps;
    };
    ModuloWifi.prototype.setVelocidadMbps = function (pVelocidad) {
        this.velocidadMbps = pVelocidad;
    };
    ModuloWifi.prototype.getFrecuenciaGHz = function () {
        return this.frecuenciaGHz;
    };
    ModuloWifi.prototype.setFrecuenciaGHz = function (pFrecuencia) {
        this.frecuenciaGHz = pFrecuencia;
    };
    ModuloWifi.prototype.mostrarInfo = function () {
        console.log("WiFi - Velocidad: ".concat(this.velocidadMbps, " Mbps, Frecuencia: ").concat(this.frecuenciaGHz, " GHz"));
    };
    return ModuloWifi;
}());
exports.ModuloWifi = ModuloWifi;
