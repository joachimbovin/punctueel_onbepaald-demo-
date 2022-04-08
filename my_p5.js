var timer = 20
var x = 0

function setup() {
    var cnv = createCanvas(windowWidth, 10);
    cnv.position(0, 0, 'fixed');
}


function draw() {
    background(242);
    textAlign(CENTER, CENTER);
    textSize(100);
    //text(timer, width / 2, height / 2);
    strokeWeight(14);
    line(x, 0, windowWidth,0)
    console.log(x)



    // while (timer > 0) {  // this doesn't work because it's all happening at the same time
    //   timer --;
    // }

    // frameCount --> this keeps track of the number of times the program has gone throught the code, 60 = 1 second
    // % ---> this is the Modulo operator, it divides numbers and evaluates to the remainder: 17 % 5 evaluates to 2 remainder
    // this can be used to determine if the number on the left is divisible by the number on the right
    /*
        if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
            timer--;
        }
        if (timer == 0) {
            text("GAME OVER", width / 2, height * 0.7);
        }*/


    if (frameCount % 60 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
        timer--;
        x = x + (windowWidth/20);



    }





}