import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from '../doctor/doctor.component';
import { Doctor } from '../doctor';
import { PatientService } from '../patient.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    DoctorComponent
  ],
  template: `
  <section>
    <form>
      <input type="text" placeholder="Filter by city">
      <button class="primary" type="button">Search</button>
    </form>
  </section>
  <section class="results">
    <app-doctor *ngFor="let doctor of doctorList" [doctor]="doctor"></app-doctor>
  </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  readonly baseUrl = 'assets/';
  doctorList: Doctor[] = [];
  patientService = inject(PatientService);
  constructor() {
    this.doctorList = this.patientService.getAllDoctors();
  }
}
