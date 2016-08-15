import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Projects } from './projects';
import { BudgetService } from './budget.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  //providers: [BudgetService]
})

export class DashboardComponent implements OnInit {
  errorMessage: string;
  projects: Projects[] = [];
  constructor(private router: Router,private budgetService: BudgetService){
      console.log("DashboardComponent Started....");
  }

	ngOnInit() {
    let self = this;
    console.log("ngOnInit Started in Dashboard Component....");
    try{     
        this.budgetService.getProjects()
          .subscribe(
            (response) => {
              this.projects.push(response);
              console.log(this.projects);
            },
            error =>  this.errorMessage = <any>error,
            () => {
              console.log('done'); 
              console.log("Inside Dashboard Componenet:"+self.projects[0].projectID);
              self.budgetService.projects = self.projects; 
            }
        );
    }
    catch(Error){
      console.log(Error);
    }
    console.log("ngOnInit Exited in Dashboard Component....");
    
  }

  gotoDetail(projectId: string) {
      let link = ['/project-details', projectId];
      this.router.navigate(link);
  }
  
}