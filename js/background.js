

// -------- slider buttons ----------
var slideIndex = 1;

showDivs(slideIndex += n);

function showDivs(n) {
    var i;

    var j = document.getElementsByClassName('bg_image');

    if(n > i.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = j.length
    }

    for(i = 0; i < j.length; i++) {
        j[i].style.display = "none";
    }
    j[slideIndex - 1].style.display = "block";
}