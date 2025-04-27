export class Persona {
    protected nombre: string;
    protected edad: number;
  
    constructor(pNombre: string, pEdad: number) {
      this.nombre = pNombre;
      this.edad = pEdad;
    }
  
    public getNombre(): string {
      return this.nombre;
    }
  
    public setNombre(pNombre: string) {
      this.nombre = pNombre;
    }
  
    public getEdad(): number {
      return this.edad;
    }
  
    public setEdad(pEdad: number) {
      this.edad = pEdad;
    }
  
    public presentarse(): string {
      return `Hola, soy ${this.nombre}, tengo ${this.edad} años.`;
    }
  }