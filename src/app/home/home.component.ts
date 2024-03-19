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
      <input type="text" placeholder="Filter by specialization" #filter>
      <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
    </form>
  </section>
  <section class="results">
    <app-doctor *ngFor="let doctor of filteredDoctorList" [doctor]="doctor"></app-doctor>
  </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
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

