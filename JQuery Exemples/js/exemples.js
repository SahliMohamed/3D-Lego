//e.stopPropagation();//                                 |ma y5allich klemet fade out tentabe9 3al inner mte3 popup (imna3 el intichar)
//insertBefore insertAfter
//charCodeAt(0)                                          |cade ascii of the firs letter in this exp
//slice(mnin nanbda,9addech enna9ess melle5er)    
//setInterval(fct,time)                                  |ta3tih fct yab9a y3awed feha koll (time)
//clearInterval(fct)                                     |t7abbes el fct mel repetition
//parseInt                                               |kima valeur fi el algo
$(document).ready(function(){
    //scroll to element 2
	$('.navbar li a').click(function(e){
		e.preventDefault();
		$('html, body').animate({
			scrollTop:$('#'+$(this).data('scroll')).offset().top+1 
			//+1 bech yda5elni lel block b 1px bech el condtion mte3 if($(window).scrollTop() > $(this).offset().top) voir video6 4:24
		},1000);
	});
	//Calculate body paddingtop depend on navbar height 3
	$('body').css("paddingTop",$('.navbar').innerHeight());
	//Add active class on navbar link and remove from siblings 4
	$('.navbar li a').click(function(){
		//$('.navbar li a').removeClass('active');
		//$(this).addClass('active');
		$(this).addClass('active').parent().siblings().find('a').removeClass('active');
	});
	//sync navbar links with sections 5+6
	$(window).scroll(function(){
		$('.block').each(function(){
			if($(window).scrollTop() > $(this).offset().top){
				//console.log($(this).attr('id'))
			    var BlockID = $(this).attr('id');
			    $('.navbar li a').removeClass('active');
			    $('.navbar li a[data-scroll="'+BlockID+'"]').addClass('active');
			}
		});
	//scroll to top button 7+8
		//Create Scroll to Top Button and learn how to check if element is hidden or no
		var scrollToTop=$('.scroll-to-top');
		if($(window).scrollTop() >=1200){
			if(scrollToTop.is(':hidden')){ //el if hethi zedneha just lel performance bech ya3mel fade in marra bark mouch 100 marra wena nscrolli
				scrollToTop.fadeIn(400)
			}
		}else
			scrollToTop.fadeOut(400);
	});
	$('.scroll-to-top').click(function(event){
		event.preventDefault();
		$('html, body').animate({
			scrollTop:0
		},1000);
	});
	//popup
	$('.show-popup').click(function(){
		$('.'+$(this).data('popup')).fadeIn();//               |tnajjem t7ott el . fi esem el data-popup w tna77i el concat
	});
	$('.popup').click(function(){
		$(this).fadeOut();
	});
	$('.popup .inner').click(function(e){
		e.stopPropagation();//                                 |ma y5allich klemet fade out tentabe9 3al inner mte3 popup (imna3 el intichar)
	});
	$('.popup .close').click(function(e){
		e.preventDefault();
		$(this).parentsUntil('.popup').parent().fadeOut();
	});
	$(document).keydown(function(e){
		if (e.keyCode == 27){
			$('.popup').fadeOut();
		}
	});
	//button effects
	$('.from-left, .border-left').hover(function(){
		$(this).find('span').eq(0).animate({
			width:'100%'
		},200)
	},function(){
		$(this).find('span').eq(0).animate({
			width:0
		},200)
	});
		//*****
	$('.from-top, .border-top').hover(function(){
		$(this).find('span').eq(0).animate({
			height:'100%'
		},200)
	},function(){
		$(this).find('span').eq(0).animate({
			height:0
		},200)
	});
	function bounceElements(selector,times,distance,speed){
		for(var i=0;i<times;i++){
			$(selector).animate({
				top:'-='+distance
			},speed).animate({
				top:'+='+distance
			},speed);
		}
	}	
	$('.bounce-once').click(function(){
		bounceElements($(this),1,20,200);
	});
	$('.bounce-twice').click(function(){
		bounceElements($(this),2,20,200);
	});
	//animated progress
	$('.animated-progress span').each(function(){
		$(this).animate({
			width:$(this).data('progress')
		},1200,function(){
			$(this).text($(this).attr('data-progress'))
		});
	});
	//fixed menu
	$('.fixed-menu i').on('click',function(){
		$(this).parent().toggleClass('is-visible');
		if ($('.fixed-menu').hasClass('is-visible')) {
			$('.fixed-menu').animate({   //+body.animate(padding:280px) itha ken t7eb el body yga7ezz
				left:0
			},500);	
		}else{
			$('.fixed-menu').animate({
				left:'-'+$('.fixed-menu').innerWidth()
			},500);	
		}
	});
	$('.change-colors li').on('click',function(){
		$('.navbar').attr('data-default-color',$(this).data('color'))    //bech na3ref chnoia esem el color
	});
	//thumbnails gallery
	$('.thumbnails img').on('click',function(){
		$(this).addClass('selected').siblings().removeClass('selected');
		$('.master-img img').hide().attr('src',$(this).attr('src')).fadeIn(500);
	});
	$('.master-img .fa-chevron-right').on('click',function(){
		if($('.thumbnails .selected').is(':last-child')){
			$('.thumbnails img').eq(0).click();
		}else{
		    $('.thumbnails .selected').next().click();
		}
	});
	$('.master-img .fa-chevron-left').on('click',function(){
		if($('.thumbnails .selected').is(':first-child')){
			$('.thumbnails img:last').eq(0).click();
		}else{
		    $('.thumbnails .selected').previous().click();
		}
	});
	/*var numOfThumbnails = $('.thumbnails').children().length,
		marginBetweenThumbnails = '.5',
		totalMarginBetweenThumbnails = ( numOfThumbnails - 1 ) * marginBetweenThumbnails,
		thumbnailWidth = ( 100 - totalMarginBetweenThumbnails ) / numOfThumbnails;
	$('.thumbnails img').css({
		'width': thumbnailWidth + '%',
		'margin-right': marginBetweenThumbnails + '%'
	});*///ki tzid taswira w t7ebb el js te7seblek el width wa7adha(ken t7eb tjarebha na7i el width m css(16.25) w kelmet not w rod margin-right=0)

	//toggle product descripion
	$('.products .product i ,.items .item i').on('click',function(){
		$(this).toggleClass('fa-angle-down fa-angle-up').next('p').slideToggle();

	});
	//switch list and grid view
	$(".view-option i").on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(".items").removeClass("list-view grid-view").addClass($(this).data('class'));
	});
	//error messgae
	$('.error-message').each(function(){
		$(this).delay(3000).animate({
			right:'10px'
		},1000,function(){
			$(this).delay(3000).fadeOut(1000);
		});
	});
	//form
	//**hide placeholder on focus then restor on blur
	var placeAttr='';
	$('[placeholder]').focus(function(){
		placeAttr=$(this).attr('placeholder');
		$(this).attr('placeholder','');
	}).blur(function(){
		$(this).attr('placeholder',placeAttr);
	});
	//**show message when field is empty
	$('[required]').on('blur',function(){
		if($(this).val()==''){
			$(this).next('span').delay(1000).fadeIn().delay(2000).fadeOut();
		}
	});
	//**add asterisk
	$('<span class="asterisk">*</span>').insertBefore(':input[required]');
	//**customize asterisk with jquery                    (nroddoha tet7att bel position 7aseb el width mte3 el input)
	$('.asterisk').parent('div').css('position','relative');
	$('.asterisk').each(function(){
		$(this).css({
			'position':'absolute',
			'top':'13px',
			'left':$(this).parent('div').find(':input').innerWidth() -20,
			'color':'red',
			'font-weight':'bold'
		});
	});
	//**customize the input field
	$('.our-form input[type="file"]').wrap('<div class=custom-file></div>'); //thabbet m3a el css ken jarrebet haja wma5edmetch
	$('.custom-file').prepend('<span>Upload your file</span>');
	$('.custom-file').append('<i class="fas fa-upload fa-lg"></i>');
	$('.our-form input[type="file"]').change(function(){
		$(this).prev().text($(this).val());
	});
	//detect code ascii
	$(window).on('keyup',function(event){
		var keyNumber = event.keyCode || event.which;	
		$('.our-form textarea').text(keyNumber);
	});
	//direction depend on language
	$('.auto-direction').on('keyup',function(){
		if($(this).val().charCodeAt(0)<200){
			$(this).css("direction","ltr")
		}else{
			$(this).css("direction","rtl")
		}
	});
	//convert input values to tags
	$('.add-tag').on('keyup',function(event){
		var keyNumber= event.keyCode || event.which;
		if (keyNumber===188) {
			var thisValue= $(this).val().slice(0,-1);
			$('.tags').append('<span class="span-tag"><i class="fas fa-times"></i>'+thisValue+'</span>');
			$(this).val('');
		}
	});
	//remove tags
	$('.tags').on('click','.span-tag i',function(){
		$(this).parent('.span-tag').fadeOut("fast")
	});
	//trimm text
	/*$('.trimmed-text p').each(function(){
		if($(this).text().length > 200){
			var trimmedText =$(this).text().substr(0,200);
			$(this).html(trimmedText+' ... ')
 
		}
	});*/ //nroddoha function 5ir 
	function trimText(selector, maxLength){
		$(selector).each(function(){
			if($(this).text().length > maxLength){
				var trimmedText = $(this).text().substr(0,maxLength);
				$(this).html(trimmedText+' ... ')
	 
			}
		});
	}
	trimText('.trimmed-text .p1',100);
	trimText('.trimmed-text .p2',200);
	trimText('.trimmed-text .p3',300);
	//adjust height to elements to be equals (kima elli 9rineha fi el bac)
	var maxHeight = 0;
	$('.same-height div').each(function(){
		if ($(this).height() > maxHeight) {
			maxHeight = $(this).height();
		}
	});
	$('.same-height div').height(maxHeight);
	//shuffle cards
	var zindexValue = 0;
	$('.cards .card').on('click',function(){
		$(this).animate({
			left:'20%',
			marginTop:30
		},300,function(){
			zindexValue--;
			$(this).css("z-index",zindexValue);
		}).animate({
			left:$(this).css('left'),
			marginTop:0
		})
	});
	//blink warning
	blinkWarning();
	function blinkWarning(){
		$('.blink-warning').fadeIn(600,function(){
			$(this).fadeOut(300);
			blinkWarning();
		});
	}
	//to do list
	var newTask = $('.task-input');
	$('.add-task').on('submit',function(e){
		e.preventDefault();
		if (newTask.val() != '') {
			$('<li>'+newTask.val()+'</li>').prependTo('.tasks')
			newTask.val('');
		}
	});
	$('.tasks').on('click','li',function(){
		$(this).css("text-decoration","line-through").delay(400).fadeOut(200,function(){
			$(this).remove();
		})
	});
	//typer effect
	var theText = $('.typer').data('text'),
		theTextLength = theText.length,
		n=0;
		theTyper = setInterval(function(){
			$('.typer').each(function(){
				$(this).html($(this).html() + theText[n]); //techbah lkelmet n= n+1 html=html+1
			});
			n+=1
			if (n === theTextLength) {
				clearInterval(theTyper);
			}
		},10);
	//calculate total price from the table
	var theSummary = 0;
	$('.price').each(function(){
		theSummary += parseInt($(this).text());
	});
	$('.the-total').text(theSummary);
	// How To Auto Change Content
	(function autoChange(){
		$('.ticker-list .active').each(function(){
			if (! $(this).is(':last-child')) {
				$(this).delay(2000).fadeOut(1000,function(){
					$(this).removeClass('active').next().addClass('active').fadeIn();//fadeIn 7atinha bch tna7i el display:none 3al next ba3d ma ya3ml tour keml
					autoChange();
				});
			}else{
				$(this).delay(2000).fadeOut(1000,function(){
					$(this).removeClass('active');
					$('.ticker-list li').eq(0).addClass('active').fadeIn();//fadeIn 7atinha bech tna7i el display:none 3al next ba3d ma ya3mel tour kemel 
					autoChange();
				});
			}
		})
	}());//t7ebb ta3el fonction t3ayet lrou7ha lezem tzil les (()) el zeydin

	//dynamic tabs
	$('.tabs-list li').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.content-list > div').hide();
		$($(this).data('content')).fadeIn();
	});
	//switch tabs view
	$('.switch-view').on('click',function(){
		$(this).next('.dynamic-tabs').toggleClass('left-tabs');
	});
	//suggest box
	var emailProviders = ['gmail.com','yahoo.com','hotmail.com','outlook.com'],
		finalString = '';
	$('.email-suggest').on('keyup',function(){
		finalString = ''; //reset variable (last video)
		if(! $(this).next().is('.suggest-box')){
			$('<ul class="suggest-box"></ul>').insertAfter($(this));
		}
		var check = 0;
		for(var i = 0; i < emailProviders.length; i++){
			if (!$(this).val().includes(emailProviders[i]) && check !=1) { //no (mohamed@gmail@outlook.com) anymore
				finalString += '<li>'+ $(this).val() + '@' + emailProviders[i] + '</li>';
			}else{
				check=1;
				finalString += '<li>'+ $(this).val().substr(0,$(this).val().indexOf('@')) + '@' + emailProviders[i] + '</li>';
			}
		}
		$('.suggest-box').html(finalString);
	});
	$('body').on('click','.suggest-box li',function(){
		$('.email-suggest').val($(this).text());
		$(this).parent().fadeOut(300).remove();
	});
	/*//suggest box //without solution
	var emailProviders = ['gmail.com','yahoo.com','hotmail.com','outlook.com'],
		finalString = '';
	$('.email-suggest').on('keyup',function(){
		finalString = ''; //reset variable (last video)
		if(! $(this).next().is('.suggest-box')){
			$('<ul class="suggest-box"></ul>').insertAfter($(this));
		}
		for(var i = 0; i < emailProviders.length; i++){
			finalString += '<li>'+ $(this).val() + '@' + emailProviders[i] + '</li>';
		}
		$('.suggest-box').html(finalString);
	});
	$('body').on('click','.suggest-box li',function(){
		$('.email-suggest').val($(this).text());
		$(this).parent().fadeOut(300).remove();
	});*/ 

});