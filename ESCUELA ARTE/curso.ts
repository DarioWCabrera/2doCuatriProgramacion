import { Profesor } from "./profesor";
import { Estudiante } from "./estudiante";
  
  export class Curso {
    private participantes: Estudiante[] = [];
    private nombre: string;
    private responsable: Profesor;
  
    constructor(pNombre: string, pResponsable: Profesor) {
      this.nombre = pNombre;
      this.responsable = pResponsable;
    }
  
    public getNombre(): string {
      return this.nombre;
    }
  
    public setNombre(pNombre: string) {
      this.nombre = pNombre;
    }
  
    public getResponsable(): Profesor {
      return this.responsable;
    }
  
    public setResponsable(pResponsable: Profesor) {
      this.responsable = pResponsable;
    }
  
    public getParticipantes(): Estudiante[] {
      return this.participantes;
    }
  
    public agregarParticipante(estudiante: Estudiante): void {
      this.participantes.push(estudiante);
    }
  
    public mostrarInfo(): string {
      const participantesStr = this.participantes.map(p => `  - ${p.getNombre()} (${p.getCurso()})`).join('\n');
      return `Curso: ${this.nombre}\nDictado por: ${this.responsable.getNombre()}\nParticipantes:\n${participantesStr}`;
    }
  }