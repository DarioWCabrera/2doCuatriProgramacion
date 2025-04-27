import { Persona } from './Persona';
  
  export class Profesor extends Persona {
    private materia: string;
  
    constructor(pNombre: string, pEdad: number, pMateria: string) {
      super(pNombre, pEdad);
      this.materia = pMateria;
    }
  
    public getMateria(): string {
      return this.materia;
    }
  
    public setMateria(pMateria: string) {
      this.materia = pMateria;
    }
  
    public presentarse(): string {
      return `Hola, soy el profesor ${this.nombre}, especializado en ${this.materia}.`;
    }
  }
  