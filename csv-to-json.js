function convertDataToJSON(sheetName, startRow, startColumn, numRows, numColumns, email, identity) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(sheetName);
  
  // Check if the sheet exists
  if (!sheet) {
    throw new Error("Sheet with name '" + sheetName + "' not found.");
  }
  
  // Check if all parameters are provided
  if (!startRow || !startColumn || !numRows || !numColumns) {
    throw new Error("Missing parameters.");
  }
  
  var data = sheet.getRange(startRow, startColumn, numRows, numColumns).getValues();
  
  // Initialize array to store JSON objects
  var jsonArray = [];
  
  // Iterate through rows starting from the second row
  for (var i = 0; i < data.length; i++) {
    var row = data[i];
    // Initialize object for current row
    var jsonObject = {};
    
    // Populate object with specific keys and values
    jsonObject["CouponCode"] = row[0] || ""; // Assume the first column is CouponCode
    jsonObject["Email"] = row[1] || ""; // Assume the second column is Email
    jsonObject["Identity"] = row[2] || ""; // Assume the third column is Identity
    
    // Filter out rows with empty values for CouponCode, Email, or Identity
    if (jsonObject["CouponCode"] !== "" || jsonObject["Email"] !== "" || jsonObject["Identity"] !== "") {
      // Filter data based on email and/or identity if provided
      if ((!email || jsonObject["Email"] === email) && (!identity || jsonObject["Identity"] === identity)) {
        jsonArray.push(jsonObject);
      }
    }
  }
  
  // Return JSON array
  return jsonArray;
}


// Web service endpoint to access the converted data
function doGet(e) {
  // Retrieve parameters from the request URL
  var sheetName = e.parameter.sheetName;
  var startRow = parseInt(e.parameter.startRow);
  var startColumn = parseInt(e.parameter.startColumn);
  var numRows = parseInt(e.parameter.numRows);
  var numColumns = parseInt(e.parameter.numColumns);
  var email = e.parameter.email;
  var identity = e.parameter.identity;
  
  try {
    var jsonArray = convertDataToJSON(sheetName, startRow, startColumn, numRows, numColumns, email, identity);
    // Set content type to JSON
    return ContentService.createTextOutput(JSON.stringify(jsonArray)).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    // Return error message
    return ContentService.createTextOutput(JSON.stringify({ error: error.message })).setMimeType(ContentService.MimeType.JSON);
  }
}
