import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Projects } from './projects';
import { BudgetService } from './budget.service';
import { BarChartComponent } from './bar-chart.component';

@Component({
  selector: 'project-details',
  templateUrl: './project-details.component.html',
  //styleUrls: ['app/hero-detail.component.css']
  directives: [BarChartComponent]
})
export class ProjectDetailsComponent implements OnInit, OnDestroy {
  project: Projects;
  sub: any;

  constructor(
    private budgetService: BudgetService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = params['id'];
      console.log("Inside second page:"+ id +"\n");
      this.project = this.budgetService.getProjectDetails(id);
      console.log("Inside second page:"+ this.project.projectName+"\n");
      console.log(this.project);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  goBack() {
    window.history.back();
  }
}
