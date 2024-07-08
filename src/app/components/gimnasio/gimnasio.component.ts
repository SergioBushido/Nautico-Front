import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../../services/reservation/Reservation.Service';

@Component({
  selector: 'app-gimnasio',
  templateUrl: './gimnasio.component.html',
  styleUrls: ['./gimnasio.component.css']
})
export class GimnasioComponent {
  selectedDate: Date | null = null;
  availableTimeGym: any[] = [];
  selectedHour: string | null = null;
  reservationConfirmed: boolean = false;
  reservationMessage: string = '';

  constructor(private router: Router, private reservationService: ReservationService) {}

  ngOnInit() {
    // No cargar franjas horarias inicialmente
  }

  onDateChange(event: any) {
    this.selectedDate = event.value;
    this.adjustDateToCorrectTimezone();
    this.loadAvailableGimnasio();
  }

  adjustDateToCorrectTimezone() {
    if (this.selectedDate) {
      const userTimezoneOffset = this.selectedDate.getTimezoneOffset() * 60000;
      this.selectedDate = new Date(this.selectedDate.getTime() - userTimezoneOffset);
    }
  }

  loadAvailableGimnasio() {
    if (this.selectedDate) {
      console.log('Selected Date:', this.selectedDate);  

      const formattedDate = this.selectedDate.toISOString().split('T')[0];
      console.log('Formatted Date:', formattedDate);  

      this.reservationService.getAvailableGimnasio(formattedDate).subscribe(
        (data: any) => {
          console.log('Data received from backend:', data);  
          this.availableTimeGym = data;
          console.log('Filtered Time Slots:', this.availableTimeGym);  
        },
        (error: any) => {
          console.error('Error loading time slots:', error);
        }
      );
    }
  }

  confirmReservation() {
    if (this.selectedDate && this.selectedHour) {
      const selectedTimeGym = this.availableTimeGym.find(slot => slot.hour === this.selectedHour);

      if (selectedTimeGym) {
        const timeGymId = selectedTimeGym.id;
        const reservation = {
          date: this.selectedDate.toISOString().split('T')[0],  
          hour: this.selectedHour
        };

        this.reservationService.createReservationGym(timeGymId, reservation).subscribe(
          response => {
            const formattedDate = this.selectedDate!.toLocaleDateString();
            this.reservationMessage = `Ha reservado correctamente su cita para el día ${formattedDate} a la(s) ${this.selectedHour}`;
            this.reservationConfirmed = true;
            this.loadAvailableGimnasio(); 
          },
          error => {
            console.error('Error creating reservation:', error);
          }
        );
      }
    }
  }

  goToHome(route: string) {
    this.router.navigate([route]);
  }
}

/*
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../../services/reservation/Reservation.Service';

@Component({
  selector: 'app-gimnasio',
  templateUrl: './gimnasio.component.html',
  styleUrls: ['./gimnasio.component.css']
})
export class GimnasioComponent implements OnInit {
  selectedDate: Date | null = null;
  availableTimeGym: any[] = [];
  selectedHour: string | null = null;
  reservationConfirmed: boolean = false;
  reservationMessage: string = '';
  userId: number = 1; // Suponiendo que obtienes el userId de algún contexto de usuario autenticado

  constructor(private router: Router, private reservationService: ReservationService) {}

  ngOnInit() {
    // No cargar franjas horarias inicialmente
  }

  onDateChange(event: any) {
    this.selectedDate = event.value;
    this.adjustDateToCorrectTimezone();
    this.loadAvailableGimnasio();
  }

  adjustDateToCorrectTimezone() {
    if (this.selectedDate) {
      const userTimezoneOffset = this.selectedDate.getTimezoneOffset() * 60000;
      this.selectedDate = new Date(this.selectedDate.getTime() - userTimezoneOffset);
    }
  }

  loadAvailableGimnasio() {
    if (this.selectedDate) {
      console.log('Selected Date:', this.selectedDate);

      const formattedDate = this.selectedDate.toISOString().split('T')[0];
      console.log('Formatted Date:', formattedDate);

      this.reservationService.getAvailableGimnasio(formattedDate).subscribe(
        (data: any) => {
          console.log('Data received from backend:', data);
          this.availableTimeGym = data;
          console.log('Filtered Time Slots:', this.availableTimeGym);
        },
        (error: any) => {
          console.error('Error loading time slots:', error);
        }
      );
    }
  }

  confirmReservation() {
    if (this.selectedDate && this.selectedHour) {
      const selectedTimeGym = this.availableTimeGym.find(slot => slot.hour === this.selectedHour);

      if (selectedTimeGym) {
        const timeGymId = selectedTimeGym.id;
        const reservation = {
          date: this.selectedDate.toISOString().split('T')[0],
          hour: this.selectedHour
        };

        this.reservationService.createReservationGym(timeGymId, this.userId, reservation).subscribe(
          response => {
            const formattedDate = this.selectedDate!.toLocaleDateString();
            this.reservationMessage = `Ha reservado correctamente su cita para el día ${formattedDate} a la(s) ${this.selectedHour}`;
            this.reservationConfirmed = true;
            this.loadAvailableGimnasio();
          },
          error => {
            console.error('Error creating reservation:', error);
          }
        );
      }
    }
  }

  goToHome(route: string) {
    this.router.navigate([route]);
  }
}
*/