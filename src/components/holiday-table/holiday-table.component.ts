import { Component, OnDestroy, OnInit } from '@angular/core';

import 'rxjs/add/operator/map';
import { HolidayData } from '../../models/holiday_data.interface';

@Component({
  selector: 'holiday-table',
  templateUrl: 'holiday-table.component.html'
})
export class HolidayTableComponent implements OnInit {

  tOptions = {};
  holidayData: HolidayData[] = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}