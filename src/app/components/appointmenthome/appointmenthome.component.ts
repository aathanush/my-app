import { Component } from '@angular/core';
import { AppointmentComponent } from '../appointment/appointment.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-appointmenthome',
  standalone: true,
  imports: [AppointmentComponent,CommonModule],
  templateUrl: './appointmenthome.component.html',
  styleUrl: './appointmenthome.component.css'
})
export class AppointmenthomeComponent {

  readonly baseUrl = 'assets/';
  doctorList: Doctor[] = [];
  filteredDoctorList: Doctor[] = [];
  patientService = inject(PatientService);
  constructor() {
    this.doctorList = this.patientService.getAllDoctors();
    this.filteredDoctorList = this.doctorList;
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredDoctorList = this.doctorList;
      return;
    }
  
    this.filteredDoctorList = this.doctorList.filter(
      doctor => doctor?.specialization.toLowerCase().includes(text.toLowerCase())
    );
  }

}
