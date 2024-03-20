import { Injectable } from '@angular/core';
import { Doctor } from '../doctor';
@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor() { }
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
  
}]

getAllDoctors(): Doctor[] {
  return this.doctorList;
}
getDoctorsById(id: number): Doctor | undefined{
  return this.doctorList.find(doctor => doctor.id === id);
}

submitAppointmentRequest(name: string, date: string, time: string, email: string, description: string) {
  
    console.log(`Appointment request received for ${name} on ${date} at ${time} with email ${email}, description: ${description}`);
  

}
}
