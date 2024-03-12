# csv-to-json-with-search
**CSV to JSON Converter with Search Functionality**
This script provides a convenient way to convert data from a Google Sheets CSV file into JSON format while also offering search functionality based on email and/or identity fields.

**Usage**
**Prerequisites**
• This script is designed to work with Google Sheets.
• You must have a Google account.
• Enable Google Apps Script in your Google Sheets.

**Steps**

**Setup Google Sheets:**
• Ensure your data is organized in a CSV format within a Google Sheets document.
• Make sure your CSV contains at least three columns: Email, Identity, and CouponCode.

**Install Script:**
• Copy the provided script into your Google Sheets script editor.
• Save the script.

**Configure Parameters:**
• Modify the parameters within the script to match your data structure and desired search criteria.
• Parameters include sheetName, startRow, startColumn, numRows, numColumns, email, and identity.

**Run the Script:**
• Execute the doGet() function to access the converted JSON data.
• Access the script via a web service endpoint to retrieve the JSON data.

**Retrieve Data:**
• Access the JSON data by sending GET requests to the web service endpoint.
• Include parameters in the request URL as needed for filtering (sheetName, startRow, startColumn, numRows, numColumns, email, identity).

**Handle Errors:**
• Ensure to handle errors gracefully by checking the response for potential error messages.

**Functions**
• convertDataToJSON(sheetName, startRow, startColumn, numRows, numColumns, email, identity): Converts CSV data to JSON format with optional filtering based on email and/or identity.
• doGet(e): Web service endpoint to access the converted data via GET requests.
