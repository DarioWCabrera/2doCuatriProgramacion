import { Electrodomestico } from "./electrodomestico";

export class Heladera extends Electrodomestico{
    private temperatura:number;
    
    constructor(pMarca: string, pModelo: string, pEncendido: boolean, pTemperatura: number){
        super(pMarca, pModelo, pEncendido);
        this.temperatura = pTemperatura;
        
    }

    public getTemperatura():number{
        return this.temperatura;
    }

    public setTemperatura(pTemperatura:number):void{
        this.temperatura = pTemperatura;
    }

    public cambiarTemperatura(pTemperatura: number): void {
        this.setTemperatura(pTemperatura);
        console.log(`Se modificó la temperatura a ${pTemperatura} grados`);
    }
    public mostrarInfo(): void {
        super.mostrarInfo();
        console.log(`Temperatura actual: ${this.temperatura} grados`);
      }
    }
    

