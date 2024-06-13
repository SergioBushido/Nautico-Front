// src/app/models/barco/barco.model.ts
import { Socio } from '../socio/socio.model';

export class Barco {
  constructor(
    public id: number,
    public matricula: string,
    public nombre: string,
    public numeroAmarre: number,
    public cuotaAmarre: number,
    public socio: Socio
  ) {}
}
