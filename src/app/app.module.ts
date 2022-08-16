import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HolidayTableComponent } from 'src/components/holiday-table/holiday-table.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    HolidayTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
