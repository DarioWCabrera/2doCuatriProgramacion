export class ModuloWifi{

    private velocidadMbps: number;
    private frecuenciaGHz: number;

    constructor(pVelocidad: number, pFrecuencia: number){
        this.velocidadMbps =pVelocidad;
        this.frecuenciaGHz  =pFrecuencia;       
    }
    public getVelocidadMbps(): number{
        return this.velocidadMbps;
    }
    public setVelocidadMbps(pVelocidad: number): void{
        this.velocidadMbps = pVelocidad;
    }
   
    public getFrecuenciaGHz(): number{
        return this.frecuenciaGHz;
    }
    public setFrecuenciaGHz(pFrecuencia: number): void{
        this.frecuenciaGHz = pFrecuencia;
        
    }
    
    public mostrarInfo(): void {
        console.log(`WiFi - Velocidad: ${this.velocidadMbps} Mbps, Frecuencia: ${this.frecuenciaGHz} GHz`);
    }

}
