import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProjUsers } from './users';
import { BudgetService } from './budget.service';

//import { Logger } from "angular2-logger/core";

@Component({
  selector: 'dashboard',
  templateUrl: 'app/dashboard.component.html',
  styleUrls: ['css/bootstrap.min.css'],
  providers: [BudgetService]
})

export class DashboardComponent implements OnInit {
  errorMessage: string;
  projusers: ProjUsers[] = [];
  constructor(private router: Router,private budgetService: BudgetService/*, private _logger:Logger*/){
      //this._logger.log("DashboardComponent Started....");
  }

	ngOnInit() {
    //this._logger.log("ngOnInit Started....");
   	this.budgetService.getProjectUsers()
        .subscribe(
          response => this.projusers = response,
          error =>  this.errorMessage = <any>error
        );
  }
}