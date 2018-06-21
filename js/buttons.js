/* BUTTON FUNCTIONALITY ONLY! */

/* Declarations */
//Assigning navBar element to variable
const nav = document.getElementById('nav_wrapper');
//Assigning hamburger menu element to variable

let open = true;
const menu = document.getElementsByClassName('hamburger_icon')[0];
//Displays the navBar
menu.onclick = function() {
    if (open == true){
        nav.style.marginTop = "0";
        open = false;
    }
    else {
        nav.style.marginTop = "-705px";
        open = true;
    }
    
}
