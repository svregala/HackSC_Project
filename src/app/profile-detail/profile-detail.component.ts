import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

import { Color, BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.css']
})
export class ProfileDetailComponent implements OnInit {

  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  ngOnInit(): void {
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };

  public pieChartLabels: Label[] = [['Food'], ['Entertainment'], ['Rent'], ['Education'], ['Healthcare'], ['Miscellaneous']];
  public pieChartData: SingleDataSet = [20, 5, 25, 35, 10,5];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];


  // Line Chart
  public lineChartData: ChartDataSets[] = [{ data: [3935, 4200, 3500, 3000, 2800, 3800, 3200, 3634, 4000, 3935, 3777, 2900], label: 'Monthly Breakdown' }];
  public lineChartLabels: Label[] = [ 'Jan.', 'Feb.', 'Mar.', 'Apr.', 'June', 'July', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.']
  
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'transparent',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'black',
      pointBorderColor: 'black',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';

  public lineChartOptions: ChartOptions  = {
    responsive: true,
		maintainAspectRatio: true,
     scales: {
      yAxes: [
        {

         scaleLabel: {
            display:     true,
            labelString: 'Total Price'
            
            },
          ticks: {
            // maxTicksLimit: 4,
            fontStyle: 'normal',
            fontSize: 13,
            beginAtZero: true,
            callback: ( value ) => {
              return `$${value.toLocaleString()}`;
            },
            max: 6000

            // callback: ( value ) => {
            //   return this.numberPipe.transform(value);
            // },
          },
          gridLines: {
            drawOnChartArea: false,
            // color: '#676A6C',
          }
        }],
      xAxes: [{
        ticks: {
          fontStyle: 'small',
          fontSize: 20,
          autoSkip: false,
          maxRotation:  window.innerWidth < 1100 ? 90 : 0,
          minRotation: window.innerWidth < 1100 ? 90 : 0,
     
        },
        gridLines: {
          drawOnChartArea: false,
          // color: '#676A6C',
          lineWidth: 1.5
        }
      }]
    },
    hover: {
      mode: 'nearest',
      intersect: true
    },

  };


}

/*
import { Component } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
 
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
 
export class PieChartComponent {
 
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['SciFi'], ['Drama'], 'Comedy'];
  public pieChartData: SingleDataSet = [30, 50, 20];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
 
  constructor() {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
 
}
*/