let list = document.getElementById("items");

let item = document.createElement("li");
item.textContent = "Item From DOM";

let position = list.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling;

list.insertBefore(item, position); // iska yhi syntax hai alg alg variables bnake hi krna prega direct li nh deskty insertbefore mn !!

// hw to add tag using insert before in body !!

// let element = document.body;  //parent selected

// let newElement = document.createElement("h1");
// newElement.textContent = "Computer";

// // element.appendChild(newElement)

// let list = document.getElementById('items');

// element.insertBefore(newElement, list);