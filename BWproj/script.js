const screenW = window.screen.width;
const screenH = window.screen.height;


$(document).ready(function(){

    /*preloader*/
    $(".loader_inner").fadeOut();
	$(".loader").delay(500).fadeOut("slow");

    var slideNow = 1;
    var slideCount = $('.slidewrapper').children().length/2;
    var slideInterval = 3000;
    var navBtnId = 0;
    var translateWidth = 0;
    var switchInterval = setInterval(nextSlide, slideInterval);

    var clicked = false;
    if (clicked = true){
        setTimeout(() => {
            all();
        }, 600);
    } else {
        all();
    }
    
function all(){
    $(".text").bind("click",function (e){
        clicked = true;
        if (this.getAttribute('id') == "s__black"){
            
            scaleLeftPart();
            showNewLeftPart();
        
            setTimeout(() => {
                $("#right__wrapper").bind("click", function (e){
                    hideNewLeftPart();
                    returnAll();
                    $("#right__wrapper").unbind("click");
                });
            }, 600);
        } else {
            scaleRightPart();
            showNewRightPart();

            setTimeout(() => {
                $("#left__wrapper").bind("click", function(e){
                    hideNewRightPart();
                    returnAll();
                    $("#left__wrapper").unbind("click")

                })
            }, 600);
        };

    });
}


//Scale parts//
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
    $("#s__black").css("opacity", "0");
    $("#s__black").css("display", "none");

    $("#right__wrapper").css("width", "75%");
    $("#right__wrapper").css("background", "white");
    $("#right__wrapper").css("boxShadow", "-46px 0px 29px rgba(0, 0, 0, 0.38)");
    $("#right__wrapper").css("position", "relative");
    $("#r__white").css("opacity", "0");
    $("#r__white").css("display", "none");
}


//Show new parts//
function showNewLeftPart(){
    $("#new__s__black" ).fadeIn( 500, "linear", function(){ 
         $("#new__s__black").css("display", "flex");
         $("#new__s__black").css("opacity", "1");
    });

    setTimeout($(".left").css("display", "none"), 1000);
    $(".left__line").css("marginBottom", "100px");
}

function showNewRightPart(){

    $("#new__r__white" ).fadeIn( 500, "linear", function(){ 
        $("#new__r__white").css("display", "flex");
        $("#new__r__white").css("opacity", "1");
   });

   $(".right").css("display", "none");
   $(".right__line").css("marginBottom", "100px");
}



//Hide new parts//
function hideNewLeftPart(){
    $("#new__s__black").css("opacity", "0");
    $("#new__s__black").css("display", "none");
    
}

function hideNewRightPart(){
    $("#new__r__white").css("opacity", "0");
    $("#new__r__white").css("display", "none");
   
}



//Return All//
function returnAll(){
    
    slideNow = 1;
    navBtnId = 0;
    translateWidth = 0;
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



//Slider//
    $('.viewport').hover(function() {
        clearInterval(switchInterval);
    }, function() {
        switchInterval = setInterval(nextSlide, slideInterval);
    });

    $('.next-btn').click(function() {
        let str = this.getAttribute('id')
        //alert(str.split('_')[0])
        nextSlide(str.split('_')[0]);
    });

    $('.prev-btn').click(function() {
        let str = this.getAttribute('id')
        prevSlide(str.split('_')[0]);
    });

    $('.slide-nav-btn').click(function() {
        navBtnId = $(this).index();

        if (navBtnId + 1 != slideNow) {
            translateWidth = -$('.viewport').width() * (navBtnId);
            $('.slidewrapper').css({
                'transform': 'translate(' + translateWidth + 'px, 0)',
                '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
                '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
            });
            slideNow = navBtnId + 1;
        }
    });


function nextSlide(slider_side) {
    if (slideNow == slideCount || slideNow <= 0 || slideNow > slideCount) {
        $('#' + slider_side + '_' + 'slidewrapper').css('transform', 'translate(0, 0)');
        slideNow = 1;
    } else {
        translateWidth = -$('#' + slider_side + '_' + 'viewport').width() * (slideNow);
        $('#' + slider_side + '_' + 'slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow++;
    }
}

function prevSlide(slider_side) {
    if (slideNow == 1 || slideNow <= 0 || slideNow > slideCount) {
        translateWidth = -$('#' + slider_side + '_' + 'viewport').width() * (slideCount - 1);
        $('#' + slider_side + '_' + 'slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow = slideCount;
    } else {
        translateWidth = -$('#' + slider_side + '_' + 'viewport').width() * (slideNow - 2);
        $('#' + slider_side + '_' + 'slidewrapper').css({
            'transform': 'translate(' + translateWidth + 'px, 0)',
            '-webkit-transform': 'translate(' + translateWidth + 'px, 0)',
            '-ms-transform': 'translate(' + translateWidth + 'px, 0)',
        });
        slideNow--;
    }
}

//https://habr.com/ru/post/319394/ - слайдер брал тут

});