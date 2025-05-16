import { IPago } from "./interfaz";


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
    
    public getEntidad(): string{
      return this.entidad
    }
    public setNumeroCuenta(pNumeroCuenta: number): void {
      this.numeroCuenta = pNumeroCuenta;
    }
    public getNumeroCuenta(): number{
      return this.numeroCuenta;
    }
    public setTitular(pTitular: string): void{
      this.titular = pTitular;
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