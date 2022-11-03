import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { TableComponent } from './components/table/table.component';
import { DoughnutComponent } from './components/doughnut/doughnut.component';
import { AreachartComponent } from './components/area-chart/area-chart.component';

@NgModule({
  imports: [BrowserModule, FormsModule, ChartsModule, NgxPaginationModule],
  declarations: [
    AppComponent,
    TableComponent,
    DoughnutComponent,
    AreachartComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
