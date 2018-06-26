/* BUTTON FUNCTIONALITY ONLY! */

// ---------- hamburger menu ----------
/* Declarations */
//Assigning navBar element to variable
const nav = document.getElementById('nav_wrapper');
//Assigning hamburger menu element to variable

let open = true;
const menu = document.getElementsByClassName('hamburger_icon')[0];
//Displays the navBar
menu.onclick = function() {
    if (open == true){
        nav.style.display = "grid";
        nav.style.marginTop = "0";
        open = false;
    }
    else {
        nav.style.marginTop = "-710px";
        open = true;
    }    
}

//<Failsafe> Allows user to click outside of the header/nav to close nav
window.onclick = function(event) {
    if (event.target == nav) {
        nav.style.marginTop = "-710px";
        open = true;
    }
}

// -------- backToTop button ----------
//target html document
window.onscroll = function() {
    backToTop()
};

//hidden button until user scrolls on page
function backToTop() {
    if(document.body.scrollTop >= 400 || document.documentElement.scrollTop >= 400) {
        document.getElementById('backToTop').style.display = "block";
    }
    else {
        document.getElementById('backToTop').style.display = "none";
    }    
}
//button functionality to scroll onclick
function scrollUp() {
    //reposition to top
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
    //animation smooth slide effect
    window.scrollBy ({
        top: 1,
        left: 0,
        behavior: 'smooth'
    });
}

// -------- Display Hidden Window Button ----------

var hiddenWindow = document.getElementById('hiddenWindow');
var showHidden = document.getElementsByClassName('showHidden')[0];
var closeButton = document.getElementsByClassName('closeButton')[0]; 

//Clicking the "showHidden" button displays the Hidden Window
showHidden.onclick = function() {
    hiddenWindow.style.display = "block";
}

//Clicking the (x) button closes the Hidden Window
closeButton.onclick = function() {
    hiddenWindow.style.display = "none";
}

//Allows user to click outside of the hidden window to close Hidden Window
window.onclick = function(event) {
    if (event.target == hiddenWindow) {
        hiddenWindow.style.display = "none";
    }
}