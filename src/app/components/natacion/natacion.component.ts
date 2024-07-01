import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../../services/reservation/Reservation.Service';

@Component({
  selector: 'app-natacion',
  templateUrl: './natacion.component.html',
  styleUrls: ['./natacion.component.css']
})
export class NatacionComponent implements OnInit {
  selectedDate: Date | null = null;
  availableTimeNatacion: any[] = [];
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
    this.loadAvailableNatacion();
  }

  adjustDateToCorrectTimezone() {
    if (this.selectedDate) {
      const userTimezoneOffset = this.selectedDate.getTimezoneOffset() * 60000;
      this.selectedDate = new Date(this.selectedDate.getTime() - userTimezoneOffset);
    }
  }

  loadAvailableNatacion() {
    if (this.selectedDate) {
      console.log('Selected Date:', this.selectedDate);  

      // Ajustar el formateo de la fecha para asegurarse de que sea correcta
      const formattedDate = this.selectedDate.toISOString().split('T')[0];
      console.log('Formatted Date:', formattedDate);  

      this.reservationService.getAvailableNatacion(formattedDate).subscribe(
        (data: any) => {
          console.log('Data received from backend:', data);  
          this.availableTimeNatacion = data;
          console.log('Filtered Time Slots:', this.availableTimeNatacion);  
        },
        (error: any) => {
          console.error('Error loading time slots:', error);
        }
      );
    }
  }

  confirmReservation() {
    if (this.selectedDate && this.selectedHour) {
      // Encontrar el NatacionId correspondiente a la hora seleccionada
      const selectedTimeNatacion = this.availableTimeNatacion.find(slot => slot.hour === this.selectedHour);

      if (selectedTimeNatacion) {
        const timeNatacionId = selectedTimeNatacion.id;
        const reservation = {
          date: this.selectedDate.toISOString().split('T')[0],  // Asegúrate de enviar la fecha en el formato correcto
          hour: this.selectedHour
        };

        this.reservationService.createReservation(timeNatacionId, reservation).subscribe(
          response => {
            const formattedDate = this.selectedDate!.toLocaleDateString();
            this.reservationMessage = `Ha reservado correctamente su cita para el día ${formattedDate} a la(s) ${this.selectedHour}`;
            this.reservationConfirmed = true;
            this.loadAvailableNatacion(); // Recarga las horas disponibles después de confirmar la reserva
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

