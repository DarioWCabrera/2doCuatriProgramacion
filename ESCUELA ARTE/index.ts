
  import { Profesor } from './profesor';
  import { Estudiante } from './estudiante';
  import { Curso } from './curso';
  import { Persona } from './Persona';
  
  const profe1 = new Profesor("Lulian Barosela", 45, "Pintura");
  const profe2 = new Profesor("Laura Martinez", 40, "Dibujo");
  const estudiante1 = new Estudiante("Damian Fernandez", 22, "Literatura");
  const estudiante2 = new Estudiante("Carla Gonzalez", 20, "Arte");
  const estudiante3 = new Estudiante("Lucia Echeverri", 21, "Dibujo");

  const cursoPintura = new Curso("Técnicas de Dibujo", profe2);
  cursoPintura.agregarParticipante(estudiante2);
  cursoPintura.agregarParticipante(estudiante3);
  
  const personas: Persona[] = [profe2, estudiante3, estudiante2];
  
  console.log("--- Presentaciones ---");
  personas.forEach(p => console.log(p.presentarse()));
  
  console.log("\n--- Información del Curso ---");
  console.log(cursoPintura.mostrarInfo());
  