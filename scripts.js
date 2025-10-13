const container = document.querySelector("#container");
const gridSizeInput = document.querySelector("input#gridRange");

//initial grid call for 16x16
gridMaker();

//set grid size 
gridSizeInput.addEventListener("input", ()=>{
  container.replaceChildren(); 
  gridMaker();
  document.querySelector("label.gridRange").textContent=`GRID: ${gridSizeInput.value}x${gridSizeInput.value}`
});

//grid making fucntion
function gridMaker(){
  //fragment buffer for optimization
  const fragment = document.createDocumentFragment();
  const cellCount = parseInt(gridSizeInput.value);

  for (let i = 0; i < cellCount * cellCount; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    fragment.appendChild(div);
  }

  container.appendChild(fragment);
  //segment each cell for grid
  container.querySelectorAll(".cell").forEach(cell => {
    cell.style.flex = `1 0 ${100 / cellCount}%`;
  });
}

//prevent dragging of square divs
container.addEventListener("dragstart", (e) => e.preventDefault());

// Use delegation for clicks and hovers to "draw"
container.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.classList.add("active");
  }
});
container.addEventListener("mousemove", (e) => {
  if (e.buttons === 1 && e.target.classList.contains("cell")) {
    e.target.classList.add("active");
  }
});