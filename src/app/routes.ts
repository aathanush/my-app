import { Routes } from '@angular/router';
import { HomeComponent } from './components/doctorhome/home.component';
import { DocdetailsComponent } from './components/docdetails/docdetails.component';
import { LoginComponent } from './components/login/login.component';
const routeConfig: Routes = [
{
  path: '',
  component: LoginComponent,
  title: 'Login page'  
},
{
  path: 'doctors',
  component: HomeComponent,
  title: 'Doctors page'
},
{
  path: 'docdetails/:id',
  component: DocdetailsComponent,
  title: 'Doctor details'
}
  ];
  
  export default routeConfig;