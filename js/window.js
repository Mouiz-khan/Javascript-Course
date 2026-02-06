// innerwidht innerhight

// console.log(window.innerWidth);
// console.log(window.innerHeight);

// outerwidht outerhight

// console.log(window.outerWidth);
// console.log(window.outerHeight);

let element1 = document.getElementById("btn-1");
let element2 = document.getElementById("btn-2");
let element3 = document.getElementById("btn-3");

let openwindow;
let openwindow2;


// element1.addEventListener("click", function () {
//   let url = "https://www.yahoo.com";
//   let features = "height = 500 , width = 500 left = 400 , top = 200";

//   //window.open humsy teen parameter leta hai (url , name , features);
//   // openwindow2.close()
//   openwindow = window.open(url, "web", features);
// });

// name isiliye dia jata h bcz agr humny jesy yahoo open h hum chahty hn google pr click krein tou same window mn yahoo ki jaga google khuljaye tou url replace krny waly case mn nam ekam ata h ky nam same hoga tou features bh dobara nhdeny preingy bs url change krni hogi

// chane url
element2.addEventListener("click", function () {
  let url = "https://www.wikipedia.org/";
  let features = "height = 500 , width = 500 left = 400 , top = 200";
  // openwindow.close()
 openwindow2 = window.open(url,"_blank",features); // features by default fisrt waly ky apply hngy!!
});

// abhi yeh close srf yahoo pr kam krega usko bnd krega agr mn url change krk google pr jaun aur close krun tou yeh kam nh krega !!

// close window
element3.addEventListener('click',function(){
    // openwindow?.close();
    openwindow2.close();
})



