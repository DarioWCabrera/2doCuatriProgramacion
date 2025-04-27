
import { IPago } from "./interfaz";
import { TarjetaDeCredito } from "./tarjeta";
import { MercadoPago } from "./mercado";
import { Transferencia } from "./transferencia";

let nuevatarjeta = new TarjetaDeCredito(4548720024603223);

let billetera = new MercadoPago("Dario Cabrera99");

let transfer = new Transferencia(62302524,"Dario Cabrera", 50000)

nuevatarjeta.procesarPago()
nuevatarjeta.cancelarPago()
nuevatarjeta.generarRecibo()
console.log("--------------------");
billetera.procesarPago()
billetera.cancelarPago()
billetera.generarRecibo()
console.log("--------------------");
transfer.procesarPago()
transfer.cancelarPago()
transfer.generarRecibo()