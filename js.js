var nav=document.getElementById("my-nav"),
    rect=document.getElementById("rect"),
    prev1=document.getElementById("prev1"),
    next1=document.getElementById("next1"),
    prev2=document.getElementById("prev2"),
    next2=document.getElementById("next2"),
    slider1=document.getElementById("slider1"),
    slider2=document.getElementById("slider2"),
    slideImg=document.getElementById("slide-img"),
    link=document.getElementById("links"),
    bults1=document.getElementById("bult1"),
    bults2=document.querySelector(".bult2"),
    bult1=document.querySelectorAll("#bult1 span"),
    bult2=document.querySelectorAll(".bult2 span");


var oldWidth=slider1.offsetWidth;
var newWidth=3*oldWidth;
function scrollNext(slider){
    if(slider.scrollLeft>newWidth){
        slider.style.scrollBehavior="auto";
        slider.scrollLeft=0;}
    else{
        slider.style.scrollBehavior="smooth";
        slider.scrollLeft+=oldWidth+10;}
}
function scrollPrev(slid){
    if(slid.scrollLeft==0){
        slid.style.scrollBehavior="auto";
        slid.scrollLeft=newWidth;}
    else{
        slid.style.scrollBehavior="smooth";
        slid.scrollLeft-=oldWidth;
}}
next1.onclick=function(){scrollNext(slider1);}
next2.onclick=function(){scrollNext(slider2);}
prev1.onclick=function(){scrollPrev(slider1);}
prev2.onclick=function(){scrollPrev(slider2);}
console.log(screen.innertWidth);
function sliderBullts(list,s){
    for(var i=0;i<list.length;i++){
        list[i].addEventListener("click",function(){
            var el=list[0];
            while(el){
                if(el.tagName=="SPAN")
                {el.classList.remove("active");}
                el=el.nextSibling;
            }
            this.classList.add("active");
            var imgId=this.getAttribute("data-img");
            var img=document.getElementById(imgId);
            var imgOr=img.getAttribute("data-order");
            var imgW=img.offsetWidth;
            s.scrollLeft=imgOr*imgW;
        });
    }
}
sliderBullts(bult1,slider1);
sliderBullts(bult2,slider2);
//jquery
$(document).ready(function(){
   
    $('.browse').click(function(){
       $(".menu").slideToggle(500);
    });
    $('.dropdowan a').click(function(e){
        e.preventDefault();
        $('.menu input').val($(this).text());
        $('.menu .suggested').css('display','none');
        $('.menu .playlist').delay(1200).css('display','block');
    });
    $('.menu .x').click(function(){
        $('.menu input').val(" ");
        $('.menu .suggested').css('display','block');
        $('.menu .playlist').css('display','none');
    });
        
    $('.menu .playlist .row').hover(function()
        {$(this).find('img').css('opacity','1');
        $(this).find('span').css('color','#fff');
        $(this).find('p').css('color','#fff');},function(){
        $(this).find('img').css('opacity','0.7');
        $(this).find('span').css('color','#bbb');
        $(this).find('p').css('color','#999');
    });
    //login &signup
    
    $(".overlay .close1").click(function(){
        $(".over1").hide(200);
    });
    $(".overlay .close2").click(function(){
        $(".over2").hide(200);
    });
    $(".log").click(function(){
        $(".over2").hide();
        $(".over1").show(300);
    });
    $(".signup").click(function(){
        $(".over1").hide();
        $(".over2").show(300);
    });
    //slider
    /*function animateTxt(item,seconds){
        $(item).siblings().css("color","#888");
        $(item).delay(seconds).animate({color:"#fff"},200).animate({color:"#888"},100,
        animateTxt(item));
    }
    animateTxt("#science",200);
    animateTxt("#music",400);
    animateTxt("#film",600);
    animateTxt("#sport",800);*/
    //videos
    $(".myvid div").click(function(e){
        e.preventDefault();
        var vSrc=$(this).attr("data-src");
        $(".src-vid video").attr("src","videos/"+vSrc+".mp4");
    });
    $(".persones a").click(function(e){
        e.preventDefault();
        $(".persones a").find("span").css("width","0");
        $(this).find("span").css("width",$(this).css("width"));
        $(".person").css("display","none");
        $("."+this.getAttribute("data-person")).css("display","inline-block");
        $(".show").css("display","none");
    });
    $(".persones .all").click(function(){
        $(".person").css("display","inline-block");
        $(".more").css("display","none");
        $(".show").css("display","block");
    });
    //acordion
    $(".acord-box").click(function(){
        $(".acord-box p").slideUp();
        $(".acord-box .fa").removeClass("fa-angle-up");
        $(".acord-box .fa").addClass("fa-angle-down");
        $(this).find("p").slideToggle();
        $(this).find(".fa").toggleClass("fa-angle-down fa-angle-up");
    });
    //show more
    $(".show").click(function(e){
        var txt=$(this).text().trim();
        e.preventDefault();
        if(txt=="Show More")
            {$(this).text("Show Less");
            $(".more").css("display","inline-block");
        }else{
            $(this).text("Show More");
            $(".more").css("display","none");
        }
    });
    $(window).scroll(function(){
        if($(window).scrollTop()<11500){
            $(".message").slideDown(400);
        }else{$(".message").hide(400);}
    })
})
