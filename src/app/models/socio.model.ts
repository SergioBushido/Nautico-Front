import { Barco } from "./barco.model";

export interface Socio {
    id: number;
    nombre: string;
    apellidos: string;
    barcos: Barco[];
  }

export { Barco };
