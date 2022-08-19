Teal Green Holidays Code Exercise

This project consists of one webpage to display a table to the user indicating people who have been on holiday for a particular year. The data is mock data based on data produced via the Apteco github details.

In order to run the application, please run the command 'ng serve'

Initial implementation in previous commits (before the commit where I changed the README) was to make an initial page (utilising Angular creation of applications and components) and display a table with the relevant data (styling was not a priority).
Further commits and their reasons will be listed below:
- Page initial styling, removal of unnecessary Angular code and table styling
- Table implementation and final table functionality with basic sorting
- Reset sorting added as well as tests and reworking of code

Problems:
- Formatting the data within the table (i.e. within HTML) - done using string split() and ngFor statements, may need to rework this if this causes issues with sorting or filtering
- Removing the ! from TOTAL - simple string replace
- Sorting the column data - Added row headers into row lists, sorted then formatted
- Sorting the row data - Added column headers as first row and transposed, sorted, then transposed again
- Reset sorting - Refreshed page
- Filtering the data - No time to work on unfortunately

Note: Sorting and filtering were my aims to complete - ran out of time on filtering due to getting sorting well done (tests, reset sorting, sort labels, etc). Usually on my current project at work sorting and filtering are done by various backend services, we just send the necessary filter/sort keys, so it was good to get some experience with this.