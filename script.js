const gridContainer = document.querySelector('#grid-container');
const customGridBtn = document.querySelector('#custom-grid-btn');
customGridBtn.addEventListener('click', createGrid);
//CREATE GRID FUNCTION
function createGrid(n) {
    n = prompt("Enter a number", 16);
    gridContainer.innerHTML = '';
    if (n > 100) {
        alert("Grid overload. Try again.");
    } else {
        for (let i = 0; i<n; i++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row-div');
        for (let j = 0; j<n; j++) {
            const squareDiv = document.createElement('div');
            squareDiv.setAttribute('class', 'square-div');
            squareDiv.style.height = (960/n - 2) + "px";
            squareDiv.style.width = (960/n - 2) + "px";
            squareDiv.addEventListener('mouseover', colorChange);
            rowDiv.appendChild(squareDiv);}
        gridContainer.appendChild(rowDiv);}
    }
}
//CHANGE COLOR FUNCTION
// function colorChange(e) {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//     let color = `rgb(${r}, ${g}, ${b})`;
//     e.target.style.backgroundColor = color;
//     // e.target.style.filter += "brightness(80%)";
// }

//HSL COLOR GENERATOR FUNCTION
const colorChange = (e) => {
    const randomNumber = (min, max) => 
        Math.round(Math.random() * (max - min) + min);
    
    const {hue, saturation, lightness} = {
        hue: randomNumber(0, 360),
        saturation: randomNumber(0, 100),
        lightness: randomNumber(0, 100),
    };
    e.target.style.backgroundColor = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}