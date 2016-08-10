import { Injectable }	from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

//import { Logger } from "angular2-logger/core";
import { ProjUsers } from './users';

import 'rxjs/add/operator/catch';

let _projUsersUrl = 'https://1-dot-jda-saas-training-02.appspot.com/rest/projectsBillingInfo/123'; // URL to Restful Endpoint

@Injectable()
export class BudgetService {
  constructor(private http: Http/*, private _logger:Logger*/) {
    //this._logger.log("Budget Service started.......");
  }

  getProjectUsers(){
    //this._logger.log("Fetching all Project Users.........");
    return this.http.get(_projUsersUrl)
          .map((res: Response) => res.json())
          .catch(this.handleError);
  }

  private handleError (errorMessage: Response) {
    //this._logger.log(errorMessage);
    return Observable.throw(errorMessage.json().error || 'Server error');
  }
}