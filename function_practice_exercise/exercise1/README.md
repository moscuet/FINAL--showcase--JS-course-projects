## Practice exercise on function
### Assignment: 

1. Create an index.html, and include a script.js upon pageload.

2.Content of the script.js should be wrapped within a self-executed anonymous function to avoid polluting, the page global scope3.

3. Add to the index.html a table element with 3 columns and 2 rows, first row is the header row that contains the table headings (studentNo, name, age), second row contains your own studentNo, name, and age.

4.Create a function name executeScript. Function executeScript should add a new row to the table that contains a test user studentNo, name, and age (maybe 123, test user name, 999) when called. Remember to invoke executeScript function.

5. Move the script.js injection to the header part of your index.html, is your code still working? 

Answer: code will not work because  executeScript function will be in invoked before html has been loaded. so table element isn't defoned yet for the function to invoke.

6. Update your code so that executeScript only gets invoked when the DOMContentLoaded event is detected. Is the testUser now getting added to the table? Why? 

Answer: Yes, test user has been added now. Reason is that this time executeScrip function invoked only after html loading has been completed. so executeScript function 