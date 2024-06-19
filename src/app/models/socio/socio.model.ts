// src/app/models/socio/socio.model.ts
import { Barco } from '../barco/barco.model';

export class Socio {
  constructor(
    public id: number,
    public nombre: string,
    public apellidos: string,
    public barcos: Barco[] // Asociación con Barco
  ) {}
}

export { Barco }; // Exportar Barco si es necesario en otros lugares
