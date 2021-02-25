const screenW = window.screen.width;
const screenH = window.screen.height;
$(document).ready(function(){
    $(".text").bind("click",function (e){
        if (this.getAttribute('id') == "s__black"){
          scaleLeftPart();
          showNewLeftPart();
          $("#right__wrapper").bind("click", function (e) {
            returnAll();
            $("#right__wrapper").unbind("click");
          });
        } else {
            scaleRightPart();
            showNewRightPart();
            $("#left__wrapper").bind("click", function(e){
                returnAll();
                $("#left__wrapper").unbind("click")
            })

        };

        
    });


function scaleLeftPart(){
    $("#right__wrapper").css("width", "25%");
    $("#right__wrapper").css("position", "static");
    $("#r__white").css("display", "none");

    $("#left__wrapper").css("width", "75%");
    $("#left__wrapper").css("background", "black");
    $("#left__wrapper").css("boxShadow", "46px 0px 29px rgba(0, 0, 0, 0.38)");
    $("#left__wrapper").css("position", "relative");
    $("#s__black").css("opacity", "0");
    $("#s__black").css("display", "none");
}


function scaleRightPart(){
    $("#left__wrapper").css("width", "25%");
    $("#left__wrapper").css("position", "static");
    $("#s__black").css("display", "none");

    $("#right__wrapper").css("width", "75%");
    $("#right__wrapper").css("background", "white");
    $("#right__wrapper").css("boxShadow", "-46px 0px 29px rgba(0, 0, 0, 0.38)");
    $("#right__wrapper").css("position", "relative");
    $("#r__white").css("opacity", "0");
    $("#r__white").css("display", "none");

}

function showNewLeftPart(){
    $("#new__s__black" ).fadeIn( 500, "linear", function(){ // плавно изменяя прозрачность отображаем элементы <div> в документе
         $("#new__s__black").css("display", "flex"); // добавляем текстовую информации в элемент с классом status
         $("#new__s__black").css("opacity", "1");
    });

    $(".left").css("display", "none");
    $(".left__line").css("marginBottom", "100px");
}


function showNewRightPart(){
    $("#new__r__white" ).fadeIn( 500, "linear", function(){ // плавно изменяя прозрачность отображаем элементы <div> в документе
        $("#new__r__white").css("display", "flex"); // добавляем текстовую информации в элемент с классом status
        $("#new__r__white").css("opacity", "1");
   });

   $(".right").css("display", "none");
   $(".right__line").css("marginBottom", "100px");
}

function hideNewLeftPart(){
    $("#new__s__black").css("opacity", "0");
    $("#new__s__black").css("display", "none");
}


function hideNewRightPart(){
    $("#new__r__white").css("opacity", "0");
    $("#new__r__white").css("display", "none");
}

function returnAll(){

    // $("#new__s__black").css("opacity", "0");
    // $("#new__s__black").css("display", "none");
    
    // $("#new__r__white").css("opacity", "0");
    // $("#new__r__white").css("display", "none");

    hideNewRightPart();
    hideNewLeftPart();

    $("#left__wrapper").css("width", "50%");
    $("#left__wrapper").css("background", "#202020");
    $("#left__wrapper").css("position", "static");
    $("#left__wrapper").css("boxShadow", "none");

    $("#right__wrapper").css("width", "50%");
    $("#right__wrapper").css("background", "#EEECEC");
    $("#right__wrapper").css("position", "static");
    $("#right__wrapper").css("boxShadow", "none");

    $(".left").css("display", "flex");
    $(".right").css("display", "flex");

    $("#r__white").css("display", "inline");
    $("#r__white").css("opacity", "1");

    $("#s__black").css("display", "inline");
    $("#s__black").css("opacity", "1");

   

    
}

function createNewDivLeft(){
    $(".left").addClass("left__back").removeClass("left");
    $(".left__back").css({
        "display": "flex",
        "width": "25%",
        "height": "100%"
    })
}

function removeNewDivLeft(){
    $(".left__back").addClass("left").removeClass("left__back");
 
}

function createNewDivRight(){
    $(".right").addClass("right__back").removeClass("right");
    $(".right__back").css({
        "display": "flex",
        "width": "25%",
        "height": "100%"
    })
}





// //Slider

function nextSlide() {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#viewport').width() * (slideNow);
        $('#slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}


// // /* Индекс слайда по умолчанию */
// var slideIndex = 1;
// showSlides(slideIndex);

// /* Функция увеличивает индекс на 1, показывает следующй слайд*/
// function plusSlide() {
//     showSlides(slideIndex += 1);
// }

// /* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
// function minusSlide() {
//     showSlides(slideIndex -= 1);  
// }

// /* Устанавливает текущий слайд */
// function currentSlide(n) {
//     showSlides(slideIndex = n);
// }

// /* Основная функция слайдера */
// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("item");
//     var dots = document.getElementsByClassName("slider-dots_item");
//     if (n > slides.length) {
//       slideIndex = 1
//     }
//     if (n < 1) {
//         slideIndex = slides.length
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
// }

});
