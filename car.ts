import * as rs from 'readline-sync';
export class Car{

marca:string;
modelo:string;
anio:number;


constructor(pMarca:string,pModelo:string,pAnio:number){
    this.marca = pMarca;
    this.modelo = pModelo;
    this.anio = pAnio;
   
}


acelerar(pAcelerarando:number):void{
    console.log("El conductor acelera hasta llegar a " + pAcelerarando);        
}
frenar():void{
    console.log("El conductor detiene la marcha del vehículo");
} 

}
