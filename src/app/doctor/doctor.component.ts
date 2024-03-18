import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../doctor';

@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="doctor.photo" alt="Exterior photo of {{doctor.docname}}">
    <h2 class="listing-heading">{{ doctor.docname}}</h2>
    <p class="listing-location">{{ doctor.specialization}}, {{doctor.rating }}</p>
  </section>
  `,
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  @Input() doctor!: Doctor;


}
