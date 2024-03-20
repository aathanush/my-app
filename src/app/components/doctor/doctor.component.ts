import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../doctor';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-doctor',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  template: `
  <section class="listing">
    <img class="listing-photo" [src]="doctor.photo" alt="Exterior photo of {{doctor.docname}}">
    <h2 class="listing-heading">{{ doctor.docname}}</h2>
    <p class="listing-location">{{ doctor.specialization}}, {{doctor.rating }}</p>
    <a [routerLink]="['/docdetails', doctor.id]">View Details</a>
  </section>
  `,
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent {
  @Input() doctor!: Doctor;


}
