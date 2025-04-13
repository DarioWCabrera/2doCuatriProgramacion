
import { Heladera } from "./heladera";
import { SmartHeladera } from "./smartHeladera";
import { ModuloWifi } from "./moduloWifi";

let primerHeladera:Heladera = new Heladera("Gafa", "HDR400", true, 20);

let moduloWifi:ModuloWifi = new ModuloWifi(3000,5);

let primerHeladeraSmart: SmartHeladera = new SmartHeladera("Whirlpool", "LAM10", true, 15, moduloWifi, false);


primerHeladeraSmart.encender();
primerHeladeraSmart.cambiarTemperatura(18);
primerHeladeraSmart.conectarInternet();
primerHeladeraSmart.mostrarInfo();

