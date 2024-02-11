import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ChartsModule } from 'ng2-charts';
import { TableComponent } from './components/table/table.component';
import { AreachartComponent } from './components/area-chart/area-chart.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    NgxPaginationModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, TableComponent, AreachartComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
