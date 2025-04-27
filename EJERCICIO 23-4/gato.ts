import { IAnimal } from "./iAnimal";
import { animal } from "./animal";

export class Gato extends animal{
    constructor(pNombre){;
    super(pNombre)
};
    
    tipoDeDieta(): void {
        console.log("Que coma solo pescado");
               
    }


    emitirSonido(): void {
       console.log("Miau Miau!!!");
               
    }

    moverse(): void {
        console.log("No te preocupes por moverte, solo sigue durmiendo");
        
    }
}
