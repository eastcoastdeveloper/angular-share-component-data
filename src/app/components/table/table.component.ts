import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { take } from 'rxjs';

@Component({
  selector: 'table-app',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  dataArray: any = [];
  p: any;
  currentElement: object = {
    year: '',
    make: '',
    areaChartData: [1234],
    index: 0,
    model: '',
  };

  @Output() tableRowClick = new EventEmitter<MouseEvent>();

  constructor(private _http: HttpClient) {
    this._http
      .get('assets/data.json')
      .pipe(take(1))
      .subscribe({
        next: (val) => {
          this.dataArray = val;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => {
          console.log('finished');
        },
      });
    this.currentElement = this.dataArray[0];
  }

  clickHandler(event: MouseEvent) {
    this.currentElement = event;
    this.tableRowClick.emit(event);
  }
}
