const screenW = window.screen.width;
const screenH = window.screen.height;


function scaleLeftPart(){    
    var leftElement = document.getElementById("left__wrapper");
    var rightElement = document.getElementById("right__wrapper");
    var leftText = document.getElementById("s__black")
    var rightText = document.getElementById("r__white");

    rightElement.style.width = 25 + "%";
    rightElement.style.position = "static";
    rightText.style.display = "none";
    
    leftElement.style.width = 75 + "%";
    leftElement.style.background = "black";
    leftElement.style.boxShadow = "46px 0px 29px rgba(0, 0, 0, 0.38)";
    leftElement.style.position = "relative";
    leftText.style.opacity = "0";    
    showNewLeftPart();
    
    /* Хуйня, которая убирает блок текста s__black
    setInterval(showNewLeftDiv, 3000)
    function showNewLeftDiv(){
        leftText.style.display = "none";
    }
    */

    rightElement.onclick = function(){
        returnAll();        
    }
}

function scaleRightPart(){
    var leftElement = document.getElementById("left__wrapper");
    var rightElement = document.getElementById("right__wrapper");
    var leftText = document.getElementById("s__black");
    var rightText = document.getElementById("r__white");
    
    leftElement.style.width = 25 + "%";
    leftText.style.display = "none";   
    leftElement.style.position = "none";    

    rightElement.style.width = 75 + "%";
    rightElement.style.background = "white";
    rightElement.style.boxShadow = "-46px 0px 29px rgba(0, 0, 0, 0.38)";
    rightElement.style.position = "relative";
    rightText.style.opacity = "0";
    showNewRightPart();


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
    leftText.style.opacity = "1";
    hideNewLeftPart();
    
    rightElement.style.width = 50 + "%";
    rightElement.style.background = "#EEECEC";
    rightElement.style.position = "static";
    rightElement.style.boxShadow = "none";
    rightText.style.display = "inline";  
    rightText.style.opacity = "1";
    hideNewRightPart();


    rightElement.onclick = function(){
        scaleRightPart();
    }
    leftElement.onclick = function(){
        scaleLeftPart();
    }      
}

function showNewLeftPart(){
    var newLeftPartBlock = document.getElementById("new__s__black");
    newLeftPartBlock.style.display = "inline";

    var currentLeftPartBlock = document.getElementById("s__black");
    currentLeftPartBlock.style.display = "none";
}

function showNewRightPart(){
    var newRightPartBlock = document.getElementById("new__r__white");
    newRightPartBlock.style.display = "inline";

    var currentRightPartBlock = document.getElementById("r__white");
    currentRightPartBlock.style.display = "none";
}

function hideNewLeftPart(){
    var newLeftPartBlock = document.getElementById("new__s__black");
    newLeftPartBlock.style.display = "none";
}

function hideNewRightPart(){
    var newRightPartBlock = document.getElementById("new__r__white");
    newRightPartBlock.style.display = "none";
}