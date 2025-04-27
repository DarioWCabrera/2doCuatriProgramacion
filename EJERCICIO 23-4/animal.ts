import { IAnimal } from "./iAnimal";

export abstract class animal implements IAnimal{
    protected nombre: string;


    constructor(pNombre:string){
        this.nombre = pNombre;
    }

    setNombre(pNombre: string): void {
        this.nombre=pNombre    }
    getNombre(): string {
        return this.nombre;
    }

 emitirSonido(): void {
     
 }
 moverse(): void {
     console.log(`${this.nombre} se mueve`);
     
 }

 abstract tipoDeDieta();

}