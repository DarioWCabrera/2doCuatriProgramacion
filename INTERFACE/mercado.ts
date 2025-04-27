import { IPago } from "./interfaz";

export class MercadoPago implements IPago {
        private cuotas: number;
        private nombreUsuario: string;
      
        constructor(pNombreDeUsuario: string) {
          this.cuotas = 12;
          this.nombreUsuario = pNombreDeUsuario;
        }
      
        procesarPago(): void {
          console.log(`El pago se realizara de parte del Usuario ${this.nombreUsuario} en la cantidad de ${this.cuotas} cuotas.`)
        }
      
        cancelarPago(): void {
          console.log("El pago ha sido cancelado")
        }
      
        generarRecibo(): void {
          console.log(`El pago del Usuario ${this.nombreUsuario} ha sido exitoso`)
        }

  }