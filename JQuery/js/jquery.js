//$(document).ready(function(){});
///////////////////////////////////////////////2
/*$(document).ready(function(){
	$("p").hide();
});*/
///////////////////////////////////////////////3
/*$(document).ready(function(){
	$("button").hover(
	function(){
		$("p").css("color","red");
	},
	function(){
		$("p").css("color","black");
	});
});*/
////////////////////////////////////////////////4
/*$(document).ready(function(){
	$("button").click(function(){
		$("h1").toggle(1000,function(){
			$("h2").toggle(1000);
		});
	});
});*/
////////////////////////////////////////////////5
/*$(document).ready(function(){
	$("button").click(function(){
		$("div").fadeToggle(1000);
	});
});*/
////////////////////////////////////////////////6
/*$(document).ready(function(){
	$("button").click(function(){
		$(".slides").slideToggle(1000);
	});
});*/
////////////////////////////////////////////////7
/*$(document).ready(function(){
	$(".mkdir").animate({
		top:'100px' //voir tp
	},500);
});*/
///////////////////////////////////////////////10
/*$(document).ready(function(){
	$("button").click(function(){
		$("p").text("you have wrote "+ $("input").val());
	});
});*/
///////////////////////////////////////////////15
/*$(document).ready(function(){
	$("div").click(function(){
		$(this).width("+=" + 50);
	});
});*/
///////////////////////////////////////////////16
/*$(document).ready(function(){
	$("span").parentsUntil("section").css("border","1px solid green");
});*/
///////////////////////////////////////////////17
/*$(document).ready(function(){
	$(".top").children().css("border","1px solid green");
});
or
$(document).ready(function(){
	$("section").find($("span:contains('test')")).css("border","1px solid green");
});*/
///////////////////////////////////////////////18
$(document).ready(function(){
	$(".traversing").click(function(){
		$(this).siblings(".traversing").slideToggle(1000);
	})
});
///////////////////////////////////////////////19
$(document).ready(function(){
	$(".traversing").filter(function(v){
		return v ===  1
	}).css("color","red");
});
///////////////////////////////////////////////23
$(document).ready(function(){
	$(".video23").animate({
		width:'500px'
	},5000);
	$("h3").click(function(){
		$(":animated").css("background-color","red")
	});
});
///////////////////////////////////////////////24
$(document).ready(function(){
	$(".test").click(function(){
		$(".test:visible").slideToggle(1000);
		$(".test:hidden").slideToggle(1000);
	});
});
///////////////////////////////////////////////29
$(document).ready(function(){
	$(".custom").on("myCustom",function(event,myHeight,myWidth,myBack,myColor){
		$(this).width(myWidth).height(myHeight);
		$(this).css({
			backgroundColor:myBack,
			color:myColor
		});
	});
	$(".buttonToActivateCustom").click(function(){
		$(".custom").trigger("myCustom",["200px","300px","green","white"])
	});
	//map with on
	$(".custom").on({
		mouseenter:function(){$(this).text("You have mouse on me");},
		mouseleave:function(){$(this).text("The mouse has gone");},
		click:function(){$(this).text("You clicked me");},
		dblclick:function(){$(this).text("You double clicked me");}
	});
	//future element event with on
	$(".buttonToShowThatWeCanDoWhatEverWeWantWithFutureCreatedElement").on("click",function(){
		$("<p>WeCanDoWhatEverWeWantWithFutureCreatedElement</p>").insertAfter($(this));
	});
	$("body").on("click","p",function(){ //lel future element ethet lezem t7ot fazed parent wel children kima ena 7attit body p w on  sinon ma te5tafich
		$(this).fadeOut(2000);
	});

});
////////////////////////////////////////////////38
$(document).ready(function(){
	$("html").on("mousemove",function(e){
		$(".circle").offset({
			left:e.pageX,
			top:e.pageY
		});
	});
});
/////////////////////////////////////////////////50
$(document).ready(function(){
	$("li").each(function(){
		if ($(this).hasClass("test2")){
			$(this).css("color","red");
		}
	});	
});
//fi3outh ma nab9a ena ntasti
/*
$(document).ready(function(){
	$("li").click(function(){
		if ($(this).hasClass("test2")){
			$(this).css("color","red");
		}
	});	
});*/











/*
:contains :last :eq(0 or 1 or 2..)
2)hide css("color","white")
3)Click / Dblclick / Mouseenter / Mouseleave / Hover
4)Hide / Show / Toggle ***********(speed*,callback)
5)Fade In / Fade Out / Fade Toggle  ***********(speed*,callback) / Fade To ************(speed*,opacity*,callback)
6)SlideDown / SlideUp / SlideToggle
7)animate({css},speed,callback)************ width:hide/toggle
8)stop************ (clearQueue,goToEnd) 
		//ki ta3mel button w ta3mel 3 animation koll ma teclicki ystopi ell animation loula ba3ed el thenia ba3ed el thalath
		//true fi clear =stop all
		//true fi go to end= resultat final mte3 el animation elli wa9eft'ha
*******************************************************************************************************************************************************************
9)var
10)(get/set)(<p><span>ahla</span>med</p>)
		//text --><span>ahla</span>med
		//html -->ahla med
		//val  $("input").val("med")
		//attr ("a").attr("target"); -->_blank  to set --> ("div").attr("class","footer")-->.footer ken bech tbadel barcha syntax kima animate
11)Append / AppendTo / Prepend / PrependTo / Before / After
	before
	<div>
	prepend
		div content
	append
	</div>
	after
	//$("div").append("text") or $("text").appendTo("div") kif kif (nafes el 7keya prependTo)
12)Remove / Empty  *******(".class")/(" :contains('word')")
13)addClass removeClass toggleClass**********("class class...") 
14)css
15)width innerWidth outerWidth ****(true)//te7seb el margin

*********************************************************************************************************************************************************************
16)Parent / Parents / ParentsUntil
17)Children / Find ***************** ken l find n7ott feha object $("span:contains('test')")
18)siblings / next / nextAll / nextUntil / previous / prevAll / prevUntil 
19)First / Last / Eq(-nb/+nb)/ Filter(class/obj/fct) / Not(class/obj/fct)
*********************************************************************************************************************************************************chn7ot fi wost la9wess
20)$(*or p/p, div/.class, .class/p:first/p:last/p:even/p:odd)                                                                                                even odd 16:21
21):first-child / :last-child / :first-of-type / :last-of-type / :nth-child(nb) / :nth-last-child(nb) / :nth-of-type(nb) / :nth-last-of-type(nb)                 nth  17:00
22)p:only-child       |p ytima (p m3aha div le zeda) ..fi wost el body wala div wala elli yji mouhem wa7adha ma m3aha chay 
   p:only-of-type     |kif only-child ama p m3aha div 3adi 2 p fi blasa léé
   >(direct child)    |div > p = ay p ma7touta el barra fi wost el div ..this p <div>p p p..</> not this <div> <aside> p </></>
   +(next)            |div + p = div ta7tou p <div></> <p></>
   ~(siblings)        |div ~ p = p men nafes el generastion mte3 div
   :eq                |ul li:eq(0) =awell li
   :gt(greater then)  |ul li:gt(1) =el li lkoll ba3ed el li 2 ye5demha
   :lt(lower then)    |ul li:lt(5) =el li lkoll el 9ball li 5 ye5demha 
   :not               |ul li:not(:contains('hello')) el li elli mouch maktoub feha hello
23):header            |from h1 to h6 yet5edmou
   :animated          |$
   :focus             |$("input").focus(); yet5edmou
   :contains          |p:contains('hello') elli fehom hello yet5edmou
   :has               |div:has('p') div fih p yet5dem 
   :empty             |ye5dem el 7ajet el fer8a
   :parent            |tnajem t9oul 3akes el empty el div elli 3andou child yet5dem 
   :hidden            |el hidden yet5edmou $
   :visible           |el visible yet5edmou $
   :root		      |awel 3ones fi el doc <html>
   :lang              |p:lang('ar') elli lang ar yet5edmou
24)$("element[attribute]")
   $("element[attribute='value']")
   $("element[attribute!='value']") 
   $("element[attribute*='value']")      |*(contains) a7na nlwjou 3la kelmet test donc test testing the-test accepted
   $("element[attribute~='value']")      |~(contains exactly) a7na nlwjou 3la kelmet test donc test
   $("element[attribute^='value']")      |^(contains but start with it) a7na nlwjou 3la kelmet test donc test lezem tkoun awel kelma
   $("element[attribute=..]")   
   $("element[attribute],[attribute]")
25)(":input")       //wala tnajjem t7added ennawa3
   (":radio")
   (":checkbox")
   (":file")
   (":image")
   (":reset")
   (":submit")
   (":password")
   or 
   ("div :radio")   //just 7adedetlou el parent mte3ou
   input may be enabled , disabled , checked or selected in the html w can select them by those 
   :enabled
   :disabled
   :checked
   :Selected

*********************************************************************************************************************************************************************events
26)bind() kimaen on ama tna7et
   bind("event event", function)
   bind({
	event:fct,
	event:fct,
	event:fct
   })

   

   <!--nasn3ou event-->
   $(".custum").bind("custumEvent", function(e){       /or more parameters        (e  ,  myname)	
     p.text("hello"+my name)                 |                                     |        |
   <!--n5addmou el event-->                  |                                     |        |
   $("button").click(function(){             |                                     |        |
	            $(".custum").trigger("custumEvent");             trigger( "custumEvent" , ["mohamed"])
   });
27)live()
	3mall hakka: input file w bejnabha + ki nezel 3al + yjini input file + e5er ki nenzel 3al + mte3 el input crée ma yzidnich input file ama bel live delegate w on yzid
	ma3neha bi el click el 3adeya elli gadditou yentabe9 3al aslaneya bark ama live delgate w on elli gadditou yentaba9 7atta 3al crée
28)delegate (ma3adech mawjouda w mazed 7atta jdid mouchlezemtefhemha el on t3aweth lkoll yaweldi)
29)on(acion or custum event,functinon(event,parameters){})
30)event.preventDefault //lezem event fi el fct
   event.isDefaultPrevented (nesta3mloha m3a if lakthareya)
*************************************************************************************************************************************************************************
31)Keydown/Keypress/Keyup
32)change                     kima lifou9ha hhh ama te5dem b select menu zeda 
33)focus blur(lose focus)
34)one                        heya on ama one executed one time
35)select 					  3ibara chta3mel copier
36)resize                     on resize wrrini toul w 3rth ma test7a99ech reload bech yjouk les valeurs ess7a7 .on resize div.hight(window height) 
37)scroll
   scrollTop                  el valeur elli mel scroll wenti tala3
38)pageX pageY
39)submit                     3ta exemple ekteb confirm ken t7ebb tfassa5 compte submit .if s7i7a yab3eth else preventDefault
*********************************************************************************************************************************************************effects
40)delay                      just wa9et wakahaw exemple fadein(1000).delay(10000).fadeout(1000) 
*********************************************************************************************************************************************************html/css
41)clone(true/false)
   flase:clone it without events
   true:clone it with events
42)Detach(remove)             just ki nfssa5 elemen w n3awed nrajj3ou yab9ou el events ye5dmou 3lih 3adi
43)hasClass                   mafhouma nesta3mloha m3a if lakthareya
44)offset({top,left})         top w left mte3 obj .you can write div.offset().top or left
45)position                   ta3tik position mte3 el child fi wost el parent
46)prop                       ki attr ama ta3ti valeur(t/f) wala nbaddel valeur exp input.prp("disabled","disabled or(t/f)") w tnajjem t7ett barcha kima css name:med,value:..
47)replaceWith                obj tbadelha completement l obj e5er  wel events elli ken 3al obj yetfass5ou m3ah    
48)scrollTop 
49)wrap unwrap                (this).wrap("<div></div>") this 7ottou fi woset div (add parent ya3ni) wel 3akess(remove parent)
50)each                       blech each lezem koll li ena nclicki 3leha bech ntasteha each =koll -->koll li 3andha *** a3mlelha *** 
51)has("-,-,-..")             kima hasClass ama has element has class has tags ...
52)is("-,-,-..")              if this.is(":first-child")...
53)end                        kima el ; div.find(span).lawn(red).end().lawen(green)     =>span red +div green cause of end 9alet wfet 7keytek ya span w raj3et lel div
                                         |        |----------|                  |
                                         |                                      |
                                         |--------------------------------------|
*/