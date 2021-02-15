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
    slideIndex = 1;
    showSlides(slideIndex);

    var currentLeftPartBlock = document.getElementById("s__black");
    currentLeftPartBlock.style.display = "none";


    var newLeftPartBlock = document.getElementById("new__s__black");
    $("#new__s__black" ).fadeIn( 500, "linear", function(){ // плавно изменяя прозрачность отображаем элементы <div> в документе
        $("#new__s__black").css("display", "flex"); // добавляем текстовую информации в элемент с классом status
        $("#new__s__black").css("opacity", "1");
    });
    //newLeftPartBlock.style.display = "flex";


    var leftPart = document.getElementsByClassName("left");
    for( let i = 0; i < leftPart.length; i++){ // пыроходим циклом по всем элементам массивоподобного объекта
	    leftPart[i].style.display = "none";
	}	
    
    var leftLine = document.getElementsByClassName("left__line");
    for( let i = 0; i < leftPart.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
	    leftLine[i].style.marginBottom = "100px";
	}	
}

function showNewRightPart(){
    
    slideIndex = 1;
    showSlides(slideIndex);

    var currentRightPartBlock = document.getElementById("r__white");
    currentRightPartBlock.style.display = "none";


    var newRightPartBlock = document.getElementById("new__r__white");
    $("#new__r__white" ).fadeIn( 500, "linear", function(){ // плавно изменяя прозрачность отображаем элементы <div> в документе
        $("#new__r__white").css("display", "flex"); // добавляем текстовую информации в элемент с классом status
        $("#new__r__white").css("opacity", "1");
    });
    //newRightPartBlock.style.display = "flex";

    var rightPart = document.getElementsByClassName("right");
    for( let i = 0; i < rightPart.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
	    rightPart[i].style.display = "none";
	}	
    
    var rightLine = document.getElementsByClassName("right__line");
    for( let i = 0; i < rightLine.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
	    rightLine[i].style.marginBottom = "100px";
	}	
}

function hideNewLeftPart(){
    var slideIndex = 1;
    var newLeftPartBlock = document.getElementById("new__s__black");
    newLeftPartBlock.style.display = "none";
    newLeftPartBlock.style.opacity = "0";

    var leftPart = document.getElementsByClassName("left");
    for( let i = 0; i < leftPart.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
	    leftPart[i].style.display = "flex";
	}	
}

function hideNewRightPart(){
    slideIndex = 1;
    var newRightPartBlock = document.getElementById("new__r__white");
    newRightPartBlock.style.display = "none";
    newRightPartBlock.style.opacity = "0";


    var rightPart = document.getElementsByClassName("right");
    for( let i = 0; i < rightPart.length; i++){ // проходим циклом по всем элементам массивоподобного объекта
	    rightPart[i].style.display = "flex";
	}	
}

//Slider

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}