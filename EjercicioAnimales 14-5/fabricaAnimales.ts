import { Gato } from "./gato";
import { Pajaro } from "./pajaro";
import { Perro } from "./perro";


export class FabricaDeAnimales{
    public crearAnimales(tipo: string,pNombre: string, pRaza: string, pColor: string){
        if(tipo==="perro"){
            return new Perro(pNombre, pRaza,pColor);
        }else if(tipo==="gato"){
            return new Gato(pNombre, pRaza,pColor);
        } else if(tipo==="pajaro"){
            return new Pajaro(pNombre, pRaza,pColor);
        } else{
            throw new Error("Tipo de animal no encontrado")
        }
    }
}
