import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HolidayTableComponent } from './holiday-table.component';


describe('HolidayTableComponent', () => {
  let component: HolidayTableComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      declarations: [
        HolidayTableComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(HolidayTableComponent);
    component = fixture.componentInstance;
    component.fullRows = [['3','2'],['4','3']];
    component.rowHeaders = ['2021', '2022'];
    component.columnHeaders = ['England', 'Scotland'];
    component.rows = [{rowHeader: '2021', rowData: ['3','2']}, {rowHeader: '2022', rowData: ['4','3']}]
  });

  it('should create the table', () => {
    expect(component).toBeTruthy();
  });

  it(`should sort columns correctly descending and ascending`, () => {
    component.onColumnSortHandler(null,'Scotland');
    expect(component.fullRows).toEqual([['3','2'],['4','3']]);
    expect(component.rows).toEqual([{rowHeader: '2021', rowData: ['3', '2']}, {rowHeader: '2022', rowData: ['4','3']}]);
    component.onColumnSortHandler('0','England');
    expect(component.fullRows).toEqual([['4','3'],['3','2']]);
    expect(component.rows).toEqual([{rowHeader: '2022', rowData: ['4', '3']}, {rowHeader: '2021', rowData: ['3','2']}]);
  });

  it(`should sort row correctly descending and ascending`, () => {
    component.onRowSortHandler(null,'2022');
    expect(component.fullRows).toEqual([['2','3'],['3','4']]);
    expect(component.rows).toEqual([{rowHeader: '2021', rowData: ['2','3']}, {rowHeader: '2022', rowData: ['3', '4']}]);
  });
});
