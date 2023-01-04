// import the data from data.js
const tableData = data;

// Reference the HTML table using d3 (Data-Driven Documents).
var tbody = d3.select("tbody");

// creating a new function with "data" as the argument. 
function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object(UFO sighting) in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      
      // create a variable that will append a row to the table body.
        // It tells JS to find the <tbody> tag within the HTML and add a table row ("tr").
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }
  // Filtering the table by date.
    // First create a variable to hold our unfiltered date data.
    // Then, create a variable to hold our filtered date data.
    function handleClick() {

      // Grab the datetime value from the filter
      // 1. telling D3 to look for the #datetime id in the HTML tags.
      // 2. grab that information and hold it in the "date" variable.
      let date = d3.select("#datetime").property("value");
      let filteredData = tableData;
    
       // Check to see if a date was entered and filter the
      // data using that date.
      if (date) {
        // Apply `filter` to the table data to only keep the
        // rows where the `datetime` value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
      }
    
       // Rebuild the table using the filtered data
      // @NOTE: If no date was entered, then filteredData will
      // just be the original tableData.
      buildTable(filteredData);
    }
    
    // Attach an event to listen for the form button
    d3.selectAll("#filter-btn").on("click", handleClick);
    
    // Build the table when the page loads
    buildTable(tableData);