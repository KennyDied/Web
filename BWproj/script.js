const screenW = window.screen.width;
const screenH = window.screen.height;


$(document).ready(function(){
    var clicked = false;

    $(".text").bind("click",function (e){
        
        if (this.getAttribute('id') == "s__black"){
          scaleLeftPart();
          showNewLeftPart();
          $("#right__wrapper").bind("click", function (e){
               hideNewLeftPart();
               returnAll();
               $("#right__wrapper").unbind("click");
          });
        } else {
            scaleRightPart();
            showNewRightPart();
            $("#left__wrapper").bind("click", function(e){
                hideNewRightPart();
                returnAll();
                $("#left__wrapper").unbind("click")
            })
        };
        
    });

    

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
$(function() {      
	var slider = $('.slider'),
	  sliderContent = slider.html(),                      // Содержимое слайдера
	  slideWidth = $('.slider-box').outerWidth(),         // Ширина слайдера
	  slideCount = $('.slider img').length,               // Количество слайдов
	  prev = $('.slider-box .prev'),                      // Кнопка "назад"
	  next = $('.slider-box .next'),                      // Кнопка "вперед"
	  sliderInterval = 3300,                              // Интервал смены слайдов
	  animateTime = 1000,                                 // Время смены слайдов
	  course = 1,                                         // Направление движения слайдера (1 или -1)
	  margin = - slideWidth;                              // Первоначальное смещение слайдов
   
	$('.slider img:last').clone().prependTo('.slider');   // Копия последнего слайда помещается в начало.
	$('.slider img').eq(1).clone().appendTo('.slider');   // Копия первого слайда помещается в конец.  
	$('.slider').css('margin-left', -slideWidth);         // Контейнер .slider сдвигается влево на ширину одного слайда.
   
	function nextSlide(){                                 // Запускается функция animation(), выполняющая смену слайдов.
	  interval = window.setInterval(animate, sliderInterval);
	}
   
	function animate(){
	  if (margin==-slideCount*slideWidth-slideWidth){     // Если слайдер дошел до конца
		slider.css({'marginLeft':-slideWidth});             // то блок .slider возвращается в начальное положение
		margin=-slideWidth*2;
	  }else if(margin==0 && course==-1){                  // Если слайдер находится в начале и нажата кнопка "назад"
		slider.css({'marginLeft':-slideWidth*slideCount});  // то блок .slider перемещается в конечное положение
		margin=-slideWidth*slideCount+slideWidth;
	  }else{                                              // Если условия выше не сработали,
	  margin = margin - slideWidth*(course);              // значение margin устанавливается для показа следующего слайда
	  }
	  slider.animate({'marginLeft':margin},animateTime);  // Блок .slider смещается влево на 1 слайд.
	}
   
	function sliderStop(){                                // Функция преостанавливающая работу слайдера      
	  window.clearInterval(interval);
	}
   
	prev.click(function() {                               // Нажата кнопка "назад"
	  if (slider.is(':animated')) { return false; }       // Если не происходит анимация
	  var course2 = course;                               // Временная переменная для хранения значения course
	  course = -1;                                        // Устанавливается направление слайдера справа налево
	  animate();                                          // Вызов функции animate()
	  course = course2 ;                                  // Переменная course принимает первоначальное значение
	});
	next.click(function() {                               // Нажата кнопка "назад"
	  if (slider.is(':animated')) { return false; }       // Если не происходит анимация
	  var course2 = course;                               // Временная переменная для хранения значения course
	  course = 1;                                         // Устанавливается направление слайдера справа налево
	  animate();                                          // Вызов функции animate()
	  course = course2 ;                                  // Переменная course принимает первоначальное значение
	});
   
	slider.add(next).add(prev).hover(function() {         // Если курсор мыши в пределах слайдера
	  sliderStop();                                       // Вызывается функция sliderStop() для приостановки работы слайдера
	}, nextSlide);                                        // Когда курсор уходит со слайдера, анимация возобновляется.
   
	nextSlide();                                          // Вызов функции nextSlide()
  });

  //http://coderpro.ru/jquery-prostoj-slajder-s-knopkami-vpered-i-nazad.html -  БЛЯТЬ ПРОСТО ЗАРАБОТАЙ НАХУЙ

});