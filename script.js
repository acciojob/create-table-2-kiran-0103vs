function createTable() {
    //Write your code here
	const rows = prompt("Input number of rows");
    // Convert user input to an integer
    const rn = parseInt(rows, 10);

    // Prompt user for the number of columns
    const columns = prompt("Input number of columns");
    // Convert user input to an integer
    const cn = parseInt(columns, 10);

    // Get the table element by its ID
    const table = document.getElementById("myTable");

    // Clear any existing content in the table
    table.innerHTML = "";

    // Create rows and cells based on user input
    for (let i = 0; i < rn; i++) {
        // Insert a new row
        const row = table.insertRow();

        for (let j = 0; j < cn; j++) {
            // Insert a new cell in the row
            const cell = row.insertCell();
            
            // Set the cell text to "Row-i Column-j"
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
  
}
