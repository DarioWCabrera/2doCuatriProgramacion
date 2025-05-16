

export class Computadora{
private procesador: string;
private ram: number;
private almacenamiento: number;
private tarjetaGrafica: string;
private sistemaOperativo: string;

constructor(pProcesador?:string, pRam?:number, pAlmacenamiento?:number,pTarjeta?: string, pSistema?: string){
this.procesador = pProcesador?? "AMD Ryzen",
this.ram = pRam?? 8,
this.almacenamiento = pAlmacenamiento?? 128,
this.tarjetaGrafica = pTarjeta?? "RX 580",
this.sistemaOperativo = pSistema?? "Windows 11"
}

showInfo(): string{
    return `Esta Computadora cuenta con un procesador ${this.procesador}, una memoria Ram de ${this.ram} Gb, un almacenamiento interno de ${this.almacenamiento} Gb, una tarjeta grafica ${this.tarjetaGrafica} y un Sistema Operativo ${this.sistemaOperativo}`

}
}