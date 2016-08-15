import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {nvD3} from 'ng2-nvd3';
import { BudgetService } from './budget.service';
declare let d3: any;

@Component({
  selector: 'piechart',
  directives: [nvD3],
  template: `
  <div>
    <nvd3 [options]="options" [data]="data"></nvd3>
  </div>
  `
})
export class PieChartComponent implements OnInit{
  options;
  data;
  chartType;

  constructor(
    private _budgetService: BudgetService) {
  }

  @ViewChild(nvD3)
  nvD3: nvD3;

  ngOnInit(){
    var colors = ["red", "green", "blue"];
    this.options = {
      chart: {
        type: "pieChart",
        height: 300,
        legend:{
          margin : {
          top: 10,
          right: 0,
          bottom: 0,
          left: 5
        }},
        /*color: function(d,i){
            return (d.data && d.data.color) || colors[i % colors.length]
        },*/
        x: function(d){ return d.key; },
        y: function(d){ return d.y; },
        showLabels: true,
        labelThreshold: 0.01,
      }
    };
  
    this.data = [
            {
                key: "One",
                y: 5,
                color: "yellow"
            },
            {
                key: "Two",
                y: 2,
                color: "gray"
            },
            {
                key: "Three",
                y: 9
            },
            {
                key: "Four",
                y: 7
            },
            {
                key: "Five",
                y: 4
            },
            {
                key: "Six",
                y: 3
            },
            {
                key: "Seven",
                y: .5
            }
        ];
  }
}