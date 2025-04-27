import { Persona } from './Persona';
  
  export class Estudiante extends Persona {
    private curso: string;
  
    constructor(pNombre: string, pEdad: number, pCurso: string) {
      super(pNombre, pEdad);
      this.curso = pCurso;
    }
  
    public getCurso(): string {
      return this.curso;
    }
  
    public setCurso(pCurso: string) {
      this.curso = pCurso;
    }
  
    public presentarse(): string {
      return `Hola, soy ${this.nombre}, estudiante del curso ${this.curso}.`;
    }
  }