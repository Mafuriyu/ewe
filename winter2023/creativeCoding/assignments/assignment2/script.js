
// variables are outside so all functions can access them
var num = 3;
var blueCount = 0;
var redCount = 0;
var yellowCount = 0;

var blue1Pressed = Boolean(false);
var red1Pressed = Boolean(false);
var yellow1Pressed = Boolean(false);

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
        if((num <= 3) && (num >= 0)){
            num +=1;
            blueCount -= 1;
            blue1Pressed = !blue1Pressed;
            document.getElementById("num").innerHTML = num;
            document.getElementById("blueCount").innerHTML = blueCount;
        }
        else {}
    }

    // blue + red + yellow = brown
    if((blue1Pressed == true) && (red1Pressed == true) && (yellow1Pressed == true)){
        document.getElementById("title").style.color="rgb(110, 38, 14)";
    }
    // blue + red = violet
    else if ((blue1Pressed == true) && red1Pressed == true){
        document.getElementById("title").style.color="rgb(127, 0, 255)";
    }
    // blue + yellow = green
    else if((blue1Pressed == true) && (yellow1Pressed == true)){
        document.getElementById("title").style.color="rgb(0, 255, 0)";
    }

    // red + yellow = orange
    else if((red1Pressed == true) && (yellow1Pressed == true)){
        document.getElementById("title").style.color="rgb(255, 165, 0)";
    }
    
    // red = red
    else if(red1Pressed == true){
        document.getElementById("title").style.color="rgb(255,0,0)";
    }

    // yellow = yellow
    else if(yellow1Pressed == true){
        document.getElementById("title").style.color="rgb(255,255,0)";
    }

    // blue = blue
    else if(blue1Pressed == true){
        document.getElementById("title").style.color="rgb(0,0,255)";
    }

    //default
    else{
        document.getElementById("title").style.color="rgb(0, 0, 0)";
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

    // blue + red + yellow = brown
    if((blue1Pressed == true) && (red1Pressed == true) && (yellow1Pressed == true)){
        document.getElementById("title").style.color="rgb(110, 38, 14)";
    }
    // blue + red = violet
    else if ((blue1Pressed == true) && red1Pressed == true){
        document.getElementById("title").style.color="rgb(127, 0, 255)";
    }
    // blue + yellow = green
    else if((blue1Pressed == true) && (yellow1Pressed == true)){
        document.getElementById("title").style.color="rgb(0, 255, 0)";
    }

    // red + yellow = orange
    else if((red1Pressed == true) && (yellow1Pressed == true)){
        document.getElementById("title").style.color="rgb(255, 165, 0)";
    }
    
    // red = red
    else if(red1Pressed == true){
        document.getElementById("title").style.color="rgb(255,0,0)";
    }

    // yellow = yellow
    else if(yellow1Pressed == true){
        document.getElementById("title").style.color="rgb(255,255,0)";
    }

    // blue = blue
    else if(blue1Pressed == true){
        document.getElementById("title").style.color="rgb(0,0,255)";
    }

    //default
    else{
        document.getElementById("title").style.color="rgb(0, 0, 0)";
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

    // blue + red + yellow = brown
    if((blue1Pressed == true) && (red1Pressed == true) && (yellow1Pressed == true)){
        document.getElementById("title").style.color="rgb(110, 38, 14)";
    }
    // blue + red = violet
    else if ((blue1Pressed == true) && red1Pressed == true){
        document.getElementById("title").style.color="rgb(127, 0, 255)";
    }
    // blue + yellow = green
    else if((blue1Pressed == true) && (yellow1Pressed == true)){
        document.getElementById("title").style.color="rgb(0, 255, 0)";
    }

    // red + yellow = orange
    else if((red1Pressed == true) && (yellow1Pressed == true)){
        document.getElementById("title").style.color="rgb(255, 165, 0)";
    }
    
    // red = red
    else if(red1Pressed == true){
        document.getElementById("title").style.color="rgb(255,0,0)";
    }

    // yellow = yellow
    else if(yellow1Pressed == true){
        document.getElementById("title").style.color="rgb(255,255,0)";
    }

    // blue = blue
    else if(blue1Pressed == true){
        document.getElementById("title").style.color="rgb(0,0,255)";
    }

    //default
    else{
        document.getElementById("title").style.color="rgb(0, 0, 0)";
    }
}


