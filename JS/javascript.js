$(document).ready(function() {
    
    var numberOfSlides = 2;
    var currentSlide = 1;
    var previousSlide = 1;
    
  $(".changeSlide").click(function () {
    previousSlide = currentSlide;
    if($(this).attr('tag') == "next"){
        currentSlide++;
        if(currentSlide > numberOfSlides){
        currentSlide = 1;
        }
    }else{
        currentSlide--;
        if(currentSlide < 1){
        currentSlide = numberOfSlides;
        }        
    }
      
    $("#slide").html(
            '<img src="/slides/slide' + currentSlide + '.jpg"></img>' +
            '<img src="/slides/slide' + previousSlide + '.jpg"></img>'        
        )
  });
  
  
  
  
  
  
  
});