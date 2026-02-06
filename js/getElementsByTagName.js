let divResult = document.getElementById('my-content'); // yeh humny isiliye kia taky jo html filemn div hai usk andr waly h1 ko access krein usk bhr waly h1 wesy hi rhein agr sbko access krna ho tou hum direct krskty hn like getElementByClassName !!
let result = divResult.getElementsByTagName('h1');
// console.log(result);
// result.innerHTML = "HI";--->not working

for(let i = 0; i < result.length; i++){
    result[i].innerHTML = "Farzeen";
}