 
 
 //1) #e06 배경이미지
 
 var a02Pos = $('section#a02').offset().top;
 var b03Pos = $('section#b03').offset().top;
 
 var e06Pos = $('section#e06').find('article').offset().top; //console.log(thisPos); //6064px;
 var f07Pos = $('section#f07').find('article').offset().top; //console.log(f07Pos);
 var fter =$('footer').offset().top;
	/*	var fL1= $('img.fFloatL1').position().top;
		var fL2= $('img.fFloatL2').position().top;
		var fL3= $('img.fFloatL3').position().top;
		var fC= $('img.fFloatC').position().top;
		var fR1= $('img.fFloatR1').position().top;
		var fR2= $('img.fFloatR2').position().top;
		var fR3= $('img.fFloatR3').position().top;
		var fR4= $('img.fFloatR4').position().top;
		var fR5= $('img.fFloatR5').position().top; */
		
	/*else if(nowPos>=6846&&nowPos<9000){
		$('img.fFloatL1').css({ top : fL1 + (nowPos/30)});
		$('img.fFloatL2').css({ top : fL2 - (nowPos/10)});
		$('img.fFloatL3').css({ top : fL3 + (nowPos/20)});
		$('img.fFloatR1').css({ top : fR1 + (nowPos/100)});
		$('img.fFloatR2').css({ top : fR2 - (nowPos/40)});
		$('img.fFloatR3').css({ top : fR3 + (nowPos/10)});
		$('img.fFloatR4').css({ top : fR4 - (nowPos/30)});
		$('img.fFloatR5').css({ top : fR5 + (nowPos/30)});
		$('img.fFloatC').css({ top : fC + (nowPos/30)});
	}*/
/*-----------------------------------------------------------------*/
 $(window).scroll(function(){
	var nowPos = parseInt($(this).scrollTop()); 
	console.log(nowPos);	
	if(nowPos>=e06Pos && nowPos<f07Pos){
		//1) #e06 배경이미지
		$('section#e06').find('article').children('img').css({
			top : nowPos-e06Pos,
		});
	}else{
		$('section#e06').find('article').children('img').css({
			top : 0,
		});
	}
 });
 $(window).scroll(function(){
	 var nowPos = parseInt($(this).scrollTop()); 
	 
	 if(nowPos>=700&&nowPos<1200){
		 $('section#a02').find('article:nth-child(1)').animate({opacity:1,left:0},1200);
		 $('section#a02').find('div.textAreaL').delay(500).animate({opacity:1,left:'0px'},1200);
		 $('section#a02').find('div.textAreaR').delay(500).animate({opacity:1,left:'380.6px'},1200);
	 }
	 else if(nowPos>=1200&&nowPos<1800){
		 //$('section#b03').animate({opacity:1},1200);
		 $('section#b03').children('div.leftNumber,div.titleText').animate({ top : '200px' ,opacity:1},1200);
		 $('section#b03').children('div.textArea').delay(500).animate({ top: '600px' , opacity:1},1200);
		 $('section#b03').children('button').delay(800).animate({ top: '792px' , opacity:1},1200);
		 $('section#b03').children('article').delay(1000).animate({ left: '1141.8px' , opacity:1 },1200);
	 }else if(nowPos>=1800&&nowPos<2900){
		  $('section#c04').find('div.leftNumber').animate({ top:0 , opacity:1},1200);
		  $('section#c04').find('div.titleText04').delay(800).animate({ top:0 , opacity:1},1300);
		  $('section#c04').find('div.titleTextU').delay(800).animate({ top:'-166px' , opacity:1},1300);
		  $('section#c04').find('ol').delay(800).animate({opacity:1},1200,function(){
			  $(this).children('li').each(function(e){
				   $(this).delay(e*300).animate({opacity:1},1200);
			  });
		  });
	 }else if(nowPos>=2900&&nowPos<5300){
		  $('section#d05').find('div.leftNumber,div.titleText').animate({top:0 , opacity:1},1200);
		  $('section#d05').find('ul.dFLeft').delay(500).animate({top:'408px' , opacity:1},1200);
		  $('section#d05').find('ul.dFRight').delay(800).animate({top:'512px' , opacity:1},1200);
		  /*$('section#d05').find('ul.dFLeft').delay(500).animate({top:'408px' , opacity:1},1200,function(){
			  $(this).children('li').each(function(e){
				  $(this).delay(e*500).animate({opacity:1},1200);
			  });
		  });*/
	 }else if(nowPos>=5300&&nowPos<6600){
		  $('section#e06').find('div.leftNumber').animate({ top:0 , opacity:1},1200);
		  $('section#e06').children('article').find('img').animate({opacity:1},2000);
		  $('section#e06').find('div.titleText06').delay(800).animate({ top:0 , opacity:1},1200);
		  $('section#e06').find('div.titleTextU').delay(800).animate({ top:'-167px' , opacity:1},1200);
		  $('section#e06').find('div.transBoxOuter').delay(1200).animate({opacity:1,bottom:0},1200);
	 }else if(nowPos>=6600&&nowPos<8300){
		  /*$('section#f07').find('img.fFloat').each(function(e){
			  $(this).delay(500*e).animate({opacity:1},1200);
			  $(this).delay(500*e).addClass('on');
		  });*/
		$('section#f07').find('img.fFloatR1').addClass('on');
		$('section#f07').find('img.fFloatR2').addClass('on');
		$('section#f07').find('img.fFloatR3').addClass('on');
		$('section#f07').find('img.fFloatR4').addClass('on');
		$('section#f07').find('img.fFloatR5').addClass('on');
		$('section#f07').find('img.fFloatL1').addClass('on');
		$('section#f07').find('img.fFloatL2').addClass('on');
		$('section#f07').find('img.fFloatL3').addClass('on');
		$('section#f07').find('img.fFloatC').addClass('on');
	 }else if(nowPos>=8300){
		 $('footer').animate({opacity:1},2000);
	 }
 });
