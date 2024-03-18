import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocdetailsComponent } from './docdetails/docdetails.component';

const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home page'
    },
    {
      path: 'docdetails/:id',
      component: DocdetailsComponent,
      title: 'Doctor details'
    }
  ];
  
  export default routeConfig;