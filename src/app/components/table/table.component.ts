import { Component, EventEmitter, Output, VERSION } from '@angular/core';
import * as data from '../../../data.json';

@Component({
  selector: 'table-app',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  data: any = data;
  dataArray: any = [];
  p: any;
  currentElement: object = {};
  @Output() tableRowClick = new EventEmitter<MouseEvent>();

  constructor() {
    for (let key in data.muscleCars) {
      if (data.muscleCars.hasOwnProperty(key)) {
        this.dataArray.push(data.muscleCars[key]);
      }
    }
    this.currentElement = this.dataArray[0];
  }

  clickHandler(event: MouseEvent) {
    this.currentElement = event;
    this.tableRowClick.emit(event);
  }
}
