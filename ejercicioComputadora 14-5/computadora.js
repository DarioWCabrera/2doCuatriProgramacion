"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Computadora = void 0;
var Computadora = /** @class */ (function () {
    function Computadora(pProcesador, pRam, pAlmacenamiento, pTarjeta, pSistema) {
        this.procesador = pProcesador !== null && pProcesador !== void 0 ? pProcesador : "AMD Ryzen",
            this.ram = pRam !== null && pRam !== void 0 ? pRam : 8,
            this.almacenamiento = pAlmacenamiento !== null && pAlmacenamiento !== void 0 ? pAlmacenamiento : 128,
            this.tarjetaGrafica = pTarjeta !== null && pTarjeta !== void 0 ? pTarjeta : "RX 580",
            this.sistemaOperativo = pSistema !== null && pSistema !== void 0 ? pSistema : "Windows 11";
    }
    Computadora.prototype.showInfo = function () {
        return "Esta Computadora cuenta con un procesador ".concat(this.procesador, ", una memoria Ram de ").concat(this.ram, " Gb, un almacenamiento interno de ").concat(this.almacenamiento, " Gb, una tarjeta grafica ").concat(this.tarjetaGrafica, " y un Sistema Operativo ").concat(this.sistemaOperativo);
    };
    return Computadora;
}());
exports.Computadora = Computadora;
