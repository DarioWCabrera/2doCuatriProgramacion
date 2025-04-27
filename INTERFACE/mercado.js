"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MercadoPago = void 0;
var MercadoPago = /** @class */ (function () {
    function MercadoPago(pNombreDeUsuario) {
        this.cuotas = 12;
        this.nombreUsuario = pNombreDeUsuario;
    }
    MercadoPago.prototype.procesarPago = function () {
        console.log("El pago se realizara de parte del Usuario ".concat(this.nombreUsuario, " en la cantidad de ").concat(this.cuotas, " cuotas."));
    };
    MercadoPago.prototype.cancelarPago = function () {
        console.log("El pago ha sido cancelado");
    };
    MercadoPago.prototype.generarRecibo = function () {
        console.log("El pago del Usuario ".concat(this.nombreUsuario, " ha sido exitoso"));
    };
    return MercadoPago;
}());
exports.MercadoPago = MercadoPago;
