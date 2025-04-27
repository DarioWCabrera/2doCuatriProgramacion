"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(pNombre, pResponsable) {
        this.participantes = [];
        this.nombre = pNombre;
        this.responsable = pResponsable;
    }
    Curso.prototype.getNombre = function () {
        return this.nombre;
    };
    Curso.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    Curso.prototype.getResponsable = function () {
        return this.responsable;
    };
    Curso.prototype.setResponsable = function (pResponsable) {
        this.responsable = pResponsable;
    };
    Curso.prototype.getParticipantes = function () {
        return this.participantes;
    };
    Curso.prototype.agregarParticipante = function (estudiante) {
        this.participantes.push(estudiante);
    };
    Curso.prototype.mostrarInfo = function () {
        var participantesStr = this.participantes.map(function (p) { return "  - ".concat(p.getNombre(), " (").concat(p.getCurso(), ")"); }).join('\n');
        return "Curso: ".concat(this.nombre, "\nDictado por: ").concat(this.responsable.getNombre(), "\nParticipantes:\n").concat(participantesStr);
    };
    return Curso;
}());
exports.Curso = Curso;
