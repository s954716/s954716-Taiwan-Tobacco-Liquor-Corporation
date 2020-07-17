var video = document.getElementById("play1");
var video2 = document.getElementById("play2");
var video3 = document.getElementById("play3");
var mask = document.getElementById("mask");
var mask2 = document.getElementById("mask2");
var mask3 = document.getElementById("mask3");
var cTime = video.currentTime;

var play_button = document.getElementById("play_button");
var play_button2 = document.getElementById("play_button2");
var play_button3 = document.getElementById("play_button3");

play_button.addEventListener("click", play);
play_button2.addEventListener("click", playofsec);
play_button3.addEventListener("click", playthird);


video.addEventListener("click", pause);
video2.addEventListener("click", pauseofsec);
video3.addEventListener("click", pausethird);

function play() {
  if (video.paused) {
    video.play();
    play_button.style.display = "none";
    mask.style.display = "none";
    console.log('Video Playing'); 
    if(document.body.clientWidth < "767"){
    if(video.requestFullscreen){
      video.requestFullscreen();
    }else if (video.msRequestFullscreen) {
      video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    }
  }
  } 
}

function pause() {
  video.paused ? video.play() :  video.pause() ;
  video.paused ? play_button.style.display = "block" : play_button.style.display = "none";
  }

function playofsec() {
  if (video2.paused) {
    video2.play();
    play_button2.style.display = "none";
    mask2.style.display = "none";
    console.log('Video Playing'); 
    console.log(document.body.clientWidth)
if(document.body.clientWidth < "767"){
    if(video2.requestFullscreen){
      video2.requestFullscreen();
    }else if (video2.msRequestFullscreen) {
      video2.msRequestFullscreen();
    } else if (video2.mozRequestFullScreen) {
      video2.mozRequestFullScreen();
    } else if (video2.webkitRequestFullscreen) {
      video2.webkitRequestFullscreen();
    }
  } 
}
}
function pauseofsec() {
  video2.paused ? video2.play() :  video2.pause() ;
  video2.paused ? play_button2.style.display = "block" : play_button2.style.display = "none";
  }

function playthird() {
  if (video3.paused) {
    video3.play();
    play_button3.style.display = "none";
    mask3.style.display = "none";
    if(document.body.clientWidth < "767"){
    if(video3.requestFullscreen){
      video3.requestFullscreen();
    }else if (video3.msRequestFullscreen) {
      video3.msRequestFullscreen();
    } else if (video3.mozRequestFullScreen) {
      video3.mozRequestFullScreen();
    } else if (video3.webkitRequestFullscreen) {
      video3.webkitRequestFullscreen();
    }
  }
  }
}

function pausethird() {
  video3.paused ? video3.play() :  video3.pause() ;
  video3.paused ? play_button3.style.display = "block" : play_button3.style.display = "none";
  }

  video.onended = function() {
    play_button.style.display = "block";
    mask.style.display = "block";
};

video2.onended = function() {
    play_button2.style.display = "block";
    mask2.style.display = "block";
};

video3.onended = function() {
    play_button3.style.display = "block";
    mask3.style.display = "block";
};


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
	//點擊選單，字變顏色，遮罩拿掉，漢堡選單收起來
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
//點擊漢堡按鈕，開或關遮罩，並開關選單
	$('.navbar-toggler').click(function(){

    if($('#hambur-mask').hasClass('showmask')) {
      console.log("nav open");
      
      $('#hambur-mask').removeClass('showmask')
    }else{
      console.log("nav close");
      $('#hambur-mask').addClass('showmask')
    } 
  });


  
  var sections = ['cdr-header', 'cdr-features', 'idr-video','idr-product', 'cdr-contact', 'footer'];
	var section_position = [];
	for(var i=0; i <6; i++){
		var p = $('#'+ sections[i]).position();
		section_position[i] = p.top;
		console.log(sections[i] + ": " + section_position[i]);
	}
	
	$(window).scroll(function(){
		$("#navbarSupportedContent li").removeClass("current-menu-item");
		
		for(var i=0; i < sections.length; i++){		
			if($(window).scrollTop() > section_position[i] - 500){
				$("#navbarSupportedContent li").removeClass("current-menu-item");
				var target = "#"+sections[i];
				$('#navbarSupportedContent a[href="'+target+'"]').parent().addClass('current-menu-item');
			}
		}
	});
	
if($(window).height() == "812"){
  console.log($(window).height());
$("#cdr-header").css({
  "max-height": "90vh",
})

}


});