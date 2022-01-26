function getTable() {
    table = document.getElementById("music-table")
    for (let j = 0; j < track_list.length; j++) {
        var row = document.createElement("tr");
        row.setAttribute("id", `music-table-tr-${j}`)
        row.setAttribute("class", "music-table-tr")
        row.setAttribute("onclick", `playSelectedTrack(${j})`);
        values = [
            track_list[j].name,
            track_list[j].artist,
            '3:34'
        ]
        createImage(row, j)
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

function createImage(row, i) {
    var cell = document.createElement("td");
    cell.setAttribute("class", "music-table-td-image")
    cell.setAttribute("id", `music-table-td-${i}`)
    cell.style.visibility = "hidden"
    var image = document.createElement("img")
    image.setAttribute("class", "music-table-td-image-img")
    image.src = "https://www.estereoincomparable.com/wp-content/uploads/sites/22/2021/07/55560b6aeed75acbcc8bd649c36cd35b.gif"
    image.width = "80"
    cell.appendChild(image)
    row.appendChild(cell)
}

function escribir(index_track) {
    console.log(`Èl index es ${index_track}`)
}

getTable()