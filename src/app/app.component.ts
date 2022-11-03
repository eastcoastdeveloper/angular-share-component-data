import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  doughnut: boolean = false;
  targetObject: any;
  carMake: string;
  year: string;
  model: string;
  fullCar: string = '1967 Pontiac GTO';

  rowSelection(event: any) {
    this.targetObject = event;
    if (this.targetObject != undefined) {
      this.carMake = this.targetObject.make;
      this.year = this.targetObject.year;
      this.model = this.targetObject.model;
    }
    this.fullCar = this.year + ' ' + this.carMake + ' ' + this.model;
  }
}
