const screenW = window.screen.width;
const screenH = window.screen.height;


function scaleLeftPart(){
    
    var leftElement = document.getElementById("left__wrapper");
    var rightElement = document.getElementById("right__wrapper");

    var rightText = document.getElementById("r__white");

    rightElement.style.width = 25 + "%";
    rightText.style.display = "none";
    rightElement.style.position = "static";

    leftElement.style.width = 75 + "%";
    leftElement.style.background = "black";
    leftElement.style.boxShadow = "46px 0px 29px rgba(0, 0, 0, 0.38)";
    leftElement.style.position = "relative";

    

    rightElement.onclick = function(){
        returnAll();
        
    }
    
}



function scaleRightPart(){
    var leftElement = document.getElementById("left__wrapper");
    var rightElement = document.getElementById("right__wrapper");

    var leftText = document.getElementById("s__black");

    
    leftElement.style.width = 25 + "%";
    leftText.style.display = "none";   
    leftElement.style.position = "none";    


    rightElement.style.width = 75 + "%";
    rightElement.style.background = "white";
    rightElement.style.boxShadow = "-46px 0px 29px rgba(0, 0, 0, 0.38)";
    rightElement.style.position = "relative";

    
    leftElement.onclick = function(){
        returnAll();
        
    }
    
    
}


function returnAll(){
    var leftElement = document.getElementById("left__wrapper");
    var rightElement = document.getElementById("right__wrapper");
    var leftText = document.getElementById("s__black");
    var rightText = document.getElementById("r__white");

    
    leftElement.style.width = 50 + "%";
    leftElement.style.background = "#202020";
    leftElement.style.position = "static";
    leftElement.style.boxShadow = "none";
    leftText.style.display = "inline";
    


    rightElement.style.width = 50 + "%";
    rightElement.style.background = "#EEECEC";
    rightElement.style.position = "static";
    rightElement.style.boxShadow = "none";
    
    rightText.style.display = "inline";  
    
    rightElement.onclick = function(){
        scaleRightPart();
    }
    leftElement.onclick = function(){
        scaleLeftPart();
    }
    
    
}