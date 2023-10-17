const gridContainer = document.querySelector('#grid-container');
//CREATE 16x16 grid
function createGrid(n) {
    for (let i = 0; i<n; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row-div');
        for (let j = 0; j<n; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.setAttribute('class', 'square-div');
            squareDiv.addEventListener('mouseover', colorChange);
            rowDiv.appendChild(squareDiv);}
        gridContainer.appendChild(rowDiv);
    }
}

function colorChange(e) {
    e.target.style.backgroundColor = 'black';
}

createGrid(16);