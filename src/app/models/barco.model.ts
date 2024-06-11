import { Socio } from './socio.model';

export class Barco {
  id: number;
  matricula: string;
  nombre: string;
  numeroAmarre: number;
  cuotaAmarre: number;
  socio: Socio;
  //salidas: Salida[];

  constructor(
    id: number,
    matricula: string,
    nombre: string,
    numeroAmarre: number,
    cuotaAmarre: number,
    socio: Socio,
    //salidas: Salida[]
  ) {
    this.id = id;
    this.matricula = matricula;
    this.nombre = nombre;
    this.numeroAmarre = numeroAmarre;
    this.cuotaAmarre = cuotaAmarre;
    this.socio = socio;
   //this.salidas = salidas;
  }
}
