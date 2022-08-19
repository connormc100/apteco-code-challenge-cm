import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
