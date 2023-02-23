// 1. function to alert the user "Hello!" when page loads
function onloadAlert(){
    alert("Hello!");
}

// 2. function shows a short paragraph in alert when learn more button is clicked
function onClickLearnMore(button){
    alert("There's really not much more to learn about me. But I appreciate your curiosity. I hope you are doing ok and flourishing wherever you are right now!");
}

// source: https://www.w3schools.com/js/js_popup.asp
// 3. when Greeting button is clicked, user is prompted to input their name, and the system greets them, otherwise says 'aw ok'
function onClickGreeting(button){
    let name = prompt("Please enter your name");
let text;
if (name == null || name == "") {
    alert("aw ok.");
} else {
    alert("Hello " + name + ", it is nice to see you here!");
}
}

// 4. when hovering on the image, it changed to img profile 2
function onHover(img){
    img.src = "assets/images/profile2.JPG"
}

// 4.5 when hovering stops, the image reverts back to original
function onHoverOut(img){
    img.src ="assets/images/profile.PNG"
}


//Trickiest one since I frankensteined two from two sources, and had to learn more than what was discussed. but good news is i understood the get elemen ID hehe
// sources: https://www.youtube.com/watch?v=rm8GJkwkDIs & https://www.youtube.com/watch?v=Ndo2la9hylw
// the above sources tackle completely different topics. I just needed to know how they work and what are my limits. 
// 5. Every time you click "Hi! I'm Mafuriyu" it changed colors. magenta to green to blue to magenta
function changeColor(h1){
//I tried using var in this, but it doesnt seem to work. I also had to declare the color in the HTML, since it wasn't fetching it in CSS. weird.

    //magenta to green
    if(document.getElementById("myP").style.color=="rgb(230, 119, 149)") 
    document.getElementById("myP").style.color="rgb(191, 217, 137)";

    //green to blue
    else if(document.getElementById("myP").style.color=="rgb(191, 217, 137)") 
    document.getElementById("myP").style.color="rgb(106, 191, 209)";
    
    //blue to magenta
    else
    document.getElementById("myP").style.color="rgb(230, 119, 149)";
    

    // var x = document.getElementById("myP").style.color;

    // if(x=="rgb(230, 119, 149)") 
    //     x="rgb(191, 217, 137)";

    // else if(x=="rgb(191, 217, 137)") 
    //     x="rgb(106, 191, 209)";
    
    // else
    //     x="rgb(230, 119, 149)";
}

