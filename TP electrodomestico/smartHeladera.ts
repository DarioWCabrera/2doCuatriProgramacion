import { Heladera } from "./heladera";
import { ModuloWifi } from "./moduloWifi";

export class SmartHeladera extends Heladera{
    private estaConectada: boolean;
    private moduloWifi:ModuloWifi;
    

constructor(
    pMarca: string, 
    pModelo: string, 
    pEncendido: boolean, 
    pTemperatura: number, 
    pModulo:ModuloWifi,
    pConectada:boolean){
    super(pMarca,pModelo,pEncendido,pTemperatura);
    this.moduloWifi = pModulo;
    this.estaConectada = pConectada;
}

public conectarInternet(): void{
    this.estaConectada = true;
    console.log(`El dispositivo se encuentra conectado a la red`);
    
}
mostrarVelocidad(): void {
   this.moduloWifi.mostrarInfo();
  }

  public mostrarInfo(): void {
    super.mostrarInfo();  
    this.moduloWifi.mostrarInfo();
    console.log(`Estado de conexión: ${this.estaConectada ? "Conectada a Internet" : "Sin conexión"}`);
}
  
  
}





