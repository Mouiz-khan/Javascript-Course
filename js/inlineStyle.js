let selectedElement = document.getElementById("main");

// agr inline styling html file mn hi lgi hui hai tou csstext aur setattribute usk override krdety hn aur jo yhn likha jata h bs whi apply hota h html wali styling ignore hojati hai !!
// issy bchny ky liye += use kia h csstext wali property ky sath

// third method html wali inline style ko override nh krta third method aur html mn inline style dono sath kam krskty hn 


//First Method
// selectedElement.style.cssText = "background-color: aqua;";
selectedElement.style.cssText += "background-color: purple;"

//Second Method
// selectedElement.setAttribute("style","color: white; background-color: purple;")

//Third Method
// selectedElement.style.color = "aqua";
// selectedElement.style.backgroundColor = "red";