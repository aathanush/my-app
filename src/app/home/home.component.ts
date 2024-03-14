import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from '../doctor/doctor.component';

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
    <app-doctor></app-doctor>
  </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {

}
