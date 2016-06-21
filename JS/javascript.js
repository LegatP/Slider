$(document).ready(function() {
    
    var numberOfSlides = 4;
    var currentSlide = 1;
    var previousSlide = 1;
    
    $(".changeSlide").click(function(){
        changeSlide($(this).attr('tag'));
        restartTimer();
    });
  
    var slideTimeOut = setInterval(function(){
        changeSlide("next");
        },3000);
        
    function restartTimer(){
        clearInterval(slideTimeOut);
        slideTimeOut = setInterval(function(){
        changeSlide("next");
        },3500);
    }
  
    function changeSlide(tag){
        $('.changeSlide').attr('disabled', 'disabled');
        previousSlide = currentSlide;
        if(tag == "next"){
            currentSlide++;
            if(currentSlide > numberOfSlides){
            currentSlide = 1;
            }
        }else if(tag == "previous"){
            currentSlide--;
            if(currentSlide < 1){
            currentSlide = numberOfSlides;
            }        
        }else{
            currentSlide = tag;
        }
          
        $("#slide").html(
                '<img style="z-index:1" src="/slides/slide' + currentSlide + '.jpg" />' +
                '<img style="z-index:2" id="fade" src="/slides/slide' + previousSlide + '.jpg" />'        
            );
            
         $("#fade").animate({
            opacity:0
            
            },1000,function(){
                $('.changeSlide').removeAttr('disabled');
            });
  }
  
});