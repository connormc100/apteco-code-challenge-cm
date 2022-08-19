import { Component, OnInit } from '@angular/core';

import { MOCK_TABLE } from '../../mock_data/mock-data';
import { HolidayData } from '../../models/holiday-data.interface';
import { Row } from '../../models/row.interface';

@Component({
  selector: 'app-holiday-table',
  templateUrl: 'holiday-table.component.html',
  styleUrls: ['holiday-table.component.css']
})
export class HolidayTableComponent implements OnInit {

  // Note: with filter I would have made this @Import property
  private holidayData: HolidayData = MOCK_TABLE;
  public columnHeaders: string[];
  public rowHeaders: string[];
  public rows: Row[] = [];
  public fullRows: string[][];
  public currentRowSort: string;
  public currentColSort: string;
  public descRowSort: string;
  public descColSort: string;


  constructor() { }

  ngOnInit(): void {
    this.setRowInfo();
    this.setRows();
  }

  public resetSorting(): void {
    // Not ideal way to reset sorting (as user sees refresh) but minimal time to set up
    window.location.reload();
  }

  public onRowSortHandler(index: string, header: string): void {
    // first add the column headers as a row
    this.fullRows.unshift(this.columnHeaders);
    // transpose the rows in order to make the sorting work for headers
    let columns = this.fullRows[0].map((_, colIndex) => this.fullRows.map(row => row[colIndex]));
    if (this.currentRowSort === header) {
      // sort descending and style descending
      columns = columns.sort((a, b) => parseInt( a[index + 1], 10 ) < parseInt( b[index + 1], 10 ) ? 1 : -1);
      this.currentRowSort = null;
      this.descRowSort = header;
    } else {
      // sort ascending and style ascending
      columns = columns.sort((a, b) => parseInt( a[index + 1], 10 ) > parseInt( b[index + 1], 10 ) ? 1 : -1);
      this.currentRowSort = header;
      this.descRowSort = null;
    }
    // empty table and column headers
    this.rows = [];
    this.columnHeaders = [];
    // add column headers in specified order
    for (let i = 0; i < columns.length; i++) {
      this.columnHeaders.push(columns[i][0]);
    }
    // transpose and remove first row (column headers)
    this.fullRows = columns[0].map((_, colIndex) => columns.map(row => row[colIndex]));
    this.fullRows.shift();
    this.setRows();
  }

  public onColumnSortHandler(index: string, header: string): void {
    // similar to row sorrt handler but add row headers via row without transposing
    for (let i = 0; i < this.rowHeaders.length; i++) {
      this.fullRows[i].unshift(this.rowHeaders[i]);
    }
    if (this.currentColSort === header) {
      this.fullRows = this.fullRows.sort((a, b) => parseInt( a[index + 1], 10 ) < parseInt( b[index + 1], 10 ) ? 1 : -1);
      this.currentColSort = null;
      this.descColSort = header;
    } else {
      this.fullRows = this.fullRows.sort((a, b) => parseInt( a[index + 1], 10 ) > parseInt( b[index + 1], 10 ) ? 1 : -1);
      this.currentColSort = header;
      this.descColSort = null;
    }
    this.rows = [];
    this.rowHeaders = [];
    for (let i = 0; i < this.fullRows.length; i++) {
      // add rows and headers and remove from fullRows within same loop
      this.rows.push({rowHeader: this.fullRows[i][0], rowData: this.fullRows[i]});
      this.rowHeaders.push(this.fullRows[i][0]);
      this.fullRows[i].shift();
    }
  }

  private setRowInfo(): void {
    // adding the headers and the formatted row information
    this.columnHeaders = this.holidayData.dimensionResults[0].headerDescriptions.replace('iTOTAL', 'Total').split('\t');
    this.rowHeaders = this.holidayData.dimensionResults[1].headerDescriptions.replace('iTOTAL', 'Total').split('\t');
    this.fullRows = this.holidayData.measureResults[0].rows.map(row => row.split('\t'));
  }

  private setRows(): void {
    // setting the rows up using the fullRows formatted data
    for (let i = 0; i < this.fullRows.length; i++) {
      this.rows.push({rowHeader: this.rowHeaders[i], rowData: this.fullRows[i]});
    }
  }

}
