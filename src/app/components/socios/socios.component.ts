import { Component, OnInit } from '@angular/core';
import { SocioService } from '../../services/socio/socio.service';
import { Socio, Barco } from '../../models/socio/socio.model';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {
  socios: Socio[] = [];
  newSocio: Socio = new Socio(0, '', '', []);
  newBarco: Barco = new Barco(0, '', '', 0, 0);
  selectedSocioId: number | null = null;
  selectedSocio: Socio = new Socio(0, '', '', []);

  constructor(private socioService: SocioService) { }

  ngOnInit(): void {
    this.fetchSocios();
  }

  fetchSocios(): void {
    this.socioService.getSocios().subscribe(
      (data: Socio[]) => {
        this.socios = data;
      },
      error => {
        console.error('Error fetching socios', error);
      }
    );
  }

  createSocio(): void {
    this.socioService.createSocio(this.newSocio).subscribe(
      (socio: Socio) => {
        this.socios.push(socio);
        this.newSocio = new Socio(0, '', '', []);
      },
      error => {
        console.error('Error creating socio', error);
      }
    );
  }

  updateSocio(socio: Socio): void {
    if (socio.id) {
      this.socioService.updateSocio(socio.id, socio).subscribe(
        (updatedSocio: Socio) => {
          const index = this.socios.findIndex(s => s.id === updatedSocio.id);
          if (index !== -1) {
            this.socios[index] = updatedSocio;
          }
        },
        error => {
          console.error('Error updating socio', error);
        }
      );
    }
  }

  deleteSocio(id: number): void {
    this.socioService.deleteSocio(id).subscribe(
      () => {
        this.socios = this.socios.filter(s => s.id !== id);
      },
      error => {
        console.error('Error deleting socio', error);
      }
    );
  }

  addBarcoToSocio(): void {
    if (this.selectedSocioId) {
      this.socioService.addBarcoToSocio(this.selectedSocioId, this.newBarco).subscribe(
        (barco: Barco) => {
          const socio = this.socios.find(s => s.id === this.selectedSocioId);
          if (socio) {
            socio.barcos.push(barco);
          }
          this.newBarco = new Barco(0, '', '', 0, 0);
        },
        error => {
          console.error('Error adding barco to socio', error);
        }
      );
    }
  }

  selectSocio(id: number): void {
    this.selectedSocioId = id;
  }

  editSocio(socio: Socio): void {
    this.selectedSocio = { ...socio };
  }
}
