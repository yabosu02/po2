var wrapper_h = $('div#wrapper').height(); //console.log(wrapper_h);
var wrapper_w = $('div#wrapper').width();
var wrapper_w2 = wrapper_w/5;

$('span.bg').each(function(e){
	$(this).css({
		'height' : wrapper_h ,
		'width': wrapper_w2,
		'left' : wrapper_w2*e,
	});
});
$('header').find('ol').children('li').each(function(e){
	$(this).css({'left' :  wrapper_w2*e,});
});

$('header').find('ol').children('li').mouseenter(function(){
	var wid = parseInt($(this).find('a').css('width'));
	$(this).find('p').stop(true).animate({
		'width' : wid*3,
	},500);
	$(this).find('a').addClass('on');
}).mouseleave(function(){
	$(this).find('p').stop(true).animate({
		'width' : 0,
	},500);
	$(this).find('a').removeClass('on');
});
//----------------------------------------------------
$('nav').find('ol').children('li').each(function(e){
	$(this).css({'left' :  wrapper_w2*e,});
});

$('nav').find('ol').children('li').mouseenter(function(){
	var wid = parseInt($(this).find('a').css('width'));
	$(this).find('p').stop(true).animate({
		'width' : wid*3,
	},300);
	$(this).find('a').addClass('on');
}).mouseleave(function(){
	$(this).find('p').stop(true).animate({
		'width' : 0,
	},300);
	$(this).find('a').removeClass('on');
});
//-----------------------------------------------
	var s01Top =  $('section#main01').offset().top;
	
	
	/*$(window).scroll(function(){
		var nowScroll = $(this).scrollTop();
		if(nowScroll<=s01Top){
			$('nav').slideUp(300);
		}
	});*/
	
	$(window).mousewheel(function(e,delta){
		var nowScroll = $(this).scrollTop();		//console.log(nowScroll);
		if(nowScroll<=200){$('nav').slideUp(300);}
		else if(delta>0){$('nav').slideDown(300);}
		else if(delta<0){$('nav').slideUp(500);}
	});



/*$('span.bg').css({
	'height' : wrapper_h ,
	'width': wrapper_w2,
});
$('span.bg2').css({
	'left' : wrapper_w2*2,
});*/