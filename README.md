Teal Green Holidays Code Exercise

This project consists of one webpage to display a table to the user indicating people who have been on holiday for a particular year. The data is mock data based on data produced via the Apteco github details.

In order to run the application, please run the command 'ng serve'

Initial implementation in previous commits (before the commit where I changed the README) was to make an initial page (utilising Angular creation of applications and components) and display a table with the relevant data (styling was not a priority).
Further commits and their reasons will be listed below:
- Page initial styling, removal of unnecessary Angular code and table styling

Problems:
- Formatting the data within the table (i.e. within HTML) - done using string split() and ngFor statements, may need to rework this if this causes issues with sorting or filtering
- Removing the ! from TOTAL - 
- Sorting the data
- Filtering the data
With the two previous I will use dropdowns in order to save further time
Note: Since I need credentials in order to contact API, I have decided to focus on the other two (if I get more time after correspondence I could work on this as well)