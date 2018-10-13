function f() {

    const CELL_NUM = 10;
    const DESK_SIZE = '512px';
    let newTable = document.createElement("table");
    let newTBody = document.createElement("tbody");

    // creating table
    let counter = 0;
    for (let i = 0; i < CELL_NUM; i++) {
        let tr = document.createElement("tr");

        for (let j = 0; j < CELL_NUM; j++) {
            let td = document.createElement("td");
            td.innerHTML = "<td></td>";
            if( i > 0 && i < 9 && j > 0 &&  j < 9) {
                if(counter % 2 != 0) {
                    j%2 != 0  ? td.className = 'white' : td.className = 'black';
                }
                else {
                    j %2 == 0  ? td.className = 'white' : td.className = 'black';
                }
            }
            tr.appendChild(td);
        }
        counter++;
        newTBody.appendChild(tr);
    }

    // collecting in one object
    newTable.appendChild(newTBody);
    document.body.appendChild(newTable);

    // array of all cells
    let cells = document.getElementsByTagName('td');

    // rows numbers on axis
    for (let i = 10, j = 8; i < cells.length-10; i += 10, j--) {
        cells[i].innerText = j;
    }
    for (let i = 19, j = 8; i < cells.length-10; i += 10, j--) {
        cells[i].innerText = j;
        cells[i].style.transform = "rotate(180deg)";
    }

    // cols numbers
    cells[1].innerText = 'A';
    cells[91].innerText = 'A';
    cells[2].innerText = 'B';
    cells[92].innerText = 'B';
    cells[3].innerText = 'C';
    cells[93].innerText = 'C';
    cells[4].innerText = 'D';
    cells[94].innerText = 'D';
    cells[5].innerText = 'E';
    cells[95].innerText = 'E';
    cells[6].innerText = 'F';
    cells[96].innerText = 'F';
    cells[7].innerText = 'G';
    cells[97].innerText = 'G';
    cells[8].innerText = 'H';
    cells[98].innerText = 'H';

    // rotation
    for (let i = 1; i < 9; i++) {
        cells[i].style.transform = "rotate(180deg)";
    }

    // corners - empty cells
    cells[0].innerText = "";
    cells[9].innerText = "";
    cells[90].innerText = "";
    cells[99].innerText = "";


    // style of table
    newTable.style.borderCollapse = "collapse";
    newTable.style.border = "1px solid #5B5D62";
    newTable.style.width = DESK_SIZE;
    newTable.style.height = DESK_SIZE;
    newTable.style.tableLayout = "fixed";

    // colours of cells
    let cellsWhite = document.getElementsByClassName("white");
    for (let i = 0; i < cellsWhite.length; i++) {
        cellsWhite[i].style.background = "#FFD073";
    }

    let cellsBlack = document.getElementsByClassName("black");
    for (let i = 0; i < cellsBlack.length; i++) {
        cellsBlack[i].style.background = "#06266F";
    }

    for (let i = 0; i < cells.length; i++) {
        cells[i].style.verticalAlign = 'center';
        cells[i].style.textAlign = 'center';
    }


    // figures places
        var figures = {
            pawnWhite: [21, 22, 23, 24, 25, 26, 27, 28],
            pawnBlack: [71, 72, 73, 74, 75, 76, 77, 78],
            rookWhite: [11, 18],
            rookBlack: [81, 88],
            knightWhite: [12, 17],
            knightBlack: [82, 87],
            elephantWhite: [13, 16],
            elephantBlack: [83, 86],
            ferzWhite: 14,
            ferzBlack: 84,
            kingWhite: 15,
            kingBlack: 85,
    }
    // letters coding
    for (let i = 0 ; i <figures.pawnWhite.length; i++) {
        cells[figures.pawnWhite[i]].innerText = "П";
        cells[figures.pawnWhite[i]].style.color = 'white';
        cells[figures.pawnWhite[i]].style.transform = "rotate(180deg)";
    }
    for (let i = 0 ; i <figures.pawnBlack.length; i++) {
        cells[figures.pawnBlack[i]].innerText = "П";
        cells[figures.pawnBlack[i]].style.color = 'black';
    }
    for (let i = 0 ; i <figures.rookWhite.length; i++) {
        cells[figures.rookWhite[i]].innerText = "Л";
        cells[figures.rookWhite[i]].style.color = 'white';
        cells[figures.rookWhite[i]].style.transform = "rotate(180deg)";
    }
    for (let i = 0 ; i <figures.rookBlack.length; i++) {
        cells[figures.rookBlack[i]].innerText = "Л";
        cells[figures.rookBlack[i]].style.color = 'black';
    }
    for (let i = 0 ; i <figures.knightWhite.length; i++) {
        cells[figures.knightWhite[i]].innerText = "К";
        cells[figures.knightWhite[i]].style.color = 'white';
        cells[figures.knightWhite[i]].style.transform = "rotate(180deg)";
    }
    for (let i = 0 ; i <figures.knightBlack.length; i++) {
        cells[figures.knightBlack[i]].innerText = "К";
        cells[figures.knightBlack[i]].style.color = 'black';
    }
    for (let i = 0 ; i <figures.elephantWhite.length; i++) {
        cells[figures.elephantWhite[i]].innerText = "C";
        cells[figures.elephantWhite[i]].style.color = 'white';
        cells[figures.elephantWhite[i]].style.transform = "rotate(180deg)";
    }
    for (let i = 0 ; i <figures.elephantBlack.length; i++) {
        cells[figures.elephantBlack[i]].innerText = "C";
        cells[figures.elephantBlack[i]].style.color = 'black';
    }

    cells[figures.ferzWhite].innerText = 'Ф';
    cells[figures.ferzWhite].style.color = 'white';
    cells[figures.ferzWhite].style.transform = "rotate(180deg)";

    cells[figures.ferzBlack].innerText = 'Ф';
    cells[figures.ferzBlack].style.color = 'black';

    cells[figures.kingWhite].innerText = 'К';
    cells[figures.kingWhite].style.color = 'white';
    cells[figures.kingWhite].style.transform = "rotate(180deg)";

    cells[figures.kingBlack].innerText = 'К';
    cells[figures.kingBlack].style.color = 'black';


    var symbols = {
        pawnWhite: '&#9817',
        pawnBlack: '&#9823',
        rookWhite: '&#9814',
        rookBlack: '&#9820',
        knightWhite: '&#9816',
        knightBlack: '&#9822',
        elephantWhite: '&#9815',
        elephantBlack: '&#9821',
        ferzWhite: '&#9813',
        ferzBlack: '&#9819',
        kingWhite: '&#9812',
        kingBlack: '&#9818',
    }


    // symbols coding
    for (let i = 0 ; i <figures.pawnWhite.length; i++) {
        cells[figures.pawnWhite[i]].innerHTML = symbols.pawnWhite;
        cells[figures.pawnWhite[i]].style.color = 'white';
        cells[figures.pawnWhite[i]].style.transform = "rotate(180deg)";
    }
    for (let i = 0 ; i <figures.pawnBlack.length; i++) {
        cells[figures.pawnBlack[i]].innerHTML = symbols.pawnBlack;
        cells[figures.pawnBlack[i]].style.color = 'black';
    }
    for (let i = 0 ; i <figures.rookWhite.length; i++) {
        cells[figures.rookWhite[i]].innerHTML = symbols.rookWhite;
        cells[figures.rookWhite[i]].style.color = 'white';
        cells[figures.rookWhite[i]].style.transform = "rotate(180deg)";
    }
    for (let i = 0 ; i <figures.rookBlack.length; i++) {
        cells[figures.rookBlack[i]].innerHTML = symbols.rookBlack;
        cells[figures.rookBlack[i]].style.color = 'black';
    }
    for (let i = 0 ; i <figures.knightWhite.length; i++) {
        cells[figures.knightWhite[i]].innerHTML = symbols.knightWhite;
        cells[figures.knightWhite[i]].style.color = 'white';
        cells[figures.knightWhite[i]].style.transform = "rotate(180deg)";
    }
    for (let i = 0 ; i <figures.knightBlack.length; i++) {
        cells[figures.knightBlack[i]].innerHTML = symbols.knightBlack;
        cells[figures.knightBlack[i]].style.color = 'black';
    }
    for (let i = 0 ; i <figures.elephantWhite.length; i++) {
        cells[figures.elephantWhite[i]].innerHTML = symbols.elephantWhite;
        cells[figures.elephantWhite[i]].style.color = 'white';
        cells[figures.elephantWhite[i]].style.transform = "rotate(180deg)";
    }
    for (let i = 0 ; i <figures.elephantBlack.length; i++) {
        cells[figures.elephantBlack[i]].innerHTML = symbols.elephantBlack;
        cells[figures.elephantBlack[i]].style.color = 'black';
    }

    cells[figures.ferzWhite].innerHTML = symbols.ferzWhite;
    cells[figures.ferzWhite].style.color = 'white';
    cells[figures.ferzWhite].style.transform = "rotate(180deg)";

    cells[figures.ferzBlack].innerHTML = symbols.ferzBlack;
    cells[figures.ferzBlack].style.color = 'black';

    cells[figures.kingWhite].innerHTML = symbols.kingWhite;
    cells[figures.kingWhite].style.color = 'white';
    cells[figures.kingWhite].style.transform = "rotate(180deg)";

    cells[figures.kingBlack].innerHTML = symbols.ferzBlack;
    cells[figures.kingBlack].style.color = 'black';




}
Window.onload = f();
