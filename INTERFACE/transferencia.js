"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transferencia = void 0;
var Transferencia = /** @class */ (function () {
    function Transferencia(pNumeroCuenta, pTitular, pMonto) {
        this.entidad = "Banco de la Nacion Argentina";
        this.numeroCuenta = pNumeroCuenta;
        this.titular = pTitular;
        this.monto = pMonto;
    }
    Transferencia.prototype.procesarPago = function () {
        console.log("El pago se realizara desde la cuenta ".concat(this.numeroCuenta, ", perteneciente al ").concat(this.entidad, ", a nombre de ").concat(this.titular, ", por la cantidad de $ ").concat(this.monto, " pesos."));
    };
    Transferencia.prototype.cancelarPago = function () {
        console.log("El pago ha sido cancelado por parte de la entidad bancaria. Por favor comunicate al 0880-111-0902");
    };
    Transferencia.prototype.generarRecibo = function () {
        console.log("El pago de la Cuenta N\u00B0 ".concat(this.numeroCuenta, " ha sido exitoso"));
    };
    return Transferencia;
}());
exports.Transferencia = Transferencia;
