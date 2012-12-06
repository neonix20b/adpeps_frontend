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
jQuery(document).ready(function($) {
	//Tell Rails that we’re sending a JavaScript request
	$.ajaxSetup({  
	 'beforeSend': function (xhr){
	 xhr.setRequestHeader("Accept", "text/javascript")}  
	});

	$(".menu-item").mouseover(function () {
	  $(this).effect("highlight", {}, 1000);
	  $(this).css('cursor', 'pointer');
	});
//-------------------------------------------------
	$(".zoom_js").mouseenter(function(){
	  $(this).css('z-index', '10').animate({width: "+=20px", "margin":"5px"}, 200 );
	});
	$(".zoom_js").mouseleave(function(){
	  $(this).css('z-index', '1').animate({width: "-=20px", "margin":"15px"}, 100 );
	});
//-------------------------------------------------
/*
	$(".redpoint_js").mouseenter(function(){
      $(this).parent().addClass('active_js');	
    });
	$(".redpoint_js").mouseout(function(){
	  $(this).parent().removeClass('active_js');
	});
*/
	jQuery(window).resize(function(){
		setPositions();
	});
	oldPage=-1;
	setPositions();
	activatePage(0);
//-------------------------------------------------
}); //document.ready
function setPositions(){
	var winWidth=$(window).width();
	var winHeight=$(window).height();
	$(".rocket").css({'position':'fixed','z-index':'10'});
	$(".rocket").css({left: winWidth-$(".rocket").width()-10, top: winHeight/2-$(".rocket").height()/2});
	
	$(".bottom_link").css({'position':'fixed','z-index':'9'});
	$(".bottom_link").css({left: 0, top: winHeight-$(".bottom_link").height()-10});
};
function move_iphone(pos){
	$(".iphone").animate({'background-position': pos}, 200 );
};
function activatePage(page){
	if(oldPage==page)return;
	var winWidth=$(window).width();
	var winHeight=$(window).height();
	var pageId = "#page"+page;
	var oldpageId = "#page"+oldPage;
	$("#page0").css("display","none");
	$("#page1").css("display","none");
	$("#page2").css("display","none");
	$("#page3").css("display","none");

	$("#page0rocket").removeClass("active");
	$("#page1rocket").removeClass("active");
	$("#page2rocket").removeClass("active");
	$("#page3rocket").removeClass("active");

	$(pageId).css("display","block");
	$(pageId+"rocket").addClass("active");
	$("#rocket_png").css("margin-top",page*27-7);

	$(pageId).css("height", winHeight);
	
	if(oldPage == -1){
		oldPage=page;
		//alert(oldPage);
		return;
	}
	$(oldpageId).css("display","block");
	$(pageId).css("height", winHeight);
	$(pageId).css({'position':'fixed','z-index':'10'});
	$(pageId).css({left: 0, top: winHeight});
	$(pageId).animate({left: 0, top: 2}, 2000, function() {
    	$(oldpageId).css("display","none");
    	$(pageId).css({'position':'relative','z-index':'1'});
    });
	oldPage=page;
};