import { IPago } from "./interfaz";


export class TarjetaDeCredito implements IPago {
    private cuotas: number;
    private entidad: string;
    private numeroDeTarjeta: number;
  
    constructor(pNumeroDeTarjeta: number) {
      this.cuotas = 12;
      this.entidad = "Visa";
      this.numeroDeTarjeta = pNumeroDeTarjeta;
    }

  
    procesarPago(): void {
      console.log(`La tarjeta numero ${this.numeroDeTarjeta} pertenece a la entidad ${this.entidad} y su compra se puede pagar hasta en ${this.cuotas} cuotas  `)
    }
  
    cancelarPago(): void {
      console.log("El pago ha sido cancelado por fondos insuficientes")
    }
  
    generarRecibo(): void {
      console.log(`El pago de la tarjeta numero ${this.numeroDeTarjeta} ha sido exitoso`)
    }
  
  }