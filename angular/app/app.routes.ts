import { provideRouter, RouterConfig }  from '@angular/router';
import { AboutUsComponent } from './about-us.component';
import { ContactUsComponent } from './contact-us.component';
import { DashboardComponent } from './dashboard.component';
import {ProjectDetailsComponent} from './project-details.component';
const routes: RouterConfig = [  
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'contact',
    component: ContactUsComponent
  },
  {
    path: 'project-details/:id',
    component: ProjectDetailsComponent
  },
  {
  	path: '',
  	redirectTo: '/dashboard',
  	pathMatch: 'full'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];