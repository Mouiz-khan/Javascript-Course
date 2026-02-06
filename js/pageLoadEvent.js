//Domcontentloaded ka event listen hota h jesy hi hmara html code ek dom tree mn change hota hai 
//load event listen hota h jb pora webpage html css sb load hojata hai 

// load event hum images ky sath bh use krskty hn ky jesy hi hmari ek image load ho tou usk bd forn kch changings krni hai issb ky liye hum load ko use krskty hn !!!


window.addEventListener('DOMContentLoaded', function(){
    let heading = document.getElementById("main");
    heading.textContent = "DOM Loaded!"
})


window.addEventListener('load', function(){
    alert("Page Fully Loaded!")
})