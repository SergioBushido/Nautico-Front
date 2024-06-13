import { Component, OnInit } from '@angular/core';
import { PatronService } from '../../services/patron/patron.service';
import { Patron } from '../../models/patron/patron.model';

@Component({
  selector: 'app-patron',
  templateUrl: './patron.component.html',
  styleUrls: ['./patron.component.css']
})
export class PatronComponent implements OnInit {
  patrones: Patron[] = [];
  newPatron: Patron = new Patron(0, '', '');
  editPatron: Patron | null = null;

  constructor(private patronService: PatronService) {}

  ngOnInit(): void {
    this.getPatrones();
  }

  getPatrones(): void {
    this.patronService.getPatrones().subscribe(
      (data) => {
        this.patrones = data;
      },
      (error) => {
        console.error('Error al obtener patrones', error);
      }
    );
  }

  addPatron(): void {
    this.patronService.createPatron(this.newPatron).subscribe(
      (data) => {
        this.patrones.push(data);
        this.newPatron = new Patron(0, '', '');
      },
      (error) => {
        console.error('Error al crear patrón', error);
      }
    );
  }

  updatePatron(): void {
    if (this.editPatron) {
      this.patronService.updatePatron(this.editPatron.id, this.editPatron).subscribe(
        (data) => {
          const index = this.patrones.findIndex(p => p.id === data.id);
          this.patrones[index] = data;
          this.editPatron = null;
        },
        (error) => {
          console.error('Error al actualizar patrón', error);
        }
      );
    }
  }

  deletePatron(id: number): void {
    this.patronService.deletePatron(id).subscribe(
      () => {
        this.patrones = this.patrones.filter(p => p.id !== id);
      },
      (error) => {
        console.error('Error al eliminar patrón', error);
      }
    );
  }

  selectPatron(patron: Patron): void {
    this.editPatron = { ...patron };
  }

  clearEdit(): void {
    this.editPatron = null;
  }
}
