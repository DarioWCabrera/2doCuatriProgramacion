import { Computadora } from "./computadora";

export class CompuBuilder{
private procesador: string;
private ram: number;
private almacenamiento: number;

setProcesador(procesador:string){
    this.procesador = procesador;
    return this;
}
setRam(ram:number){
    this.ram = ram;
    return this;
}
setAlmacenamiento(almacenamiento:number){
    this.almacenamiento = almacenamiento;
    return this;
}
build():Computadora{
    return new Computadora(this.procesador,this.ram,this.almacenamiento)
}
}