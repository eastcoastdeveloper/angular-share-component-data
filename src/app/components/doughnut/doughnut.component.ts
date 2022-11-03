import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'doughnut',
  templateUrl: './doughnut.component.html',
  styleUrls: ['./doughnut.component.scss'],
})
export class DoughnutComponent {
  chart: any;
  labels: any = ['Red', 'Blue', 'Yellow'];
  @ViewChild('dChart', { static: false }) dChart: ElementRef;

  ngAfterViewInit() {
    var myChart = new Chart(this.dChart.nativeElement, {
      type: 'doughnut',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
            ],
            hoverOffset: 4,
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
          position: 'top',
        },
        layout: {
          padding: {
            top: 15,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  } // End ngAfterViewInit
}
