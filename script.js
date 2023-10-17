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
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    let color = `rgb(${r}, ${g}, ${b})`;
    e.target.style.backgroundColor = color;
}

createGrid(16);