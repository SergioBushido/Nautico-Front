// src/app/components/socios/socios.component.ts
import { Component, OnInit } from '@angular/core';
import { SocioService } from '../../services/socio/socio.service';
import { Socio } from '../../models/socio/socio.model';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent implements OnInit {
  socios: Socio[] = [];

  constructor(private socioService: SocioService) { }

  ngOnInit(): void {
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
