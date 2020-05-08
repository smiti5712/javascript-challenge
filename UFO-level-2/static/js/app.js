// from data.js
var tableData = data;

// using d3 select tbody, which will be used to append rows and data
var tbody = d3.select("tbody");

// function that takes an array as InputDeviceInfo, reads each entry in the array and appends row and data into the tbody to get the table created
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

    // capture the user input value for city
    var CityInput = d3.select("#city");
    var CityValue = CityInput.property("value");
    console.log(CityValue)

    // capture the user input value for state
    var StateInput = d3.select("#state");
    var StateValue = StateInput.property("value");
    console.log(StateValue)

    // capture the user input value for country
    var CountryInput = d3.select("#country");
    var CountryValue = CountryInput.property("value");
    console.log(CountryValue)

    // capture the user input value for shape
    var ShapeInput = d3.select("#shape");
    var ShapeValue = ShapeInput.property("value");
    console.log(ShapeValue)


    // filter function to return filtered data from the complete table based on user Input on single filter criteria or multiple filter criterias
    var filtered_data = tableData.filter(function(data) {
        return (data.datetime === dateValue || dateValue.length == 0) &&
            (data.city === CityValue || CityValue.length == 0) &&
            (data.state === StateValue || StateValue.length == 0) &&
            (data.country === CountryValue || CountryValue.length == 0) &&
            (data.shape === ShapeValue || ShapeValue.length == 0)
    })

    console.log(filtered_data)


    // clearing the table body , so that the filtered data can be displayed
    tbody.html("");

    // if filtered data has records , then display that , else display "No data found for the selection criteria"
    if (filtered_data.length > 0) {
        datadisplay(filtered_data);
        console.log("Data displayed!!");
    } else {
        var row = tbody.append("tr");
        cell = row.append("td");
        cell.text("No data found for the selection criteria");
        console.log("No data found for the selection criteria");
    }

});