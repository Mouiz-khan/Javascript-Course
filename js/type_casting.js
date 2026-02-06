// *****************Type Casting***************

// let number = true;
// document.writeln(number);
// document.writeln(typeof number);

// let number = 4 + null;
// document.writeln(number);
// document.writeln(typeof number);

// let number = "3" + 2;
// document.writeln(number);
// document.writeln(typeof number);

// let number = "3" - 2;
// document.writeln(number);
// document.writeln(typeof number);

// let number = "3" * "yes";
// document.writeln(number);
// document.writeln(typeof number);


/*
1) String()
2) Number()
3) Boolean()

*/

// let oldType = 2;
// document.writeln(typeof oldType);

// let newType = String(oldType);
// document.writeln(typeof newType);

// let oldType = "32";
// document.writeln(typeof oldType);

// let newType = Number(oldType);
// document.writeln(typeof newType);

// let oldType = "32";
// document.writeln(typeof oldType);

// let newType = Boolean(oldType);
// document.writeln(typeof newType);

// let oldType = false;
// document.writeln(typeof oldType);

// let newType = Number(oldType);
// document.writeln(newType);
// document.writeln(typeof newType);

// let oldType = false;
// document.writeln(typeof oldType);

// let newType = String(oldType);
// document.writeln(typeof newType);

// let oldType = 0;
// document.writeln(typeof oldType);

// let newType = Boolean(oldType);
// document.writeln(newType);
// document.writeln(typeof newType);

// let oldType = "";
// document.writeln(typeof oldType);

// let newType = Number(oldType);
// document.writeln(newType);
// document.writeln(typeof newType);


// let number = true;
// document.writeln(number);
// document.writeln(typeof number);

//************Java script kch type casting khusdy krta hai jesy yeh sari ****************/
// let number = 4 + null; // null is a string !
// document.writeln(number);
// document.writeln(typeof number);

// let number = "3" + 2; // pehla wala string tha isiliye dosry ko bh string bnadia !!
// document.writeln(number);
// document.writeln(typeof number);


// let number = "3" - 2; // yhn - use kia hai + tou chalo concatenation ky liye use hota hai lkn - srf subtraction tou wo string ko bh number bnadega aur 3-2 = 1 !!
// document.writeln(number);
// document.writeln(typeof number);


// let number = "3" * "yes"; // yhn * use hua hai aur * srf numbers ky liye hota hai tou yeh dono ko number krega lkn yes ka koi number nh hota isiliye Output ayega ( NaN -> Not a number ) lkn type number hi hogi 
// document.writeln(number);
// document.writeln(typeof number);


//***************Type Casting *********** */

// ********* Number to string *********
// let old = 2;
// let newtype = String(old);
// document.writeln(typeof newtype);


// ********* Number to boolean  *********
// let old = 1;
// let newtype = Boolean(old);
// document.writeln(newtype);
// document.writeln(typeof newtype);


// ********* string to number *********
// let old = "Mouiz";
// let newtype = Number(old);
// document.writeln(typeof newtype);
// document.writeln(newtype); // result Nan !!

// ********* string to boolean *********
// let old = "Mouiz";
// let newtype = Boolean(old);
// document.writeln(typeof newtype);
// document.writeln(newtype);

// *********  boolean to number *********
// let old = false;
// let newtype = Number(old);
// document.writeln(newtype);
// document.writeln(typeof newtype);


// *********  boolean to string *********
// let old = false;
// let newtype = String(old);
// document.writeln(newtype);
// document.writeln(typeof newtype);


//********** Empty String to bo0lean */
// let old = "";
// let newtype = Boolean(old);
// document.writeln(newtype);
// document.writeln(typeof newtype); // returns False