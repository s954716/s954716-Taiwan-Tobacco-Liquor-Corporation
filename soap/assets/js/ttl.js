$(document).ready(function () {
  var d = $(".header_scoll").outerHeight();
  $(window).scroll(function () {
    var s = $(document).scrollTop();
    if (s > d) {
      $(".header_scoll").addClass("fixed");
     
    } else {
      $(".header_scoll").removeClass("fixed");

    }
  });
});

$(document).ready(function () {
	
	$('#navbarSupportedContent li > a').click(function(){
		var target = $(this).attr('href');
		menu_color(target);
		console.log(target);
		$('.navbar-toggler').click();
	});

	function menu_color(target){
		console.log('in '+target);
		$('#navbarSupportedContent li').removeClass('current-menu-item');
		//console.log($('#navbarSupportedContent a[href="'+target+'"]'));
		$('#navbarSupportedContent a[href="'+target+'"]').parent().addClass('current-menu-item');
	}

	$('.navbar-toggler').click(function(){
		if(!$('#hambur-mask').hasClass('showmask')){
			$('#hambur-mask').addClass('showmask');
		}else{
			$('#hambur-mask').removeClass('showmask');
		}
	});







	
	
	if($(window).height() == "1366"){
		console.log($(window).height());
	  $("#cdr-header").css({
		"max-height": "80vh",
	  })
	  $(".cdr-info-text").css({
		"margin-top": "6vh" ,
	  })
	  
	  }else if($(window).height() == "812"){
		console.log($(window).height());
	  $("#cdr-header").css({
		"max-height": "84vh",
	  })
	  
	  }else if($(window).height() == "1024"){
		console.log($(window).height());
	  $("#cdr-header").css({
		"max-height": "100vh",
	  })
	  
	  }

});