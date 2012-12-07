// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require_tree .

var oldPage;
var minHeight=650+25;
var speed=500;
var curPage=0;

jQuery(document).ready(function($) {
	//Tell Rails that we’re sending a JavaScript request
	$.ajaxSetup({  
	 'beforeSend': function (xhr){
	 xhr.setRequestHeader("Accept", "text/javascript")}  
	});
//-------------------------------------------------
	$(".zoom_js").mouseenter(function(){
	  $(this).css('z-index', '10').animate({width: "+=20px", "margin":"5px"}, 200 );
	});
	$(".zoom_js").mouseleave(function(){
	  $(this).css('z-index', '1').animate({width: "-=20px", "margin":"15px"}, 100 );
	});
//-------------------------------------------------
	jQuery(window).resize(function(){
		setPositions(oldPage);
	});

	$("#cb1").css({'display':'none'});
	$("#cb2").css({'display':'none'});
	$("#cb3").css({'display':'none'});
	$("#cb4").css({'display':'none'});
	oldPage=-1;
	activatePage(curPage);
//-------------------------------------------------
}); //document.ready
function setPositions(page){
	var winWidth=$(window).width();
	var winHeight=$(window).height();
	$(".rocket").css({'position':'fixed','z-index':'10'});
	$(".rocket").css({left: winWidth-$(".rocket").width()-10, top: winHeight/2-$(".rocket").height()/2});
	
	$(".bottom_link").css({'position':'fixed',"z-index":100});
	var bottom_height=winHeight-$(".bottom_link").height()-10;
	if(bottom_height < minHeight-25)
		bottom_height=minHeight-25;
	$(".bottom_link").css({left: 0, top: bottom_height});

	bottom_height=winHeight-164;
	if(bottom_height < minHeight)
		bottom_height=minHeight;
	for (var i = 0; i < 4; i++) {
		$("#page"+i).css({"height":bottom_height,"width":winWidth});
	};
	//$("#page10").css({"height":bottom_height,"width":winWidth});

	$("#cb1").css({'position':'absolute','z-index':'10', "left":50, "top":150});
	$("#cb2").css({"opacity":0.5,'position':'absolute','z-index':'10', "left":winWidth-621, "top":0});
	$("#cb3").css({'position':'fixed','z-index':'10', "left":winWidth-200, "top":winHeight-200});
	$("#cb4").css({"opacity":0.5,'position':'fixed','z-index':'10', "left":0, "top":winHeight-191});
};
function move_iphone(pos){
	$(".iphone").animate({'background-position': pos}, 200 );
};
function pagesVision(page){
	$("#footer").css("display","block"); 
	switch(page){
		case 0:
			$("#footer").css("display","none"); 
			break;
		case 1: 
			$("#footer").css("display","none");
			break;
		case 2: 
			$("#footer").css("display","none");
			break;
		case 3: 
			break;
	}
};
function pageReplacer(oldPage, page){ //как разъезжаться
	var winWidth=$(window).width();
	var winHeight=$(window).height();
	switch(oldPage){
	case 0: 
		$(".side").css({'position':'relative'});
		$(".youtube").css({'position':'relative'});
		$(".youtube").animate({left: -winWidth}, speed);
		$(".side").animate({left: winWidth/2}, speed, function(){
    		newPage(oldPage,page);
    	});
		break;
	case 1: 
		$("#clouds_id").css({'position':'relative'});
		$("#cb1").css({'position':'absolute','z-index':'1', "left":50, "top":150});
		$("#cb1").animate({left: -winWidth}, speed);

		$("#cb2").css({'position':'absolute','z-index':'1', "left":winWidth-621, "top":0});
		$("#cb2").animate({"left":winWidth+621, "top":-265}, speed);

		//$("#cb3").css({'position':'fixed','z-index':'1', "left":winWidth-200, "top":winHeight-200});
		//$("#cb3").animate({"left":winWidth+200, "top":winHeight+200}, speed);
		$("#cb3").fadeOut(speed);

		//$("#cb4").css({'position':'fixed','z-index':'1', "left":0, "top":winHeight-191});
		//$("#cb4").animate({"left":-932, "top":winHeight-191}, speed);
		$("#cb4").fadeOut(speed);

		$("#clouds_id").animate({top: winHeight}, speed, function(){
			$("#cb1").css({'display':'none'});
			$("#cb2").css({'display':'none'});
			$("#cb3").css({'display':'none'});
			$("#cb4").css({'display':'none'});
    		newPage(oldPage,page);
    	});
		break;
	case 2: 
		newPage(oldPage,page);
		break;
	case 3: 
		newPage(oldPage,page); 
		break;
	}
};
function newPage(oldPage,page){ //как появляться
	var winWidth=$(window).width();
	var winHeight=$(window).height();
    switch(page){
		case 0: 
			$(".side").css({'position':'relative', "left": winWidth/2});
			$(".youtube").css({'position':'relative','left': -winWidth});
			$("#page"+page).animate({left: 0, top: 4}, speed, function(){
	    		$("#page"+oldPage).css("display","none");
	    		$("#page"+page).css({"top":0,'position':'relative','z-index':'1'});
	    		$(".youtube").animate({left: 0}, speed);
				$(".side").animate({left: 0}, speed);
		    });
			break;
		case 1: 
			$("#clouds_id").css({'position':'relative', "top": winHeight});
			$("#cb1").css({'display':'block','position':'absolute',"left":-winWidth});
			$("#cb2").css({'display':'block','position':'absolute',"left":winWidth+621, "top":-265});
			//$("#cb3").css({'display':'block','position':'fixed',"left":winWidth+200, "top":winHeight+200});
			//$("#cb4").css({'display':'block','position':'fixed',"left":0, "top":winHeight-191});
			$("#page"+page).animate({left: 0, top: 4}, speed, function(){
	    		$("#page"+oldPage).css("display","none");
	    		$("#page"+page).css({"top":0,'position':'relative','z-index':'1'});
	    		$("#clouds_id").animate({top: 0}, speed);
	    		$("#cb1").animate({left: 50}, speed);	
	    		$("#cb2").animate({"left":winWidth-621, "top":0}, speed);
	    		//$("#cb3").animate({"left":winWidth-200, "top":winHeight-200}, speed);	 
	    		//$("#cb4").animate({"left":0, "top":winHeight-191}, speed);
	    		$("#cb3").fadeIn(speed);	
	    		$("#cb4").fadeIn(speed);   
	    	});
			break;
		case 2: 
			//newPage(oldPage,page);
			//break;
		case 3: 
			//newPage(oldPage,page); 
			//break;
		default:
			$("#page"+page).animate({left: 0, top: 4}, speed, function(){
	    		$("#page"+oldPage).css("display","none");
	    		$("#page"+page).css({"top":0,'position':'relative','z-index':'1'});
		    });
			break;
		}
};
function activatePage(page){
	setPositions(page);
	if(oldPage==page || page==10)return;
	var winWidth=$(window).width();
	var winHeight=$(window).height();
	var pageId = "#page"+page.toString();
	var oldpageId = "#page"+oldPage.toString();


	for (var i = 0; i < 4; i++) {
		$("#page"+i.toString()).css("display","none");
		$("#page"+i.toString()+"rocket").removeClass("active");
	};
	

	$(pageId).css({"display":"block"});
	pagesVision(page);
	$(pageId+"rocket").addClass("active");
	$("#rocket_png").animate({"margin-top":page*27-7},speed);

	$(pageId).css("height", winHeight);
	
	if(oldPage == -1){
		oldPage=page;
		return;
	}
	$(oldpageId).css("display","block");
	$(pageId).css({"height":winHeight,"width":winWidth});
	$(pageId).css({'position':'fixed','z-index':'10'});
	$(pageId).css({left: 0, top: winHeight});
	$(".header").css({'position':'relative','z-index':'100'});
	pageReplacer(oldPage,page);
	$(oldpageId+"bottom").css({"opacity":1});
	$(pageId+"bottom").css({"display":"none"});
    $(oldpageId+"bottom").fadeOut(speed, function() {
	    $(pageId+"bottom").fadeIn(speed);
	    setPositions(page);
	});
	oldPage=page;
};