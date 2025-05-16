"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FabricaDeAnimales = void 0;
var gato_1 = require("./gato");
var pajaro_1 = require("./pajaro");
var perro_1 = require("./perro");
var FabricaDeAnimales = /** @class */ (function () {
    function FabricaDeAnimales() {
    }
    FabricaDeAnimales.prototype.crearAnimales = function (tipo, pNombre, pRaza, pColor) {
        if (tipo === "perro") {
            return new perro_1.Perro(pNombre, pRaza, pColor);
        }
        else if (tipo === "gato") {
            return new gato_1.Gato(pNombre, pRaza, pColor);
        }
        else if (tipo === "pajaro") {
            return new pajaro_1.Pajaro(pNombre, pRaza, pColor);
        }
        else {
            throw new Error("Tipo de animal no encontrado");
        }
    };
    return FabricaDeAnimales;
}());
exports.FabricaDeAnimales = FabricaDeAnimales;
