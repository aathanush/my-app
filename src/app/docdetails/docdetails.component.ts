import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';
import { Doctor } from '../doctor';
@Component({
  selector: 'app-docdetails',
  standalone: true,
  imports: [],
  template: `
  <article>
    <img class="listing-photo" [src]="doctor?.photo"
      alt="Photo of {{doctor?.docname}}"/>
    <section class="listing-description">
      <h2 class="listing-heading">{{doctor?.docname}}</h2>
      <p class="listing-location">Specialization: {{doctor?.specialization}}</p>
      <p class="listing-location">Rating: {{doctor?.rating}}</p>

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
    constructor() {
        this.doctorId = Number(this.route.snapshot.params['id']);
        this.doctor = this.patientService.getDoctorsById(this.doctorId);
    }
}