import { Component } from '@angular/core';

import { ROUTER_DIRECTIVES } from '@angular/router';
import { DashboardComponent } from './dashboard.component';


import { BudgetService } from './budget.service';

@Component({
  selector: 'my-app',
  template: `
    <router-outlet></router-outlet>
  `,
  styleUrls: ['css/bootstrap.min.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [BudgetService]
})
export class AppComponent {
}