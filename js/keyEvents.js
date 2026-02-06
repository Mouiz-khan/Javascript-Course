// jb bh keyevent ka event listner lgayeingy tou yeh function isi trh bnega parameter lazmi hota h key event listner ky func mn !!



function keyCheck(event){
    console.log(event.key);
}

// window.addEventListener('keydown', keyCheck); // jesy hi key press hoti h 
window.addEventListener('keyup', keyCheck); // jesy hi key press krk release krty hn !!