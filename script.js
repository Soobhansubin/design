
		CountDownTimer('10/30/2020', 'countdown 1');
		CountDownTimer('12/01/2020', 'countdown 2');
		CountDownTimer('01/22/2021', 'countdown 3');
		CountDownTimer('01/28/2021', 'countdown 4');
		CountDownTimer('03/12/2021', 'countdown 5');
		CountDownTimer('03/31/2021', 'countdown 6');


		function CountDownTimer(dt, id) {
		var end = new Date(dt);

		var _second = 1000;
		var _minute = _second * 60;
		var _hour = _minute * 60;
		var _day = _hour * 24;
		var timer;

		function showRemaining() {
		var now = new Date();
		var distance = end - now;
		if (distance < 0) {

		clearInterval(timer);
		document.getElementById(id).innerHTML = 'EXPIRED!';

		return;
		}
		var days = Math.floor(distance / _day);
		var hours = Math.floor((distance % _day) / _hour);
		var minutes = Math.floor((distance % _hour) / _minute);
		var seconds = Math.floor((distance % _minute) / _second);

		document.getElementById(id).innerHTML = 'D'+'-'+days ;
		}

		timer = setInterval(showRemaining, 1000);
		}

	$(function(){
		$('.sub_nav').hide();
		//////////상단 메뉴////////
		$('.award').mouseover(function(){
			$(this).children('.sub_nav').fadeIn(200);
		});
		$('.award').mouseleave(function(){
			$(this).children('.sub_nav').fadeOut(200);
		});
		//////메뉴 마우스hover///////
		$('.award>li').mouseover(function(){
			$(this).children('a').css('color','black')
			$(this).children('a').css('background-color','black')
		});
		
		$('.award>li').mouseleave(function(){
			$(this).children('a').css('color','black')
		});

		$('.flex_more').hide();
		$('.flex_box').mouseover(function(){
			$(this).children('.flex_more').slideDown(200);
		});

		$('.flex_box').mouseleave(function(){
			$(this).children('.flex_more').slideUp(200);
		});

    });


    $(document).ready(function(){

		var $root = $('html, body');

		$('.menu_list>a').click(function() {

		    $root.animate({

		        scrollTop: $( $.attr(this, 'href') ).offset().top

		    }, 500);

		    return false;

		});


	});

    $(document).ready(function(){

		$('.top').click(function(){
			$('html, body').animate( { scrollTop:0}, 400 );
			return false;
		})


	});


      
