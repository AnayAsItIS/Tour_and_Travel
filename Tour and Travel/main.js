$(document).ready(function(){
	$('.fa-bars').click(function(){
		$(this).toggleclass('fa-times');
		$('.navbar').toggleclass('nav-toggle');
	});

	$(window).on( ' load scroll ', function(){

		$('.fa-bars').removeclass('fa-times');
		$('.navbar').removeclass('nav-toggle');

		if($(window).scrolltop() > 30){
			$('header').addclass('header-active');
		}else{
			$('header').removeclass('header-active');
		}

		$('section').each(function(){
			var id = $(this).attr('id');
			var height = $(this).height();
            var offset = $(this).offset().top - 200;
			var top = $(window).scrolltop();
			if(top >= offset && top < offset + height){
				$('.navbar ul li a').removeclass('active');
				$('.navbar').find('[data-scroll="' + id + '"]').addclass('active');
			}
		});

	});
});