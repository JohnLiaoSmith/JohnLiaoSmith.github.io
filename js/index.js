document.addEventListener("DOMContentLoaded", function () {
    let tableBody = document.getElementById("table-body");

    fetch('assets/locations.json')
        .then((res) => res.text())
        .then((text) => {
            let locationArray = JSON.parse(text);
            console.log(locationArray);

            locationArray.sort((a, b) => {
                let x = a["distance"];
                let y = b["distance"];
                if (x.split("/")[0] !== undefined) {
                    x = x.split("/")[0];
                }
                if (y.split("/")[0] !== undefined) {
                    y = y.split("/")[0];
                }
                // Convert to Number type for correct comparison
                x = Number(x);
                y = Number(y);
                return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            });

            for (let i = 0; i < locationArray.length; i++) {
                // create a table row element
                let tableRow = document.createElement('tr');

                // create a table cell (td) element
                let tdName = document.createElement('td');
                // listItem.classList.add('listItem');
                // add content to table cell element
                tdName.innerHTML = locationArray[i]["name"];
                // append table cell to table row
                tableRow.appendChild(tdName);

                // create a table cell (td) element
                let tdPax = document.createElement('td');
                // listItem.classList.add('listItem');
                // add content to table cell element
                tdPax.innerHTML = locationArray[i]["pax"];
                // append table cell to table row
                tableRow.appendChild(tdPax);

                // create a table cell (td) element
                let tdLocation = document.createElement('td');
                // listItem.classList.add('listItem');
                // add content to table cell element
                tdLocation.innerHTML = locationArray[i]["location"];
                // append table cell to table row
                tableRow.appendChild(tdLocation);

                // create a table cell (td) element
                let tdDistance = document.createElement('td');
                // listItem.classList.add('listItem');
                // add content to table cell element
                tdDistance.innerHTML = locationArray[i]["distance"];
                // append table cell to table row
                tableRow.appendChild(tdDistance);

                // append table row to table body
                tableBody.appendChild(tableRow);

                document.getElementById("random-button").addEventListener("click", showDialog);
            }
        })
        .catch((e) => console.error(e));
});

function showDialog() {

}