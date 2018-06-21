/* BUTTON FUNCTIONALITY ONLY! */

/* Declarations */
//Assigning navBar element to variable
const nav = document.getElementById('nav_wrapper');
//Assigning hamburger menu element to variable
const menu = document.getElementsByClassName('hamburger_icon')[0];
//Displays the navBar
menu.onclick = function() {
    nav.style.display = "block";
}

//Closes the navBar
const close_menu = document.getElementsByClassName('donate_button')[0];
close_menu.onclick = function() {
    nav.style.display = "none";
}

//<Failsafe> Allows user to click outside of the modal to close Modal Window
// window.onclick = function(event) {
//     if (event.target == nav) {
//         nav.style.display = "none";
//     }
// }