
// variables are outside so all functions can access them
var num = 3;
var blueCount = 0;
var redCount = 0;
var yellowCount = 0;

var blue1Pressed = Boolean(false);
var blue2Pressed = Boolean(false);
var blue3Pressed = Boolean(false);

var red1Pressed = Boolean(false);
var red2Pressed = Boolean(false);
var red3Pressed = Boolean(false);

var yellow1Pressed = Boolean(false);
var yellow2Pressed = Boolean(false);
var yellow3Pressed = Boolean(false);

function startUp() {
    document.getElementById("blueCount").innerHTML = blueCount;
    document.getElementById("redCount").innerHTML = redCount;
    document.getElementById("yellowCount").innerHTML = yellowCount;
    document.getElementById("num").innerHTML = num;
}

function buttonPressedBlue1(img){
    if(blue1Pressed == false){
        if((num <= 3) && (num >= 0)){
            num -=1;
            blueCount += 1;
            blue1Pressed = !blue1Pressed;
            document.getElementById("num").innerHTML = num;
            document.getElementById("blueCount").innerHTML = blueCount;
        }
        else {}
    }
    else if(blue1Pressed == true){
        if((num <= 3) && (num > 0)){
            num +=1;
            blueCount -= 1;
            blue1Pressed = !blue1Pressed;
            document.getElementById("num").innerHTML = num;
            document.getElementById("blueCount").innerHTML = blueCount;
        }
        else {}
    }
}

function buttonPressedRed1(img){
    if(red1Pressed == false){
        if((num <= 3) && (num >= 0)){
            num -= 1;
            redCount += 1;
            red1Pressed = !red1Pressed;
            document.getElementById("num").innerHTML = num;
            document.getElementById("redCount").innerHTML = redCount;
        }
        else{}
    }
    else if(red1Pressed == true){
        if((num <= 3) && (num >= 0)){
            num += 1;
            redCount -= 1;
            red1Pressed = !red1Pressed;
            document.getElementById("num").innerHTML = num;
            document.getElementById("redCount").innerHTML = redCount;
        }
        else{}
    }
}

function buttonPressedYellow1(){
    if(yellow1Pressed == false){
        if((num <= 3) && (num >= 0)){
            num -= 1;
            yellowCount += 1;
            yellow1Pressed = !yellow1Pressed;
            document.getElementById("num").innerHTML = num;
            document.getElementById("yellowCount").innerHTML = yellowCount;
        }
        else{}
    }
    else if(yellow1Pressed == true){
        if((num <= 3) && (num >= 0)){
            num += 1;
            yellowCount -= 1;
            yellow1Pressed = !yellow1Pressed;
            document.getElementById("num").innerHTML = num;
            document.getElementById("yellowCount").innerHTML = yellowCount;
        }
        else{}
    }
}


