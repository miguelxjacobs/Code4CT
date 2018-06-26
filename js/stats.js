/* BUTTON FUNCTIONALITY ONLY! */

/* Declarations */

// const canvas = document.getElementsByClassName('canvas')[0].getContext('2d');

// let i = 0;

// let start = 4.72;

// let canvasWidth = canvas.canvas.width;

// let canvasHeight = canvas.canvas.height;

// let diff;

// //Speed at which canvas will draw
// let simulation = setInterval(progressSimulation, 50);

// //Function to draw canvas
// function progressSimulation() {
//     // **Order Imperitive!

//     canvas.clearRect(0,0, canvasWidth, canvasHeight);

//     canvas.lineWidth = 10;

//     canvas.fillStyle = '#ee534f';

//     canvas.strokeStyle = '#ee534f';

//     canvas.textAlign = 'center';

//     diff = ((i / 100) * (Math.PI * 2 * 10)).toFixed(2);

//     canvas.fillText(i + '%', (canvasWidth * 0.5), ((canvasHeight * 0.5) + 2), canvasWidth);

//     canvas.beginPath();

//     canvas.arc(35, 35, 30, start, ((diff / 10) + start), false);

//     canvas.stroke();

//     //Condition to which percentage will be drawn
//     if(i >= 79) {
//         clearTimeout(simulation);

//         //Script here upon progress complete
//     }
//     //Iteration allowing canvas to count through
//     i++;
// }

const canvas = document.getElementsByClassName('canvas')[0].getContext('2d');
const canvas_two = document.getElementsByClassName('canvas')[1].getContext('2d');
const canvas_three = document.getElementsByClassName('canvas')[2].getContext('2d');
const canvas_four = document.getElementsByClassName('canvas')[3].getContext('2d');

let i = 0;

let start = 4.72;

let canvasWidth = canvas.canvas.width;

let canvasHeight = canvas.canvas.height;

let diff;

//Speed at which canvas will draw
let simulation = setInterval(progressSimulation, 50);

//Function to draw canvas
function progressSimulation() {
    // **Order Imperitive!

    canvas.clearRect(0,0, canvasWidth, canvasHeight);

    canvas.lineWidth = 2;

    canvas.fillStyle = '#ee534f';

    canvas.strokeStyle = '#ee534f';

    canvas.textAlign = 'center';

    diff = ((i / 100) * (Math.PI * 2 * 10)).toFixed(2);

    canvas.fillText(i + '%', (canvasWidth * 0.5), ((canvasHeight * 0.5) + 2), canvasWidth);

    canvas.beginPath();

    canvas.arc(35, 35, 30, start, ((diff / 10) + start), false);

    canvas.stroke();

    //Condition to which percentage will be drawn
    if(i > 69) {
        clearTimeout(simulation);

        //Script here upon progress complete
    }
    //Iteration allowing canvas to count through
    i++;
}

//stats two
let simulation_two = setInterval(prog_sim_two, 50);
function prog_sim_two() {
    canvas_two.clearRect(0,0, canvasWidth, canvasHeight);
    canvas_two.lineWidth = 2;
    canvas_two.fillStyle = '#ee534f';
    canvas_two.strokeStyle = '#ee534f';
    canvas_two.textAlign = 'center';
    diff = ((i / 100) * (Math.PI * 2 * 10)).toFixed(2);
    canvas_two.fillText(i + '%', (canvasWidth * 0.5), ((canvasHeight * 0.5) + 2), canvasWidth);
    canvas_two.beginPath();
    canvas_two.arc(35, 35, 30, start, ((diff / 10) + start), false);
    canvas_two.stroke();
    if(i > 56) {
        clearTimeout(simulation_two);
    }
    i++;
}

//stats three
let simulation_three = setInterval(prog_sim_three, 50);
function prog_sim_three() {
    canvas_three.clearRect(0,0, canvasWidth, canvasHeight);
    canvas_three.lineWidth = 2;
    canvas_three.fillStyle = '#ee534f';
    canvas_three.strokeStyle = '#ee534f';
    canvas_three.textAlign = 'center';
    diff = ((i / 100) * (Math.PI * 2 * 10)).toFixed(2);
    canvas_three.fillText(i + '%', (canvasWidth * 0.5), ((canvasHeight * 0.5) + 2), canvasWidth);
    canvas_three.beginPath();
    canvas_three.arc(35, 35, 30, start, ((diff / 10) + start), false);
    canvas_three.stroke();
    if(i > 87) {
        clearTimeout(simulation_three);
    }
    i++;
}

//stats four
let simulation_four = setInterval(prog_sim_four, 50);
function prog_sim_four() {
    canvas_four.clearRect(0,0, canvasWidth, canvasHeight);
    canvas_four.lineWidth = 2;
    canvas_four.fillStyle = '#ee534f';
    canvas_four.strokeStyle = '#ee534f';
    canvas_four.textAlign = 'center';
    diff = ((i / 100) * (Math.PI * 2 * 10)).toFixed(2);
    canvas_four.fillText(i + '%', (canvasWidth * 0.5), ((canvasHeight * 0.5) + 2), canvasWidth);
    canvas_four.beginPath();
    canvas_four.arc(35, 35, 30, start, ((diff / 10) + start), false);
    canvas_four.stroke();
    if(i > 63) {
        clearTimeout(simulation_four);
    }
    i++;
}