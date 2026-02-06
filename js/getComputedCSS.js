let selectedElement = document.getElementById("main");

let styling = getComputedStyle(selectedElement);
// console.log(styling); // yeh sari default styling bh dega isiliye jo property check krni h wo dot lgakr deingy tou wo rgb color ki form mn asnwer dedega !!
console.log(styling.color);
// console.log(styling.backgroundColor);