const container = document.querySelector("#container");
const gridSizeInput = document.querySelector("input.grid-size");

//initial grid call for 16x16
gridMaker();

//set grid size 
gridSizeInput.addEventListener("input", ()=>{
  container.replaceChildren(); 
  gridMaker();
  document.querySelector("label.grid-size").textContent=`GRID: ${gridSizeInput.value}x${gridSizeInput.value}`
});

//grid making fucntion
function gridMaker(){
  //buffer for temporary storage for column nodes
  const fragment = document.createDocumentFragment();
  let cellCount = gridSizeInput.value;

  //create column nodes
  for(let i = 0; i<cellCount;i++){
      const div = document.createElement("div");
      div.classList.add("pixel-grid");
      div.setAttribute("id",`column${i+1}`);
      fragment.appendChild(div);
  }

  container.appendChild(fragment);

  //fill each column
  for(let i = 0;i<cellCount*cellCount;i++){
      const div = document.createElement("div");
      div.classList.add("cell");
      const columnNumber = i%cellCount;
      const column = document.querySelector(`#column${columnNumber+1}`);
      column.appendChild(div);
  }
};

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