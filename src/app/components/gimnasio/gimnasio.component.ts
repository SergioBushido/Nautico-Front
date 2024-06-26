import { Component } from '@angular/core';

@Component({
  selector: 'app-gimnasio',
  templateUrl: './gimnasio.component.html',
  styleUrls: ['./gimnasio.component.css']
})
export class GimnasioComponent {
  selectedDate: Date | null = null;
  availableHours: string[] = [];
  selectedHour: string | null = null;
  reservationConfirmed: boolean = false;
  reservationMessage: string = '';

  onDateChange(event: any) {
    this.selectedDate = event.value;
    this.loadAvailableHours();
  }

  loadAvailableHours() {
    const morningHours = this.generateHours('08:00', 8);  // Genera 8 horas desde las 08:00
    const afternoonHours = this.generateHours('14:00', 8);  // Genera 8 horas desde las 14:00
    this.availableHours = [...morningHours, ...afternoonHours];
  }

  generateHours(start: string, count: number): string[] {
    const [startHour, startMinute] = start.split(':').map(Number);
    let hours: string[] = [];
    for (let i = 0; i < count; i++) {
      const hour = startHour + i;
      const formattedHour = hour < 10 ? `0${hour}` : hour;
      hours.push(`${formattedHour}:${startMinute < 10 ? '0' + startMinute : startMinute}`);
    }
    return hours;
  }

  confirmReservation() {
    if (this.selectedDate && this.selectedHour) {
      const formattedDate = this.selectedDate.toLocaleDateString();
      this.reservationMessage = `Ha reservado correctamente su cita para el día ${formattedDate} a la(s) ${this.selectedHour}`;
      this.reservationConfirmed = true;
    }
  }
}
