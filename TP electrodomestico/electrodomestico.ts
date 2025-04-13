

export class Electrodomestico {
  protected  marca: string;
  protected  modelo: string;
  protected  estaEncendido: boolean;
    
  
    constructor(pMarca: string, pModelo: string, pEncendido: boolean) {
      this.marca = pMarca;
      this.modelo = pModelo;
      this.estaEncendido = pEncendido;
    }

    public encender(): void {
      if (!this.estaEncendido) {
        this.estaEncendido = true;
        console.log(`El dispositivo ${this.marca} fue encendido`);
    } else {
        console.log(`El dispositivo ${this.marca} ya estaba encendido`);
    }
  }

    public apagar(): void {
      if (this.estaEncendido) {
        this.estaEncendido = false;
        console.log(`El dispositivo ${this.marca} fue apagado`);
    } else {
        console.log("El dispositivo ya estaba apagado");
    }
}


    public mostrarInfo(): void{
      console.log(`Electrodoméstico marca ${this.marca}, modelo ${this.modelo}`);
    
}




}
