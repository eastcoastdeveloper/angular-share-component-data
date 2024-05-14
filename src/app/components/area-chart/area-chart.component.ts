import {
  Component,
  ElementRef,
  ViewChild,
  Input,
  SimpleChanges,
} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'area-chart',
  templateUrl: 'area-chart.component.html',
  styleUrls: ['area-chart.component.scss'],
})
export class AreachartComponent {
  @ViewChild('areaChart', { static: false }) areaChart: ElementRef;
  @Input() getObj: object;

  labels: any = ['1964', '1965', '1966', '1967'];
  chartData = [32450, 75352, 87550, 100000];
  myChart: any;

  ngAfterViewInit() {
    this.myChart = new Chart(this.areaChart.nativeElement, {
      type: 'line',
      data: {
        labels: this.labels,
        datasets: [
          {
            data: this.chartData,
            borderColor: ['#fcdb42'],
            backgroundColor: ['rgba(49,59,63,.75)'],
          },
        ],
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Units Sold',
        },
        legend: {
          display: false,
        },
        layout: {
          padding: {
            top: 15,
          },
        },
        scales: {},
      },
    });
  }

  ngOnChanges(changes: SimpleChanges) {

    let obj = this.getObj,
      formattedObj: object = {};

    for (let key in obj) {
      formattedObj[key] = obj[key];
      if (key === 'areaChartData') {
        this.myChart.config.data.datasets[0].data = obj[key];
        this.myChart.update();
      }
    }
  } // End ngOnChanges
}
