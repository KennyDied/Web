const screenW = window.screen.width;
const screenH = window.screen.height;


function scaleLeftPart(){
    
    var leftElement = document.getElementById("left__wrapper");
    var rightElement = document.getElementById("right__wrapper");

    var rightText = document.getElementById("r__white");


    leftElement.style.width = 75 + "%";
    leftElement.style.background = "black";


    rightElement.style.width = 25 + "%";
    rightText.style.display = "none";    

}



function scaleRightPart(){
    var leftElement = document.getElementById("left__wrapper");
    var rightElement = document.getElementById("right__wrapper");

    var leftText = document.getElementById("s__black");

    
    leftElement.style.width = 25 + "%";
    leftText.style.display = "none";    


    rightElement.style.width = 75 + "%";
    rightElement.style.background = "white";



}

function returnLeftPart(){
    var leftElement = document.getElementById("left__wrapper");
    var rightElement = document.getElementById("right__wrapper");
    var lefttText = document.getElementById("s__black");
    var size = leftElement.style.width;

    if (leftElement.style.width = "25%"){
        leftElement.style.width = 50 + "%";
        leftElement.style.background = "#202020";


        rightElement.style.width = 50 + "%";
        lefttText.style.display = "inline";  
    } else {
        scaleLeftPart();
    }
    
}