const container = document.querySelector(".container");
const btnReset = document.querySelector("#resetBtn");
const btnDisp = document.querySelector("#dispBtn");

function _init() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            let element = document.createElement("div");
            element.className = "child";
            element.addEventListener("mouseover", e => {
                e.target.style.backgroundColor = "#333333";
            })
            container.appendChild(element);
        }
    }


}

_init();

function makeDisp(disposition) {
    container.innerHTML = "";
    for (let i = 0; i < disposition; i++) {
        for (let j = 0; j < disposition; j++) {
            let element = document.createElement("div");
            element.className = "child";
            let calcDispsize = 40 / disposition;
            element.style.width = `${calcDispsize}rem`;
            element.style.height = `${calcDispsize}rem`;
            element.addEventListener("mouseover", e => {
                e.target.style.backgroundColor = "#333333";
            })
            container.appendChild(element);
        }
    }
}





btnReset.addEventListener("click", () => {
    let childs = document.querySelectorAll(".child");
    childs.forEach(child => {
        child.style.backgroundColor = "white";
    });
});

btnDisp.addEventListener("click", () => {
    let result = prompt("Let's get a value");
    result = parseInt(result);
    makeDisp(result);
});

