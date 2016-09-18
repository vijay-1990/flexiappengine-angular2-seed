import './rxjs-extensions';
//imports accepts the core modules required to load our application
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
//bootstrap takes the entry point of our application
import { AppComponent }         from './app.component';
//declarations are the components for our application
import { DashboardComponent }   from './dashboard.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import {nvD3} from 'ng2-nvd3';
import { PieChartComponent } from './pie-chart.component';
import { BarChartComponent } from './bar-chart.component';
import { ProjectDetailsComponent } from './project-details.component';
import { ContactUsComponent } from './contact-us.component';
import { AboutUsComponent } from './about-us.component';
//providers will accept services as list of items
import { BudgetService } from './budget.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    APP_ROUTER_PROVIDERS
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    nvD3,
    PieChartComponent,
    BarChartComponent,
    ProjectDetailsComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  providers: [
    BudgetService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
