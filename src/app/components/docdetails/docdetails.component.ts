import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';
import { Doctor } from '../../doctor';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';
@Component({
  selector: 'app-docdetails',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
  <article>
    <img class="listing-photo" [src]="doctor?.photo"
      alt="Photo of {{doctor?.docname}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{doctor?.docname}}</h2>
      <p class="listing-location">Specialization: {{doctor?.specialization}}</p>
      <p class="listing-location">Rating: {{doctor?.rating}}</p>

    </section>
    <section class="listing-apply">
      <h2 class="section-heading">Request for an appointment here</h2>
      
      <p> Fill your details and we will get back to you shortly</p>
      <br>
      <form [formGroup]="applyForm" (submit)="submitApplication()">
        <label for="name">Name</label>
        <input id="name" type="text" formControlName="name" required="true">

        <label for="date">Date of Appointment (DD-MM-YYYY)</label>
        <input id="date" type="date" formControlName="date" required>

        <label for="time">Time of appointment</label>
        <input id="time" type="time" formControlName="time" required>
        <label for="email">Email</label>
        <input id="email" type="email" formControlName="email" required>
        <button type="submit" class="primary">Request Appointment</button>
      </form>
    </section>
  </article>
`,
  styleUrl: './docdetails.component.css'
})
export class DocdetailsComponent {
    route: ActivatedRoute = inject(ActivatedRoute);
    patientService = inject(PatientService);
    doctor: Doctor | undefined;
    doctorId = -1;
    applyForm = new FormGroup({
      name: new FormControl(null),
      date: new FormControl(null),
      time: new FormControl(null),
      email: new FormControl(null)
    });
    constructor() {
        this.doctorId = Number(this.route.snapshot.params['id']);
        this.doctor = this.patientService.getDoctorsById(this.doctorId);
    }

    submitApplication() {
      this.patientService.submitAppointmentRequest(
        this.applyForm.value.name ?? '',
        this.applyForm.value.date ?? '', 
        this.applyForm.value.time ?? '',
        this.applyForm.value.email ?? ''

      );
    }


}