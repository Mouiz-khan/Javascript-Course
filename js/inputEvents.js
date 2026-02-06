let element = document.getElementById("me");

function myFocus(){
    element.style.background = "aqua";
}
function myBlur(){
    element.style.background = "white";
}
function myChange(){
    console.log(this.value);
}
function myInput(){
    console.log(this.value);
}

element.addEventListener('focus', myFocus);
element.addEventListener('blur', myBlur);

// jb bh hum kch change kreingy input mn yeh console mn dikaheyag lkn tbtk nh kam krta jbtk hum kch change na krein ya jbtk hum focus state sy bhr na ayein means agr humny changing ki h lkn focus state mn hi hn tou yeh usko detect nh krega kn input state change hoty hi console mn dikhadega chahy hum focux state mn hi kyun na hn !!
element.addEventListener('change', myChange);
element.addEventListener('input', myInput);