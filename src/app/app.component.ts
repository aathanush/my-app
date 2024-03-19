import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule, RouterOutlet, RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HomeComponent,
    RouterModule,
    RouterOutlet,
    RouterLink
  ],
  template: `
    <main>
      <nav>
        <ul>
          <li>
        <a [routerLink]="['/']">
          Doctors 
        </a>
          </li>
          <li>
        <a [routerLink]="['/appointments']">
          Appointments
        </a>
          </li>
          <li>
        <a [routerLink]="['/appointments']">
          Log out
        </a>
          </li>
        </ul>
      </nav>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
