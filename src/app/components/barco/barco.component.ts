// src/app/components/barco/barco.component.ts
import { Component, OnInit } from '@angular/core';
import { Barco } from '../../models/barco/barco.model';
import { BarcoService } from '../../services/barco/barco.service';
import { SocioService } from '../../services/socio/socio.service';
import { Socio } from '../../models/socio/socio.model';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrls: ['./barco.component.css']
})
export class BarcoComponent implements OnInit {
  barcos: Barco[] = [];
  socios: Socio[] = [];
  newBarco: Barco = new Barco(0, '', '', 0, 0, null);
  editBarco: Barco | null = null;

  constructor(private barcoService: BarcoService, private socioService: SocioService) {}

  ngOnInit(): void {
    this.getBarcos();
    this.getSocios();
  }

  getBarcos(): void {
    this.barcoService.getBarcos().subscribe(
      (data) => {
        this.barcos = data.map(barco => ({
          ...barco,
          socio: barco.socio || null // Asegura que socio nunca es undefined
        }));
      },
      (error) => {
        console.error('Error al obtener barcos', error);
      }
    );
  }

  getSocios(): void {
    this.socioService.getSocios().subscribe(
      (data) => {
        this.socios = data;
      },
      (error) => {
        console.error('Error al obtener socios', error);
      }
    );
  }

  addBarco(): void {
    this.barcoService.createBarco(this.newBarco).subscribe(
      (data) => {
        this.barcos.push({
          ...data,
          socio: data.socio || null
        });
        this.newBarco = new Barco(0, '', '', 0, 0, null); // Resetea el formulario
      },
      (error) => {
        console.error('Error al crear barco', error);
      }
    );
  }

  updateBarco(): void {
    if (this.editBarco) {
      this.barcoService.updateBarco(this.editBarco.id, this.editBarco).subscribe(
        (data) => {
          const index = this.barcos.findIndex(b => b.id === data.id);
          this.barcos[index] = {
            ...data,
            socio: data.socio || null
          };
          this.editBarco = null;
        },
        (error) => {
          console.error('Error al actualizar barco', error);
        }
      );
    }
  }

  deleteBarco(id: number): void {
    this.barcoService.deleteBarco(id).subscribe(
      () => {
        this.barcos = this.barcos.filter(b => b.id !== id);
      },
      (error) => {
        console.error('Error al eliminar barco', error);
      }
    );
  }

  selectBarco(barco: Barco): void {
    this.editBarco = { ...barco, socio: barco.socio || null }; // Asegura que socio nunca es undefined
  }

  clearEdit(): void {
    this.editBarco = null;
  }
}
