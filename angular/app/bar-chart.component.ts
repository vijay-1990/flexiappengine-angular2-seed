import {Component, OnInit, AfterViewInit, ViewChild} from '@angular/core';
import {nvD3} from 'ng2-nvd3';
import { BudgetService } from './budget.service';
declare let d3: any;

@Component({
  selector: 'chart',
  template: `
    <div>
      <nvd3 [options]="options" [data]="data" ></nvd3>
    </div>
  `
})
export class BarChartComponent implements OnInit{
  options;
  data;
  chartType;

  constructor(
    private _budgetService: BudgetService) {
  }

  @ViewChild(nvD3)
  nvD3: nvD3;

  ngOnInit(){
    
    this.options = {
      chart: {
        type: 'discreteBarChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        discretebar: { 
     	 dispatch: {
      	      elementClick: function (t){alert(t.data.value);}
      		}
      	},
        x: function(d){return d.label;},
        y: function(d){return d.value;},
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'X Axis'
        },
        yAxis: {
          axisLabel: 'Y Axis',
          axisLabelDistance: -10
        }
      }      
    };
  
    /*this.data = [
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
    ];*/
    this.data= this._budgetService.getBarChartData('101');
  } 
}