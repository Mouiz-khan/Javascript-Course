// RemoveChild ky liye hmesha parent ko select krna hota hai taky ussy baki sary elements access krskein easily !!

let parent = document.getElementById("me");
console.log(parent);
let remove = parent.firstElementChild;
parent.removeChild(remove);


// document.body.removeChild(parent);