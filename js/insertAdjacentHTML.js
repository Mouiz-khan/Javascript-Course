// insertAdjacentHtml() ek powerful method hai bcz ismn humein alg sy sb krnyy ki zroorat nh h like pehly tag create kro phr text dalo phr append kro ismn yeh sb ek hi line mn hojata hai lkn yeh bs isi mn kam krta hai baki sbk liye humein pehly jesy hi kam krna prega !!

// aur isssy hum bs 4positions pr add krskty hnelement !!


let selectedElement = document.getElementById("main");

let newElement = "<h1>Farzeen Ali</h1>"; // yhn element create append add text sb ek sath hojeyega

// selectedElement.insertAdjacentHTML("beforebegin", newElement);
// selectedElement.insertAdjacentHTML("afterbegin", newElement);
// selectedElement.insertAdjacentHTML("beforeend", newElement);
selectedElement.insertAdjacentHTML("afterend", newElement);