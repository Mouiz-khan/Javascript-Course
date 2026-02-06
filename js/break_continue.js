/*
Break: the control exits from the loop
Continue: skip particular iteration of the loop but control remain within the loop
Nested Loop: a loop presented inside the another loop
*/
// for(let i = 0; i<=10; i++)
// {
//     if(i==5)
//     {
//         break;
//     }
//     document.write("The Value is: " + i + "<br>");
// }

// for(let i = 0; i<=10; i++)
// {
//     if(i==5)
//     {
//         continue;
//     }
//     document.write("The Value is: " + i + "<br>");
// }


// for(let i =0; i<=5; i++)
// {
//     document.write("The Value of I is: " + i + "<br>");

//     for(let j=0; j<2; j++)
//     {
//         document.write("The Value of J is: " + j + "<br>");
//     }

// }


// ************* Yhn inner loop ky andr sy hi outer loop ko break krna tha tou humny label use kia h yeh krny ky liye ( bahar: ) label hai !! ************

//  bahar : for(let i =0; i<=5; i++)
// {
//     document.write("The Value of I is: " + i + "<br>");

//     for(let j=0; j<2; j++)
//     {
//         if(i == 2)
//         {
//             break bahar;
//         }

//         document.write("The Value of J is: " + j + "<br>");
//     }

// }


let count = 0;
while(count<10)
{
    count++;
    if(count%2 == 0)
    {
        continue;
    }
    document.write("The Value IS: " + count + "<br>");
}

// for(let i = 0; i<10;i++){
//     if (i==5) {
//         break;
//     }
//     document.write("The Value of I is :" + i + "<br>");
// }

























