import { Animal } from "./animal";

export class Gato implements Animal{
 private nombre: string;
 private raza : string;
 private color : string

constructor(pNombre: string, pRaza: string, pColor: string){
    this.nombre = pNombre;
    this.raza = pRaza;
    this.color = pColor;
}
public getNombre():string{
    return this.nombre
}
public setNombre(pNombre: string): void{
    this.nombre = pNombre;
}
public getRaza():string{
    return this.raza
}
public setRaza(pRaza: string): void{
    this.raza = pRaza;
}
public getColor():string{
    return this.color
}
public setColor(pColor: string): void{
    this.color = pColor;
}

public hacerSonido(): void {
    console.log("Miau, miaaaaauuuuuuu");
     
}
public mover(): void {
    console.log(`El gato ${this.nombre} se revuelca mientras juega con un ovillo de lana`);
    
} 

}