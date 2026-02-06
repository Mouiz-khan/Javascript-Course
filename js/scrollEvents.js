//scroll event hmeshaa window object pr hi lgta hai !!

// window.addEventListener('scroll',function(){
// console.log("scrolling window");
// })


// mouse wheel event listner require a parameter && DeltaY for y axis up & down scrolling!!
// window.addEventListener("wheel", function (event) {
//   if (event.deltaY < 0) {
//     console.log("Scrolling up");
//   } else if (event.deltaY > 0) {
//     console.log("Scrolling Down");
//   }
// });

//eltaX for left and right scrolling !!
// window.addEventListener("wheel", function (event) {
//   if (event.deltaX < 0) {
//     console.log("Scrolling left");
//   } else if (event.deltaX > 0) {
//     console.log("Scrolling Right");
//   }
// });


// yeh usk liye jo hum dekhty hn websites mn jesy hum scroll krty hn thora tou kch popup hokr ajata hai wo sb istrh hota hai !!
window.addEventListener("scroll", function () {
  if (window.pageYOffset > 350) {
    document.body.setAttribute("style","background-color : red;");
    // document.body.style.backgroundColor = "aqua";
  } else if (window.pageYOffset < 350) {
    document.body.setAttribute("style","background-color : white;");
    // document.body.style.backgroundColor = "white";
  }
});
