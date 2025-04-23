"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transferencia = exports.MercadoPago = exports.TarjetaDeCredito = void 0;
// Clases tarjeta de credito, mercadopago, transferencia
var TarjetaDeCredito = /** @class */ (function () {
    function TarjetaDeCredito(pNumeroDeTarjeta) {
        this.cuotas = 12;
        this.entidad = "Visa";
        this.numeroDeTarjeta = pNumeroDeTarjeta;
    }
    TarjetaDeCredito.prototype.procesarPago = function () {
        console.log("La tarjeta numero ".concat(this.numeroDeTarjeta, " pertenece a la entidad ").concat(this.entidad, " y su compra se puede pagar hasta en ").concat(this.cuotas, " cuotas  "));
    };
    TarjetaDeCredito.prototype.cancelarPago = function () {
        console.log("El pago ha sido cancelado por fondos insuficientes");
    };
    TarjetaDeCredito.prototype.generarRecibo = function () {
        console.log("El pago de la tarjeta numero ".concat(this.numeroDeTarjeta, " ha sido exitoso"));
    };
    return TarjetaDeCredito;
}());
exports.TarjetaDeCredito = TarjetaDeCredito;
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
// implementar la interfaz IPago en las clases  mercadopago, transferencia 
