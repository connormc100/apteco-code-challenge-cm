import { Component, OnDestroy, OnInit } from '@angular/core';
import { Row } from 'src/models/row.interface';

import { MOCK_TABLE } from '../../mock_data/mock-data';
import { HolidayData } from '../../models/holiday-data.interface';

@Component({
  selector: 'holiday-table',
  templateUrl: 'holiday-table.component.html',
  styleUrls: ['holiday-table.component.css']
})
export class HolidayTableComponent implements OnInit {

  tOptions = {};
  private holidayData: HolidayData = MOCK_TABLE;
  public columnHeaders: string[]; 
  public rowHeaders: string[];
  public rows: Row[] = [];

  constructor() { }

  ngOnInit(): void {
    this.columnHeaders = this.holidayData.dimensionResults[0].headerDescriptions.replace('iTOTAL', 'Total').split('\t');
    this.rowHeaders = this.holidayData.dimensionResults[1].headerDescriptions.replace('iTOTAL', 'Total').split('\t');
    const returnedRows = this.holidayData.measureResults[0].rows.map(row => row.split('\t'));
    for (let i = 1; i < returnedRows.length; i++) {
      this.rows.push({rowHeader: this.rowHeaders[i], rowData: returnedRows[i]})
    }
    console.log(this.rows);
  }

}