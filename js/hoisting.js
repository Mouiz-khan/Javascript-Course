/* **************** Hoisting In JavaScript *****************  
The Default behavior of moving all the declarations at the top of the scope before code execution.
*/ 


// "use strict" // yeh likty hn taky javascript friendly na ho hmary sath hoisting na kry var k liye bh aur dosri programming lang ki trh strict rhy !!

// Hoisting sari declaration jo( variable using var and simple functions ) hn unko top of the scope lejata hai agr local ho tou locally aur agr global ho tou gloabally !!

// hoisting variable use let and const aur function expression ky liye kam nh krtii !!
// hoisting srf declaration upper lekr jata hai initialization nh lekr jata !!


//yhn hoisting hogi aur error nh ayega output ayega !!
// greetings();

// function greetings(){
//     console.log("Good Night");
// }


//Variable -- Var

// var a; //declaration

// a = undefined;
// a = 7;
// console.log(a);


// // a = 10; //  yhn bs declaration upper jayegi initialization nh jayegi 
// aur output mn undefined ayegaa !!

// // var a; //declaration

// var a = 10;

// let ky liye humein normal programming ki trh declaration krni pregi wrna error ajayega hoisting nh hoti let aur const mn !!


//Variable -- let
// console.log(b);
// b = 2;
// let b = 3;

//Function Expression ---> hoisting is not working
// greet();
// var greet = function(){
//     console.log("first");
// }

// yhn age bs locally function ky andr top pt jayega bcz apny scope pr top pr jata hai hositing mn local sy global top pr nh jayega !!


// function show(){
    
//     console.log(age);
//     age = 19;
//     var age;
//     }       

//     show();

// var age;
age = 18; // agr use strict na likein top pr tou javascript automatiicaly declare krdega error nh dega !!
console.log(age);


