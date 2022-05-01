// import data from data.js
const tableData = data;

//reference HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data){
    // Clear any existing data
    tbody.html("");
    
    // Loop through each object in the data 
    // Append a row and cells for each value in the row
    data.forEach((dataRow)=> {
        // Append a row to the table body 
        let row = tbody.append("tr");

        // Loop through each field in the dataRow and add 
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val)=>{
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

function handleClick(){
    //Get Datatime  value from filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //Check to see if a date was entered and filter data
    // using that date
    if (date){
        // Apple filter to table data to only keep rows where
        //the datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    }

    //Rebuild the table using the filtered data
    // If no date entered, filteredData will just be the original tableData
    buildTable(filteredData);
}
// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

//Build the table when the page loads
buildTable(tableData);