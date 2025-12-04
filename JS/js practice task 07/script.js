let para = document.getElementById("para1");

let size = 16;
function changeBackground() {
    para.style.backgroundColor = "wheat";
}

function increaseSize() {
    size = size + 5;
    para.style.fontSize = size + "px";
}

function centerTxt() {
    para.style.textAlign = "center";
}

function resetStyle() {
    size = 16;
    para.style.backgroundColor = "";
    para.style.fontSize = "20px";
    para.style.textAlign = "left"
}
