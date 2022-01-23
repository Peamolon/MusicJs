function getTable() {
    table = document.getElementById("music-table")
    for (let j = 0; j < track_list.length; j++) {
        var row = document.createElement("tr");
        row.setAttribute("class", "music-table-tr")
        values = [
            track_list[j].name,
            track_list[j].artist,
            track_list[j].image
        ]
        for (let i = 0; i < 3; i++) {
            var cell = document.createElement("td");
            cell.setAttribute("class", "music-table-td")
            var cell_text = document.createTextNode(values[i]);
            cell.appendChild(cell_text);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
getTable()