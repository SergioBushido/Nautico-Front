import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {
  noticias = [
    {
      titulo: 'Nueve jugadores nautas, al Campeonato de España por Federaciones en edad escolar de frontenis y paleta goma',
      fecha: '26 junio, 2024',
      categoria: 'Frontón',
      imagen: '/assets/noticiaTenis.webp',
      descripcion: 'TENERIFE | Este próximo fin de semana tendrá lugar el Campeonato de España por ...',
      link: '/noticia/1'
    },
    {
      titulo: 'El Campus de Baloncesto del RCNT ya está en marcha',
      fecha: '26 junio, 2024',
      categoria: 'Baloncesto',
      imagen: '/assets/barco.png',
      descripcion: 'TENERIFE | Desde este lunes día 24 de junio, y hasta el viernes 2 de agosto, nuestros m&aacute...',
      link: '/noticia/2'
    },
    {
      titulo: 'Diego Lorenzo acaba en el Grupo Oro del Campeonato de España ILCA-6',
      fecha: '25 junio, 2024',
      categoria: 'Náutica',
      imagen: '/assets/barco.png',
      descripcion: 'El deportista del Real Club Náutico de Tenerife (RCNT), Diego Lorenzo, finalizó entre ...',
      link: '/noticia/3'
    },
    {
      titulo: 'El RCNT compite en el Campeonato de Canarias benjamín',
      fecha: '25 junio, 2024',
      categoria: 'Natación',
      imagen: '/assets/barco.png',
      descripcion: 'TENERIFE | Una decena de niños y niñas del Real Club Náutico de Tenerife tomaro...',
      link: '/noticia/4'
    },
    {
      titulo: 'Gran actuación del equipo de remo en el Campeonato Nacional',
      fecha: '24 junio, 2024',
      categoria: 'Remo',
      imagen: '/assets/barco.png',
      descripcion: 'El equipo de remo del RCNT tuvo una destacada actuación en el reciente Campeonato Nacional, obteniendo varios podios...',
      link: '/noticia/5'
    },
    {
      titulo: 'Éxito en el torneo de ajedrez juvenil del RCNT',
      fecha: '23 junio, 2024',
      categoria: 'Ajedrez',
      imagen: '/assets/barco.png',
      descripcion: 'TENERIFE | El torneo de ajedrez juvenil del RCNT concluyó con un alto nivel de participación y excelentes resultados para nuestros jóvenes...',
      link: '/noticia/6'
    },
   
  ];
  

  constructor(private router: Router) {}

  verNoticia(link: string) {
    this.router.navigate([link]);
  }
}
