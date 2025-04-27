import { IAnimal } from "./iAnimal";
import { animal } from "./animal";

export class Perro extends animal{
    constructor(pNombre){;
    super(pNombre)
};
    
    tipoDeDieta(): void {
        console.log("Que coma lo que quiera");
               
    }


    emitirSonido(): void {
       console.log("Guau Guau!!!");
               
    }

    moverse(): void {
        console.log("Corre Bart, corre por tu vida");
        
    }
}

