let container = document.querySelector(".container");
let sketch = document.querySelector(".sketch");
// A function that creates a grid of size of the variable size
function createGrid(size) {
    sketch.innerHTML = "";
    sketch.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    sketch.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    for(let i = 0; i < size * size; i++) {
        let div = document.createElement('div');
        div.classList.add("grid-item");
        sketch.appendChild(div);
    }
    addHoverEffect();
}
// A function that adds a hover effect 
function addHoverEffect() {
    let gridItem = document.querySelectorAll(".grid-item");
    gridItem.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.backgroundColor = "black";
        });
    });
}

let reset = document.createElement("button");
reset.textContent = "Reset";
reset.style.cssText = "margin-top: 20px; font-size: 20px; letter-spacing:1px; padding: 6px; border-radius: 20px; width: 100px; border:0px; background-color: #5c5470; font-family: 'Bungee Spice'; cursor: pointer;"
container.appendChild(reset);
reset.addEventListener("click", () => {
    let size = prompt("Enter new grid size:");
    size = parseInt(size);
    if (size && size > 0) {
        createGrid(size);
    } else {
        alert("Invalid size");
    }
});

createGrid(16);