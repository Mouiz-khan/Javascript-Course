let element = document.getElementById("me");
let heading = document.createElement("h1");
let text = document.createTextNode("Javascript");
heading.appendChild(text);
element.appendChild(heading);

//how to add class and id
heading.className = "js course";
heading.id = "h_id";

//Append on body tag
// document.body.appendChild(heading);

// let element = document.getElementById("items");
// let listelement = document.createElement("li");
// listelement.textContent = "Computer";
// element.appendChild(listelement);
