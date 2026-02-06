// qury selector html mn jayega sbsy pehla h3 jiski class heading hogi usko select krega bs sary h3 jinki class heading ho un sb ko access nh krega isiliye query selector mn innerhtml kam krrha h jbk query selector all mn sb access hoty hn tou loop lgana prega !!

let result = document.querySelector('h3.heading');
result.innerHTML = "Mouiz Khan";
console.log(result.innerHTML);
// let result = document.querySelectorAll('h3.heading');
// console.log(result);

// for(let i = 0; i< result.length ; i++){
//     result[i].innerHTML = "Hello";
// }