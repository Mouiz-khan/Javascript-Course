let heading = document.getElementById("main");

//set name and value of an attribute
heading.setAttribute("class","heading-class");

//find the value of an attribute
// let value = heading.getAttribute("class"); // yhn yeh class ki value dedega ( heading-class)
// console.log(value);

//remove an attribute
// heading.removeAttribute("class");

//check attribute
let result = heading.hasAttribute("name");// agr exist krta hoga attribute to true else false
console.log(result);