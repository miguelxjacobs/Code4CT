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

// ---------- cart menu ----------
//Assigning cart wrapper element to variable
const shop = document.getElementsByClassName('shopping_container')[0];
//Assigning cart icom element to variable

let display = true;
const cart_icon = document.getElementsByClassName('cart_icon')[0];

// **Allows for both click and hover to be used similtaneously
//Displays the shopping cart
cart_icon.onclick = function() {
    if (display == true){
        shop.style.display = "grid";
        shop.style.marginRight = "0";
        display = false;
    }
    else {
        shop.style.marginRight = "-2500px";
        display = true;
    }    
}
//Enables click function (especially appropriate for mobile view)
cart_icon.onclick = function() {
    if (display == true){
        shop.style.display = "grid";
        shop.style.marginRight = "0";
        display = false;
    }
    else {
        shop.style.marginRight = "-2500px";
        display = true;
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
    window.querySelector('body').scrollBy({
        behavior: 'smooth'
    });
}

