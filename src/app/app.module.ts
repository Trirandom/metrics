import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TableComponent } from './component/table/table.component';
import { HeaderComponent } from './component/header/header.component';
import { MetricsService } from './service/metrics.service';
import { HttpClientModule } from '@angular/common/http';
import { SortPipe } from './pipe/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    HeaderComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    MetricsService,
    SortPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
