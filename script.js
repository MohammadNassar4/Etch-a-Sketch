let container = document.querySelector(".container");
let sketch = document.querySelector(".sketch");
// A function that creates a grid of size of the variable size
function createGrid(size) {
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add("grid-item");
        sketch.appendChild(div);
    }
}

function addHoverEffect() {
    let gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "black";
        });
    });
}

