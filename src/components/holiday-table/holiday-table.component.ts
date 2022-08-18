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
  private fullRows: string[][];
  private currentRowSort: string;
  private currentColSort: string;


  constructor() { }

  ngOnInit(): void {
    this.columnHeaders = this.holidayData.dimensionResults[0].headerDescriptions.replace('iTOTAL', 'Total').split('\t');
    this.fullRows = this.holidayData.measureResults[0].rows.map(row => row.split('\t'));
    this.rowHeaders = this.holidayData.dimensionResults[1].headerDescriptions.replace('iTOTAL', 'Total').split('\t');
    for (let i = 0; i < this.rowHeaders.length; i++) {
      this.rows.push({rowHeader: this.rowHeaders[i], rowData: this.fullRows[i]});
    }
  }

  public onRowSortHandler(index: string): void {
    this.fullRows.unshift(this.columnHeaders);
    let columns = this.fullRows[0].map((_, colIndex) => this.fullRows.map(row => row[colIndex]));
    
    if (this.currentColSort === index) {
      columns = columns.sort(function(a,b){return parseInt(a[index+1]) < parseInt(b[index+1]) ? 1 : -1; });
      this.currentColSort = null;
    } else {
      columns = columns.sort(function(a,b){return parseInt(a[index+1]) > parseInt(b[index+1]) ? 1 : -1; });
      this.currentColSort = index;
    }
    this.rows = [];
    this.columnHeaders = [];
    for (let i = 0; i < columns.length; i++) {
      //const rowHeader = this.fullRows[i][0];
      this.columnHeaders.push(columns[i][0]);
    }
    this.fullRows = columns[0].map((_, colIndex) => columns.map(row => row[colIndex]));
    this.fullRows.shift();
    for (let i = 0; i < this.fullRows.length; i++) {
      //const rowHeader = this.fullRows[i][0];
      this.rows.push({rowHeader: this.rowHeaders[i], rowData: this.fullRows[i]});
    }
  }

  public onColumnSortHandler(index: string): void {
    for (let i = 0; i < this.rowHeaders.length; i++) {
      this.fullRows[i].unshift(this.rowHeaders[i]);
    }
    if (this.currentRowSort === index) {
      this.fullRows = this.fullRows.sort(function(a,b){return parseInt(a[index+1]) < parseInt(b[index+1]) ? 1 : -1; });
      this.currentRowSort = null;
    } else {
      this.fullRows = this.fullRows.sort(function(a,b){return parseInt(a[index+1]) > parseInt(b[index+1]) ? 1 : -1; });
      this.currentRowSort = index;
    }
    this.rows = [];
    this.rowHeaders = [];
    for (let i = 0; i < this.fullRows.length; i++) {
      //const rowHeader = this.fullRows[i][0];
      this.rows.push({rowHeader: this.fullRows[i][0], rowData: this.fullRows[i]});
      this.rowHeaders.push(this.fullRows[i][0]);
      this.fullRows[i].shift();
    }
  }

}