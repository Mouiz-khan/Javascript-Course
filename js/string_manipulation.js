// String Manipulation
// let message = "This is" + "<br>" + "good";
//Shortcut !!
// let message = "This is <br> good"; // "This is" + "<br>" + "good";
// document.writeln(message);

// let message = "This is \n good";
// console.log(message);

// document.writeln("<pre>Hello   World</pre>");     // for widespaces !!
// document.writeln("Hello &nbsp &nbsp &nbsp &nbsp &nbsp World");    // for widespaces !!
// let message = "This is \t good";




// let message = "This is\" good";  // double quotes
// let message = 'This is\' good';  // single quotes 
// let message = 'This is good';
// console.log(message.length);   // Lenght of the string !!
// console.log(message[8]);          // 8 index wali value print krwany k liye !!
// let firstName = "Farzeen";
// let lastName = "Ali";
// console.log(firstName + " " + lastName);  //another way to print space between variables is by using template literal       // console.log(`${firstName}\t${lastName}`); 


// **************Another way to print space between string variables is*************
// Using concat function for string concatination 
// jitni mrzi srings concat krwaskty hn ek sath by using this function !!


// let firstName = "Farzeen";
// let lastName = "Ali";
// let result = firstName.concat("    ",lastName);  // console mn spaces print hngy !!
// console.log(result);
// document.writeln(result);



// let firstName = "Farzeen";

// if(firstName == "Farzeen")
// {
//     console.log("Equal");
// }
// else
// {
//     console.log("Not Equal");
// }



// let message = 'This is good';
// let result = message.substr(5,2);   // 5 index sy shuru kro aur agay 2 character lelo (mtlb ismn lenght btadi ky 2 letter lelo ) !!
// let result = message.substring(5,12);  // 5 index sy shuru kro aur agay 12 index tk character lelo  ( mtlb ismn 5 sy shuru kro aur 12 index tk lelo) !!  (1 ziada dena hota h number bcz (n-1) tk print krta h)


// let result = message.indexOf('good');  
// console.log(result);
// yeh index btadega ky yhn st good shuru hai aur agr good string mn nh hai jesy mn yhn global likhdun wo bh g sy shuru hota hai pr yeh -1 return krdega ky global string mn nh h tou uska index bh nh hai !! 


// let result = message.indexOf('is',3); // iska mtlb 3 index ky bd sy dhondhna shuru kro !!
// console.log(result);


// let result = message.lastIndexOf('is'); // yeh end sy dhondhna shuru krega ky is kis index sy arha h !!
// console.log(result);

// means agr humny index find krna h tou indexof agr yeh bh btana hai ky itny letters bd shuru kro tou comma lgakr wo bh btaskty hn aur agr last sy dhondhna shuru krna hai tou lastIndexof !!




// let message = "    This is good     ";
// let result = message.trim();  // start aur end sy spaces hata deta hai !!
// let result = message.trimStart();  // only start 
// let result = message.trimEnd();  // only end 
// console.log(result);


let message = 'This is \\\\ good'; // for double backslash !!
// let result = message.toUpperCase();
// let result = message.toLowerCase();
// let result = message.replace('This', 'Farzeen');
// let result = message.includes("good"); // yeh btata hai ky yeh word string mn hai ya nh aur true false mnanswer deta hai !!
// console.log(message);


















