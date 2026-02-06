// prevent default to stop the default behaviour of things ur prevent default ky liye parameter pass krna prhta h func mn 


// let element = document.getElementById("anchor");

// element.addEventListener("click", function(event){
//     console.log("Link Clicked")
//     event.preventDefault();
// })

let formElement = document.getElementById("myForm");

formElement.addEventListener("submit", function(e){
    e.preventDefault();
})