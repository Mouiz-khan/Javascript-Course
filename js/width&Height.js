let element = document.getElementById("box");

let width = element.offsetWidth; // it includes complete width with borders
// let width = element.clientWidth; // it includes complete width without borders
console.log(width);

let height = element.offsetHeight; // it includes complete height with borders
// let height = element.clientHeight; // it includes complete height without borders
console.log(height);