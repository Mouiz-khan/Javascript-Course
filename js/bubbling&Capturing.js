let divElement = document.getElementById("mainDiv");
let buttonElement = document.getElementById("btn");


//addeventlistner 3 parameters leta haia aur agr teesra na dein tou byy default false hoti h value jismn event bubling hti h (means pehly child phr parent phr grand parent) !!!

// agr hum chahty hn ky kisi specific chez ka event listen na ho tou usmn hum usmn stopPropagation ka method use krk usko rok skty hn !!

//default---> false(bubbling)---> child first
buttonElement.addEventListener('click', btnClick)
divElement.addEventListener('click', divClick)
document.body.addEventListener('click', bodyClick)

//Event Capturing---> true(capturing)---> parent first
// buttonElement.addEventListener('click', btnClick, true)
// divElement.addEventListener('click', divClick, true)
// document.body.addEventListener('click', bodyClick, true)


function btnClick(){
    console.log("Button Clicked!!!")
}
function divClick(event){
    console.log("Div Clicked!!!")
    // event.stopPropagation();
}
function bodyClick(){
    console.log("Body Clicked!!!")
}