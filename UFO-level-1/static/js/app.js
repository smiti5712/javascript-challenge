// from data.js
var tableData = data;

// using d3 select tbody, which will be used to append rows and data
var tbody = d3.select("tbody");

// function that takes an array as Input, reads each entry in the array and appends row and data into the tbody to get the table created
function datadisplay(InputArray) {
    InputArray.forEach(record => {
        var row = tbody.append("tr");
        Object.entries(record).forEach(([key, value]) => {
            cell = row.append("td");
            cell.text(value);
        })
    });
}

// initial function call for the complete table data to be displayed when the web page loads
datadisplay(tableData);

// using d3 select filter button , which will be used for event handlers
var button = d3.select("#filter-btn");

// event handler for button on click
button.on("click", function() {

    // capture the user input value for date
    var DateInput = d3.select("#datetime");
    var dateValue = DateInput.property("value");
    console.log(dateValue)

    // filter function to return filtered data from the complete table based on user Input, if user does not input a date and clicks on filter button, data for the complete table will be displayed
    var filteredDate = tableData.filter(data => data.datetime === dateValue || dateValue.length == 0);

    console.log(filteredDate)

    // clearing the table body , so that the filtered data can be displayed
    tbody.html("");

    // if filtered data has records , then display that , else display "No data found for the selection criteria"
    if (filteredDate.length > 0) {
        datadisplay(filteredDate);
        console.log("Data displayed!!");
    } else {
        var row = tbody.append("tr");
        cell = row.append("td");
        cell.text("No data found for the date selected");
        console.log("No data found for the selection criteria");
    }

});