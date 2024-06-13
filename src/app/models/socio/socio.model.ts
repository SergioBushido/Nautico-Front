import { Barco } from "../barco/barco.model";

export interface Socio {
    id: number;
    nombre: string;
    apellidos: string;
    barcos: Barco[];
  }

export { Barco };