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
        nav.style.marginTop = "-710px";
        open = true;
    }
    
}


// -------- backToTop button ----------

window.onscroll = function() {
    backToTop()
};

function backToTop() {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('backToTop').style.display = "block";
    }
    else {
        document.getElementById('backToTop').style.display = "none";
    }    
}
function scrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
// toTop.onclick = function() {  
//     // document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//     top = true;
// }

