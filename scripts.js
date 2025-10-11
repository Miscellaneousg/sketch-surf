const container = document.querySelector("#container");
const fragment = document.createDocumentFragment();
for(let i = 0; i<4;i++){
    const div = document.createElement("div")
    div.classList.add("pixel");
    fragment.appendChild(div);
}
container.appendChild(fragment);