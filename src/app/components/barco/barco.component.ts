import { Component, OnInit } from '@angular/core';
import { Barco } from '../../models/barco/barco.model';
import { BarcoService } from '../../services/barco/barco.service';
import { Socio } from '../../models/socio/socio.model';
import { SocioService } from '../../services/socio/socio.service';

@Component({
  selector: 'app-barco',
  templateUrl: './barco.component.html',
  styleUrl: './barco.component.css'
})
export class BarcoComponent implements OnInit {
[x: string]: any;
  barco :Barco[] = [];
  socios: Socio[] = [];

  constructor(private barcoService: BarcoService, private socioService: SocioService) { }

  ngOnInit(): void {
    this.barcoService.getBarcos().subscribe(
      (data: Barco[]) => {
        this.barco = data;
      },
      error => {
        console.error('Error fetching barcos', error);
      }
    );

    this.socioService.getSocios().subscribe(
      (data: Socio[]) => {
        this.socios = data;
      },
      error => {
        console.error('Error fetching socios', error);
      }
    );
  }
}