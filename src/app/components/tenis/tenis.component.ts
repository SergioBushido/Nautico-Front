import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReservationService } from '../../services/reservation/Reservation.Service';

@Component({
  selector: 'app-tenis',
  templateUrl: './tenis.component.html',
  styleUrl: './tenis.component.css'
})
export class TenisComponent implements OnInit {


  selectedDate: Date | null = null;
  availableTenis: any[] = [];
  selectedHour: string | null = null;
  reservationConfirmed: boolean = false;
  reservationMessage: string = '';

  constructor(private router: Router, private reservationService: ReservationService) {}
  ngOnInit(): void {
  }


  onDateChange(event: any) {
    this.selectedDate = event.value;
    this.adjustDateToCorrectTimezone();
    this.loadAvailableTenis();
  }

  adjustDateToCorrectTimezone() {
    if (this.selectedDate) {
      const userTimezoneOffset = this.selectedDate.getTimezoneOffset() * 60000;
      this.selectedDate = new Date(this.selectedDate.getTime() - userTimezoneOffset);
    }
  }


   loadAvailableTenis() {
    if (this.selectedDate) {
      console.log('Selected Date:', this.selectedDate);  

      // Ajustar el formateo de la fecha para asegurarse de que sea correcta
      const formattedDate = this.selectedDate.toISOString().split('T')[0];
      console.log('Formatted Date:', formattedDate);  

      this.reservationService.getAvailableTenis(formattedDate).subscribe(
        (data: any) => {
          console.log('Data received from backend:', data);  
          this.availableTenis = data;
          console.log('Filtered Time Slots:', this.availableTenis);  
        },
        (error: any) => {
          console.error('Error loading time slots:', error);
        }
      );
    }
  }
  confirmReservationTenis() {
    if (this.selectedDate && this.selectedHour) {
      // Encontrar el NatacionId correspondiente a la hora seleccionada
      const selectedTimeTenis = this.availableTenis.find(slot => slot.hour === this.selectedHour);

      if (selectedTimeTenis) {
        const timeTenisnId = selectedTimeTenis.id;
        const reservation = {
          date: this.selectedDate.toISOString().split('T')[0],  // Asegúrate de enviar la fecha en el formato correcto
          hour: this.selectedHour
        };

        this.reservationService.createReservationTenis(timeTenisnId, reservation).subscribe(
          response => {
            const formattedDate = this.selectedDate!.toLocaleDateString();
            this.reservationMessage = `Ha reservado correctamente su cita para el día ${formattedDate} a la(s) ${this.selectedHour}`;
            this.reservationConfirmed = true;
            this.loadAvailableTenis(); // Recarga las horas disponibles después de confirmar la reserva
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