const container = document.querySelector("#container");
const fragment = document.createDocumentFragment();
let cellCount = 100;
for(let i = 0; i<cellCount;i++){
    const div = document.createElement("div");
    div.classList.add("pixel-grid");
    div.setAttribute("id",`column${i+1}`);
    fragment.appendChild(div);
}
container.appendChild(fragment);
for(let i = 0;i<cellCount*cellCount;i++){
    const div = document.createElement("div");
    div.classList.add("cell");
    const columnNumber = i%cellCount;
    const column = document.querySelector(`#column${columnNumber+1}`);
    column.appendChild(div);
}

let isMouseDown = false;

document.addEventListener("mousedown", ()=>isMouseDown=true);
document.addEventListener("mouseup", ()=>isMouseDown=false);

// Use delegation for clicks and hovers
container.addEventListener("mousedown", (e) => {
  if (e.target.classList.contains("cell")) {
    e.target.classList.add("active");
  }
});

container.addEventListener("mousemove", (e) => {
  if (isMouseDown && e.target.classList.contains("cell")) {
    e.target.classList.add("active");
  }
});