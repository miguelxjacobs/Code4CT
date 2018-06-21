/* BUTTON FUNCTIONALITY ONLY! */

/* Declarations */
//count defined as integer and assigned zero to start from
let count = -10;

//sets interval to how often timer will update in milliseconds
let counterCoffee = setInterval(timerCoffee, 1);

let counterGirls = setInterval(timerGirls, 1);
let counterProj = setInterval(timerProj, 1);
const counterHours = setInterval(timerHours, 1);

//Cups Of Coffee
function timerCoffee() {
    //enables count iteration
    count++;

    //setting parameters to enable count to stop at desired number
    if(count >= 3001) {
        clearInterval(counterCoffee);

        return;
    }
    //pushes values to HTML page
    document.getElementById('coffeeCount').innerHTML = count + "+";
}

//Number Of Girls
function timerGirls() {
    count=count+1;
    if(count >= 780){
        clearInterval(counterGirls);
        return;
    }
    document.getElementById('girlsCount').innerHTML = count + "+";
}

//Projects Completed
function timerProj() {
    count++;
    if(count >= 3120) {
        clearInterval(counterProj);
        return;
    }
    document.getElementById('projectsCount').innerHTML = count + "+";
}

//Hours Of Coding
function timerHours() {
    count++;
    if(count >= 8760) {
        clearInterval(counterProj);
        return;
    }
    document.getElementById('hoursCount').innerHTML = count + "+";
}
