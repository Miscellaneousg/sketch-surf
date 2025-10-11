const container = document.querySelector("#container");
const fragment = document.createDocumentFragment();
let cellCount = 16;
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