

export interface IPago {
    procesarPago(): void;
    cancelarPago(): void;
    generarRecibo(): void;
  }
  
  // Clases tarjeta de credito, mercadopago, transferencia
  
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
  
export class Transferencia implements IPago {
    private entidad: string;
    private numeroCuenta: number;
    private titular: string;
    private monto: number;
  
    constructor(pNumeroCuenta: number, pTitular:string, pMonto: number) {
      this.entidad = "Banco de la Nacion Argentina"
      this.numeroCuenta = pNumeroCuenta;
      this.titular = pTitular;
      this.monto = pMonto;
    }
  
    procesarPago(): void {
      console.log(`El pago se realizara desde la cuenta ${this.numeroCuenta}, perteneciente al ${this.entidad}, a nombre de ${this.titular}, por la cantidad de $ ${this.monto} pesos.`)
    }
  
    cancelarPago(): void {
      console.log("El pago ha sido cancelado por parte de la entidad bancaria. Por favor comunicate al 0880-111-0902")
    }
  
    generarRecibo(): void {
      console.log(`El pago de la Cuenta N° ${this.numeroCuenta} ha sido exitoso`)
    }
}


  // implementar la interfaz IPago en las clases  mercadopago, transferencia 