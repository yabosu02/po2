 $('button').mouseenter(function(){
	 var hh = parseInt($(this).find('a').css('height'));
	 $(this).find('a:nth-child(1)').stop(true).animate({
		top : -hh, 
	 },300,'easeInCubic');
	 $(this).find('a:nth-child(2)').stop(true).animate({
		top : 0, 
	 },300,'easeInCubic');
 }).mouseleave(function(){
	  var hh = parseInt($(this).find('a').css('height'));
	 $(this).find('a:nth-child(1)').stop(true).animate({
		top : 0, 
	 },300,'easeInCubic');
	 $(this).find('a:nth-child(2)').stop(true).animate({
		top : hh+2, 
	 },300,'easeInCubic');
 });
 
 /*마우스 호버시 그림 튀어나오는*/
 
 $('section#a02').find('article:nth-child(1)').mouseenter(function(){
	 $(this).find('div:nth-child(1)').stop(true).animate({
		 top:'33px' , left:'30px', opacity:1,
	 },300,'easeInCubic');
 }).mouseleave(function(){
	  $(this).find('div:nth-child(1)').stop(true).animate({
		 top:0 , left:0, opacity:0,
	 },300,'easeInCubic');
 });
 
 //
 $('section#b03').find('article').on('mouseenter',function(){
	 $(this).find('div.b03Move').stop(true).animate({
		 top:'33px' , left:'30px'
	 },200,'easeInCubic',function(){
		 $(this).children('img:nth-child(2)').stop(true).animate({
			opacity : 1,
		},400,'easeInCubic');
	 });
 }).mouseleave(function(){
	  $(this).find('div.b03Move').stop(true).animate({
		 top:0 , left:0
	 },200,'easeInCubic',function(){
		 $(this).children('img:nth-child(2)').stop(true).animate({
			opacity : 0,
		},500,'easeInCubic');
	 });
 });
 //
 
 $('section#d05').find('ul.dF').children('li').mouseenter(function(){
	 $(this).find('img').closest('div').stop(true).animate({
		 top:'33px' , left: '30px',
	 },350,'easeInCubic').addClass('on');
	 $(this).find('p.dOrange').stop(true).animate({
		 opacity : 1,
	 },350);
	 $(this).find('p.dFtext2').slideDown(300);
 }).mouseleave(function(){
	  $(this).find('img').closest('div').stop(true).animate({
		 top:0 , left: 0,
	 },200,'easeInCubic').removeClass('on');
	 $(this).find('p.dOrange').stop(true).animate({
		 opacity : 0,
	 },250);
	 $(this).find('p.dFtext2').slideUp(300);
 });
 
 // 메일요 인폼요소 focus-blur // focusin - focusout
 $('div.sendMail').focusin(function(){
	 $(this).stop(true).animate({
		 width : '500px',
	 },300,'easeInCubic');
 }).focusout(function(){
	  $(this).stop(true).animate({
		 width : '380.6px',
	 },300,'easeInCubic');
 });
 //
 $('div.mailME').mouseenter(function(){
	 $(this).children('a').find('span.whiteBar').stop(true).animate({ width : 0 , opacity:0 },600,'easeInCubic',function(){
		 $(this).delay(500).animate({ width : '100%' ,opacity:1 },800,'easeOutBounce');
	 });
 }).mouseleave(function(){
	 $(this).children('a').find('span.whiteBar').stop(true).animate({ width : 0 ,opacity:0 },800,'easeInCubic',function(){
		 $(this).delay(500).animate({ width : '280px' , opacity:1 },500,'easeOutBounce');
	 });
 });
 
 /*
 $('section#f07').find('div.fImg').find('img').mouseenter(function(){
	 $(this).addClass('on');
 }).mouseleave(function(){
	 $(this).removeClass('on');
 });
 */
 
 //
 $('footer').find('ol').mouseenter(function(){
	 $(this).children('li.ftTitle').stop(true).animate({
		 color : '#ff8400',
	 },200);
 }).mouseleave(function(){
	  $(this).children('li.ftTitle').stop(true).animate({
		 color : '#656565',
	 },200);
 });
 
 $('footer').find('ol').children('li').mouseenter(function(){
	 $(this).find('span').stop(true).animate({ width : '14px' },300);
	 $(this).find('a').stop(true).animate({color:'#ff8400'},300);
 }).mouseleave(function(){
	 $(this).find('span').stop(true).animate({ width : '0px' },300);
	 $(this).find('a').stop(true).animate({color:'#fff'},300);
 });
 //
 
 $('section#e06').children('div.transBoxOuter').mouseenter(function(){
	 $('section#e06').find('article').find('img:nth-child(2)').stop(true).animate({
		 opacity:0,
	 },500);
 }).mouseleave(function(){
	  $('section#e06').find('article').find('img:nth-child(2)').stop(true).animate({
		 opacity:1,
	 },600);
 });
