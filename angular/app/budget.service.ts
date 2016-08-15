import { Injectable }	from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { Projects } from './projects';

import 'rxjs/add/operator/catch';

let _projsDataUrl = 'https://1-dot-jda-saas-training-02.appspot.com/rest/projectsBillingSummaryInfo/123'; // URL to Restful Endpoint

@Injectable()
export class BudgetService {
  projects: Projects[] = [];
  constructor(private http: Http) {
    console.log("Budget Service started.......");
  }

  getProjects(): Observable<any>{
    console.log("Fetching all Projects.........");
    return this.http.get(_projsDataUrl)
          .map((res: Response) => res.json())          
          .catch(this.handleError);
  }

  getBarChartData(projectid: string){
    return [
      {
        key: "Cumulative Return",
        values: [
          {
            "label" : "A" ,
            "value" : -29.765957771107
          } ,
          {
            "label" : "B" ,
            "value" : 0
          } ,
          {
            "label" : "C" ,
            "value" : 32.807804682612
          } ,
          {
            "label" : "D" ,
            "value" : 196.45946739256
          } ,
          {
            "label" : "E" ,
            "value" : 0.19434030906893
          } ,
          {
            "label" : "F" ,
            "value" : -98.079782601442
          } ,
          {
            "label" : "G" ,
            "value" : -13.925743130903
          } ,
          {
            "label" : "H" ,
            "value" : -5.1387322875705
          }
        ]
      }
    ];
  }

  getProjectDetails(projectId: string){
    console.log("Inside getProjectDetails:");
    console.log(this.projects[0].projectID);
    return this.projects.find(project => project.projectID === projectId);
  }

  private handleError (errorMessage: Response) {
    console.log(errorMessage);
    return Observable.throw(errorMessage.json().error || 'Server error');
  }
}