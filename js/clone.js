let element = document.getElementById("items");
let cloneElement = element.cloneNode(true); // isk andr true ka mtlb hai ky element jo h usko usky child ky sath clone kro agr khali chorein ya false likhein tou wo srf element ko clone krega mgr usk children ko ignore krdega !!

cloneElement.id = "my-id";
console.log(cloneElement);

document.body.appendChild(cloneElement); // ab aeisy m pora element clone krein tou dono ki id same hai which is a problem so humein id change krni pregi !!



