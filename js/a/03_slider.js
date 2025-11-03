 
 //1. 페이저 클릭시

 $('section#main01').find('ul').children('li').click(function(){
	var nowI = $(this).index(); 	 //console.log(nowI); //0,1,2,3
	var nowPos = parseInt($('section#main01').find('ol').css('top'));
	if(nowI==0){
		$(this).siblings().find('span').removeClass('circleON');
		$(this).find('span').addClass('circleON');
		$('section#main01').find('ol').stop(true).animate({
			top:'-597px',
		},500);
	}else if(nowI==1){
		$(this).siblings().find('span').removeClass('circleON');
		$(this).find('span').addClass('circleON');
		$('section#main01').find('ol').stop(true).animate({
			top:'-1277px',
		},500);
	}else if(nowI==2){
		$(this).siblings().find('span').removeClass('circleON');
		$(this).find('span').addClass('circleON');
		$('section#main01').find('ol').stop(true).animate({
			top:'-1957px',
		},500);
	}else if(nowI==3){
		$(this).siblings().find('span').removeClass('circleON');
		$(this).find('span').addClass('circleON');
		$('section#main01').find('ol').stop(true).animate({
			top:'-2637px',
		},500);
	}
 });
 
 //셑인터벌
 
 function slideM(){
	 var nowPos = parseInt($('section#main01').find('ol').css('top'));
	 //console.log(nowPos);
	 if(nowPos==-2637){
		$('section#main01').find('ol').stop(true).animate({
			top : nowPos-680+'px',
		},1000,'easeInCubic',function(){
			$(this).css('top','-597px');
		});
		$('section#main01').find('ul').children('li').find('span').removeClass('circleON');
		$('section#main01').find('ul').children('li:nth-child(1)').find('span').addClass('circleON');
	 }else if(nowPos==-597){
		 $('section#main01').find('ol').stop(true).animate({
			top : nowPos-680+'px',
		},1000,'easeInCubic');
		$('section#main01').find('ul').children('li').find('span').removeClass('circleON');
		$('section#main01').find('ul').children('li:nth-child(2)').find('span').addClass('circleON');
	 }else if(nowPos==-1277){
		 $('section#main01').find('ol').stop(true).animate({
			top : nowPos-680+'px',
		},1000,'easeInCubic');
		$('section#main01').find('ul').children('li').find('span').removeClass('circleON');
		$('section#main01').find('ul').children('li:nth-child(3)').find('span').addClass('circleON');
	 }else if(nowPos==-1957){
		 $('section#main01').find('ol').stop(true).animate({
			top : nowPos-680+'px',
		},1000,'easeInCubic');
		$('section#main01').find('ul').children('li').find('span').removeClass('circleON');
		$('section#main01').find('ul').children('li:nth-child(4)').find('span').addClass('circleON');
	 }
 };
 
 setInterval('slideM()' , 4000);
 
 
 
 /*-----------------------------------------------------*/