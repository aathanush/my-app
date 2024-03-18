import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorComponent } from '../doctor/doctor.component';
import { Doctor } from '../doctor';
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
  doctorList: Doctor[] = [{
    id: 1,
    docname: 'Dr. John',
    specialization: 'Cardiologist',
    rating: 4.5,
    photo: this.baseUrl + 'doctor.jpg',
    
},
{
  id: 2,
  docname: 'Dr. Smith',
  specialization: 'General Doctor',
  rating: 4.5,
  photo: this.baseUrl + 'doctor.jpg',
  
},{
  id: 3,
  docname: 'Dr. John Smith',
  specialization: 'Dermatologist',
  rating: 5.0,
  photo: this.baseUrl + 'doctor.jpg',
  
},]

}
